/**
 * imports
 */
import './scss/main.scss'
import Alpine from 'alpinejs'
import GoCart from '@dango-digital/gocart';

window.Alpine = Alpine

Alpine.start()

const goCartOptions = { 
    cartHtml: "whatever",
    labelRemove: "",
    labelQuantity: "", 
    useDropdown: true
   }
   
const goCart = new GoCart(goCartOptions);