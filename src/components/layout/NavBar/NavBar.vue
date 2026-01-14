<template>
  <!-- START NAV -->
  <nav class="navbar is-white">
    <div class="container">
      <div class="navbar-brand">
        <p class="navbar-item brand-text">CS.CODE</p>
        <div class="navbar-burger burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenu" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="admin.html">Barcode generator</a>
          <a class="navbar-item is-disabled" href="admin.html" disabled>File generator</a>
          <a class="navbar-item is-disabled" href="admin.html">Model manager</a>
          <a class="navbar-item is-disabled" href="admin.html">Plugins</a>
        </div>
        <div class="navbar-end has-background-warning has-text-warning-dark">
          <a class="navbar-item" href="admin.html">Admin</a>
        </div>
      </div>
    </div>
  </nav>
  <!-- END NAV -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NavBarComponent',
  setup() {
    return {}
  },
})
</script>

<style scoped lang="scss"></style>
