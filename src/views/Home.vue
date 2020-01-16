<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Parent></Parent>
  </div>
</template>

<script>
// @ is an alias to /src
import Parent from '@/components/Parent.vue'

export default {
  name: 'home',
  components: {
    Parent
  }
}
</script>
