<script>
import { ref,watch } from 'vue'
import {useProductStore} from '@/vue/store/product'
import { storeToRefs } from "pinia";

export default {
  props: {
    initial: {
      type: [String],
      default: null
    }
  },
  setup (props, { slots }) {
    const currentImage = ref(props.initial)
    const store = useProductStore()
    const { currentVariant } = storeToRefs(store);

    const switchImage = ($el) => {
      currentImage.value = $el
    }

    watch(currentVariant, () => {
      const new_image = currentVariant.value.featured_image.id;
      currentImage.value = new_image
    })

    return () => slots.default({
      currentImage: currentImage.value,
      switchImage
    })
  }
}
</script>