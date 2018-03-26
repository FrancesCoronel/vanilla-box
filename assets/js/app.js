/** Variables **/

/**
 * Array that will store images fetched from Google Custom Search API
 * @type {Array}
 */
let fetchedImages = [];

/**
 * Keeping track of the total number of images created
 * @type {Number}
 */
let numberOfImages = 0;

/**
 * Current index of lightbox thumbnail for displaying purposes
 * @type {Number}
 */
let currentIndex = 0;

/**
 * Thumbnail gallery
 * @type {document.Element}
 */
const thumbnails = document.getElementById("thumbnails");

/**
 * Lightbox view when clicking on a thumbnail image
 * @type {document.Element}
 */
const lightbox = document.getElementById("lightbox");

/**
 * Lightbox view - image being shown
 * @type {document.Element}
 */
const lightboxImage = document.getElementById("image");

/**
 * Lightbox view - title of image being shown
 * @type {document.Element}
 */
const lightboxImageTitle = document.getElementById("title");

/**
 * Lightbox view - previous image button
 * @type {document.Element}
 */
const lightboxPrevious = document.getElementById("previous");

/**
 * Lightbox view - next image button
 * @type {document.Element}
 */
const lightboxNext = document.getElementById("next");

/**
 * Lightbox view - close view button
 * @type {document.Element}
 */
const lightboxClose = document.getElementById("close");

/** API Configuration **/

/**
 * Setting up Google Custom Search API
 * @type {Object}
 */
const googleCustomSearchAPI = {
  // API key
  key: "AIzaSyCEXyoz7_eNS34J8hEIfItph8TJF5dIWOg",
  // API URL
  url: "https://www.googleapis.com/customsearch/v1"
};

/**
 * Initializing the Google Custom Search API configuration object
 * See https://developers.google.com/custom-search/json-api/v1/reference/cse/list
 * @type {Object}
 */
const googleCustomSearchAPIConfig = {
  // the custom search engine ID to use for this request
  cx: "008213476470887739041:kbgbn6nopny",
  // returns black and white, grayscale, or color images
  imgColorType: "color",
  // returns images of a specified size
  imgSize: "xlarge",
  // the search expression
  q: "vanilla+ice+cream",
  // number of search results to return
  // valid values are integers between 1 and 10, inclusive
  num: "9",
  // specifies the search type: image
  searchType: "image"
};

/**
 * Setting up hard coded path for search query that uses values from config object defined earlier
 * e.g. https://www.googleapis.com/customsearch/v1/?q=vanilla+ice+cream&key=AIzaSyCEXyoz7_eNS34J8hEIfItph8TJF5dIWOg&num=9&cx=008213476470887739041:ade_gb9mv7g&exactTerms=vanilla&searchType=image&imgSize=xlarge&imgColorType=color
 * @type {URL}
 */
const imageRequestURL = `${googleCustomSearchAPI.url}?q=${
  googleCustomSearchAPIConfig.q
}&cx=${googleCustomSearchAPIConfig.cx}&key=${googleCustomSearchAPI.key}&num=${
  googleCustomSearchAPIConfig.num
}&searchType=${googleCustomSearchAPIConfig.searchType}&imgSize=${
  googleCustomSearchAPIConfig.imgSize
}&imgColorType=${googleCustomSearchAPIConfig.imgColorType}`;

/** Loader **/

/**
 * Show loader animation of images
 * @param  {document.Element} targetElement
 */
const showLoader = targetElement => {
  if (targetElement) {
    const loader = document.createElement("div");
    loader.className = "loader";
    targetElement.appendChild(loader);
  }
};

/**
 * Hide loader animation of images
 * @param  {document.Element} targetElement
 */
const hideLoader = targetElement => {
  if (targetElement) {
    const loader = document.querySelector(
      `.thumbnail[data-id="${targetElement.getAttribute(
        "data-id"
      )}"] div.loader`
    );
    targetElement.removeChild(loader);
  }
};

/** Thumbnails **/

/**
 * Fetches images using API url and then calls initialization methods
 */
const fetchAllImages = () => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = e => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);
      fetchedImages = fetchedImages.concat(response.items);
      if (response.items) {
        response.items.map(image => {
          loadThumbnail(numberOfImages);
          loadThumbnailImage(image, numberOfImages);
          numberOfImages++;
        });
      } else {
        console.error("Error fetching images from API: ", e);
      }
    }
  };
  xhr.onerror = () => console.error(xhr.statusText);
  xhr.open("GET", imageRequestURL);
  xhr.send(null);
};

/**
 * Create thumbnail DOM element based off ID
 * @param  {integer} id
 */
const loadThumbnail = id => {
  const thumbnail = document.createElement("div");
  thumbnail.className = "thumbnail";
  thumbnail.setAttribute("data-id", id);
  thumbnails.appendChild(thumbnail);
};

/**
 * Load images
 * @param  {[type]} image
 * @param  {[type]} id
 */
const loadThumbnailImage = (image, id) => {
  const thumbnail = document.querySelector(`.thumbnail[data-id="${id}"]`);
  showLoader(thumbnail);
  let imageContainer = new Image();
  imageContainer.onload = () => {
    thumbnail.appendChild(imageContainer);
    hideLoader(thumbnail);
  };
  imageContainer.src = image.link;
  imageContainer.alt = image.title;
  imageContainer.onclick = () => loadLightboxView(id);
};

/** Lightbox View */

/**
 * Load lightbox view with fetched image
 * @param  {Integer} index
 */
const loadLightboxView = index => {
  currentIndex = index;
  lightbox.classList.remove("hide");
  lightboxImage.src = fetchedImages[index].link;
  lightboxImageTitle.innerHTML = fetchedImages[index].title;
};

/**
 * Load lightbox buttons
 */
const loadLightboxButtons = () => {
  lightboxPrevious.onclick = () => navigateLightboxView(-1);
  lightboxNext.onclick = () => navigateLightboxView(1);
  lightboxClose.onclick = () => closeLightboxView();
};

/**
 * Changes lightbox view to show next or previous image
 * @param  {integer} direction
 */
const navigateLightboxView = direction => {
  if (direction !== -1 && direction !== 1) {
    return;
  }
  lightboxImage.src = "";
  currentIndex += direction;
  if (currentIndex > fetchedImages.length - 1) {
    currentIndex = 0;
  }
  if (currentIndex < 0) {
    currentIndex = fetchedImages.length - 1;
  }
  loadLightboxView(currentIndex);
};

/**
 * Closes the lightbox view
 */
const closeLightboxView = () => {
  lightbox.classList.add("hide");
  lightboxImage.src = "";
  lightboxImageTitle.innerHTML = "";
};

/**
 * Fetch images using API config
 */
fetchAllImages();

/**
 * Load lightbox buttons
 */
loadLightboxButtons();