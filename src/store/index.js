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
    },
    actions:{
        authUser({commit}){
           // let auth = localStorage.getItem('auth');
            let getUser = localStorage.getItem('userData')
            commit('SET_AUTHHENTICATED', true);
            commit('SET_USER', JSON.parse(getUser));
        }
    }
})