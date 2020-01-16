<template>
    <div>
        <p>这里是父组件</p>
        <Child :msg="message" @changeData="getChildData"></Child>
    </div>
</template>
<script>
import Child from '@/components/Child.vue'

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
    }
}
</script>