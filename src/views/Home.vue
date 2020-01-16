<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Parent></Parent>
    <Vuex-student></Vuex-student>
  </div>
</template>

<script>
// @ is an alias to /src
import Parent from '@/components/Parent.vue'
import VuexStudent from '@/components/VuexStudent.vue'

export default {
  name: 'home',
  components: {
    Parent,
    VuexStudent
  }
}
</script>
