<template>
    <div>
        <p>这里是父组件</p>
        <Child :msg="message" @changeData="getChildData"></Child>
    </div>
</template>
<script>
import Child from '@/components/Child.vue'
import Bus from './Bus.js'

export default {
    data(){
        return {
            message:'123'
        }
    },
    components:{
        Child
    },
    methods:{
        getChildData(data){
            console.log(data);
        }
    },
    mounted(){
        Bus.$on('busEvent',(res)=>{
            console.log('bus监听到了');
            console.log(res);
        })
    }
}
</script>