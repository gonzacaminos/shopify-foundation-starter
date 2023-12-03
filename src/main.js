/**
 * imports
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './scss/main.scss'
import App from './vue/App.vue'
import {Ajaxinate} from 'ajaxinate';
import GLightbox from 'glightbox';


/**
 * create vue instance function
 */
const createVueApp = (selector) => {
  const app = createApp(App)

  /**
   * vue components
   * auto-import all vue components
   */
  const pinia = createPinia()
  // pinia.use(createPersistedState({
  //   key: id => `__persisted__${selector}__${id}_${window.Shopify.theme.id}`,
  // }))

  const vueComponents = require.context('./vue/components/', true, /\.(vue|js)$/)

  vueComponents.keys().forEach(key => {
    const component = vueComponents(key).default

    // if a component has a name defined use the name, else use the path as the component name
    const name = component.name
      ? component.name
      : key.replace(/\.(\/|vue|js)/g, '').replace(/(\/|-|_|\s)\w/g, (match) => match.slice(1).toUpperCase())

    app.component(name, component)
  })

  /**
   * vue plugins
   * extend with additional features
   */
  app.use(pinia)
  
  app.config.compilerOptions.delimiters = ['${', '}']
  return app
}

/**
 * create and mount vue instance(s)
 */
const appElements = document.querySelectorAll('.vue-app')

appElements.forEach( e => createVueApp(e).mount(e) )

/**
 * fixes for Shopify sections
 * 1. properly render vue components on user insert in the theme editor
 * 2. reload the current page to rerender async inserted sections with vue components
 *
 * add the 'vue' keyword to the section's wrapper classes if the section uses any vue functionality e.g.:
 * {% schema %}
 * {
 *   "class": "vue-section"
 * }
 * {% endschema %}
 */


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

if (Shopify.designMode) {
  document.addEventListener('shopify:section:load', (event) => {
    if (event.target.classList.value.includes('vue')) {
      createVueApp().mount(event.target)
    }
  })
} else if (!Shopify.designMode && process.env.NODE_ENV === 'development') {
  new MutationObserver((mutationsList) => {
    mutationsList.forEach(record => {
      const vue = Array.from(record.addedNodes).find(node => node.classList && node.classList.value.includes('vue'))
      if (vue) window.location.reload()
    })
  }).observe(document.body, {
    childList: true,
    subtree: true
  })
}