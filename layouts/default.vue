<template>
  <div>
    <navbar></navbar>
    <nuxt/>
    <footer></footer>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar'

  export default {
    components: {
      Navbar
    }
  }
</script>

<style>
  * {
    font-family: 'Inconsolata', monospace;
  }
</style>