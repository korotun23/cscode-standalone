<template>
  <footer class="footer is-white mt-auto">
    <p class="has-text-weight-semibold has-text-grey">
      &copy; {{ new Date().getFullYear() }} - CSCode - J. Korotun @ LSDev
    </p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FooterComponent',
  setup() {
    return {}
  },
})
</script>

<style scoped lang="scss"></style>
