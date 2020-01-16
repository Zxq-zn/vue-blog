import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: { //this.$store.state.count调用
        count: 233
    },
    getters: {
        getCount(state) { //this.$store.getters.getCount调用
            return state.count;
        }
    },
    mutations: { //同步修改
        addCount(state) { //
            state.count++
        },
        reduceCount(state) { //this.$store.commit('reduceCount')调用
            state.count--
        }
    },
    actions: { //异步修改
        addCountAsync(context) { //this.$store.dispatch('addCountAsync')调用陪你过
            setTimeout(() => {
                context.commit('addCount')
            }, 1000)
        }
    },
    modules: {

    }
})