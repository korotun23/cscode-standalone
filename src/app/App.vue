<template>
  <NavBarComponent />
  <RouterView />
  <FooterComponent />
</template>

<script lang="ts">
// Import router
import { RouterView } from 'vue-router'

// Import components
import NavBarComponent from '../components/layout/NavBar/NavBar.vue'
import FooterComponent from '../components/layout/Footer/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBarComponent,
    FooterComponent,
    RouterView,
  },
  setup() {
    return {}
  },
}
</script>

<style scoped></style>
