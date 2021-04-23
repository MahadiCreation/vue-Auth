import {createStore} from 'vuex'

export default createStore({
    state:{
        authenticated:false,
        user:{}
    },
    getters:{
        getUser(state){
            return state.user
        },
        getAuthenticated(state){
            return state.authenticated
        }
    },
    mutations:{
        SET_AUTHHENTICATED(state, auth){
            state.authenticated = auth
        },
        SET_USER(state, user){
            state.user = user
        }
    }
})