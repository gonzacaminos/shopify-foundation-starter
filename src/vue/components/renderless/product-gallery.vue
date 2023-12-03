<script>
import { ref } from 'vue'

export default {
  setup (props, { slots }) {
    const currentImage = ref(0)

    const switchImage = ($el) => {
      currentImage.value = $el
    }

    return () => slots.default({
      currentImage: currentImage.value,
      switchImage
    })
  }
}
</script>