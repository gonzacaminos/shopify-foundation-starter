/**
 * imports
 */
import './scss/main.scss'
import Alpine from 'alpinejs'
import GoCart from '@lonelypixels/gocart';
import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
import {Ajaxinate} from 'ajaxinate';
import GLightbox from 'glightbox';

window.Alpine = Alpine

Alpine.start()

const goCartOptions = { 
    cartHtml: "whatever",
    labelRemove: "",
    labelQuantity: "", 
    useDropdown: false
   }
   
const goCart = new GoCart(goCartOptions);
const swiper_options = (name) => ({
  modules: [Navigation, Pagination],
  pagination: {
      el: `.swiper-pagination.pagination-${name}`,
      clickable: true
    },
  navigation: {
      nextEl: `.swiper-button-next.button-${name}`,
      prevEl: `.swiper-button-prev.button-${name}`,
      lockClass: 'lock',
      navigationDisabledClass: 'dis'
  }
})


const carousels = document.querySelectorAll('.swiper');

carousels.forEach(function(carousel) {
  var swiper = new Swiper(carousel, swiper_options(carousel.id));
});

const swiper_scroll = new Swiper(".swiper-scroll", {
  modules: [Navigation, Pagination, Scrollbar],
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  },
  centeredSlides: false,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
    draggable: true
  },
  navigation: {
    nextEl: ".swiper-button-next.scroll",
    prevEl: ".swiper-button-prev.scroll",
  }
});

Shopify.queryParams = {};
// Preserve existing query parameters
if (location.search.length) {
  var params = location.search.substr(1).split('&');
  for (var i = 0; i < params.length; i++) {
    var keyValue = params[i].split('=');
    if (keyValue.length) {
      Shopify.queryParams[decodeURIComponent(keyValue[0])] = decodeURIComponent(keyValue[1]);
    }
  }
}
// Update sort_by query parameter on select change
const sort_by = document.querySelector('#sort-by')

if(sort_by) {
  sort_by.addEventListener('change', function(e) {
    var value = e.target.value;
    Shopify.queryParams.sort_by = value;
    location.search = new URLSearchParams(Shopify.queryParams).toString();
  });
}


new Ajaxinate({
  container: '#AjaxinateContainer',
  pagination: '#AjaxinatePagination',
  loadingText: 'Loading more...',
  method: 'click'
});

const lightbox = GLightbox({
  touchNavigation: true,
  loop: true,
  autoplayVideos: true
});

const toggleImages = document.querySelectorAll(".toggleImage")
for (const button of toggleImages) {
  button.addEventListener('click', function(event) {
    lightbox.reload();
  })
}