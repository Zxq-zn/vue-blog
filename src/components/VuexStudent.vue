<template>
    <div>
        <p>count = {{count}}</p>
        <button @click="print">点击</button>
        <button @click="add">+</button>
        <button @click="reduce">-</button>
    </div>
</template>
<script>

export default {
    computed:{
        count(){
            return this.$store.state.count
        }
    },
    methods: {
        print() {
            console.log(this.$store.state.count)
            console.log(this.$store.getters.getCount)
            },
        add() {
            this.$store.dispatch('addCountAsync')
            },
        reduce() {
            this.$store.commit('reduceCount')
            }
        }
}
</script>