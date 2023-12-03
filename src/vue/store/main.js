import { defineStore } from 'pinia'


// Main state manager 

export const useMainStore = defineStore('store', {
    state: () => (
      { 
        status: 'ready'
       
      }
      ),
    getters: {      
    },
    actions: {

    },
    persist: false
  })