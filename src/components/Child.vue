<template>
    <div>
        <p>这里是子组件</p>
        <p>{{msg}}</p>
        <form>
            <input type="text" v-model="childMsg">
            <button @click.prevent="getData">点击子组件</button>
        </form>
    </div>
</template>
<script>
export default {
    data(){
        return {
            childMsg:''
        }
    },
    props:['msg'],
    methods:{
        getData(){
            this.$emit('changeData',this.childMsg)
        }
    }
}
</script>