import Vue from 'vue'
import Vuex from 'vuex'
import { dialog } from './app/dialog'
import { snackBar } from './app/snackBar'
import { user } from './app/user'
import { loading } from './app/loading'
import { stepper } from './app/stepper'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        dialog,
        snackBar,
        user,
        loading,
        stepper,
        
    }
})