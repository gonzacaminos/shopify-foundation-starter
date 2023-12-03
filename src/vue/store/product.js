import { defineStore } from 'pinia'


// Main state manager 

export const useProductStore = defineStore('product', {
    state: () => (
      { 
        currentVariant: {}
       
      }
      ),
    getters: {      
    },
    actions: {

    },
    persist: false
  })