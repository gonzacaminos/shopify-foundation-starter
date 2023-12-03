<script>
    import {ref} from 'vue'

    export default({  
        setup() {
            const mobileOpen = ref(false)
            const isOpenSearch = ref(false)
            const activeMenu = ref(-1)

            const toggleMenu = () => { mobileOpen.value = !mobileOpen.value; }
            const toggleSearch = () => { isOpenSearch.value = !isOpenSearch.value; }
            const setActiveMenu = (menu) => { activeMenu.value = menu; }

            const appendParameter = ({ parameter }, $event) => {
                const url = new URL(window.location)
                url.searchParams.set(parameter, $event.target.value)
                window.location = url
            }

            return { 
                mobileOpen,
                toggleMenu,
                isOpenSearch,
                toggleSearch,
                activeMenu,
                setActiveMenu,
                appendParameter
            }
        },
        computed: {
           
        },
        created(){
        },
        mounted(){
        },
        })
</script>
