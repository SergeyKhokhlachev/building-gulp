// import libs
import $ from 'jquery';
import 'slick-carousel';

// import utils
import * as utils from './utils.js';

// check Webp support
utils.isWebp().then((hasWebP) => document.documentElement.classList.add(hasWebP ? 'webp' : 'no-webp'));

// check device type
document.documentElement.classList.add(utils.isMobile() ? 'mobile' : 'desktop');

// init plugins
$(document).ready(() => {
  $('.slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
  });
});
