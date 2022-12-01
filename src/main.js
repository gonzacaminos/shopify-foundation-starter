/**
 * imports
 */
import './scss/main.scss'
import Alpine from 'alpinejs'
import GoCart from '@dango-digital/gocart';
import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
import {Ajaxinate} from 'ajaxinate';

window.Alpine = Alpine

Alpine.start()

const goCartOptions = { 
    cartHtml: "whatever",
    labelRemove: "",
    labelQuantity: "", 
    useDropdown: true
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

new Ajaxinate({
  container: '#AjaxinateContainer',
  pagination: '#AjaxinatePagination',
  loadingText: 'Loading more...',
  method: 'click'
});
