import { createStore } from 'vuex'
import router from  '../router/index.js';
export default createStore({
  state: {
    username: "",
    password: "",
    isAuthenticated: null,
  },

  mutations: {
    //* 2. Create a mutation to update the state

    SET_USER(state, user) {
      state.username = user
    },
    SET_PASSWORD(state, password) {
      state.password = password
    },
    SET_AUTHENTICATED(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated
    }

  },
  actions: {
    //* 1. Create an action to commit the mutation

    signup({ commit }, userData) {
       //* passing the user data to a variable

      localStorage.setItem('userInfo', JSON.stringify(userData)); //* seting the user data to localStorage so as not to lose data on refersh
      const getLocalInfo = localStorage.getItem('userInfo');//* geting the userInfo from loacalstorage
      localStorage.setItem('token', JSON.stringify(1)); //* geting the token from loacalstorage
      const parseLocalInfo = JSON.parse(getLocalInfo); //* parsing the userInfo from localStorage
      
      commit('SET_USER', parseLocalInfo.username);
      commit('SET_PASSWORD',parseLocalInfo.password);
      commit('SET_AUTHENTICATED', parseLocalInfo.auth);

      alert('redirection to dashboard')
      router.push('/dashboard')
    },
    // login action 

    login( { commit}, userData) {
      const {username, password} = userData;
      if (this.state.username === username && this.state.password === password && this.state.isAuthenticated === true) {
        alert('good to go ')
        router.push('/dashboard')
      }else if( username === this.state.username && password === this.state.password && this.state.isAuthenticated === false) {
        localStorage.setItem('token', 1);
        commit('SET_AUTHENTICATED', true);
        router.push('/dashboard');
      }
      else{
        alert('worng credentials')
      }
  },
  logout({commit}){

    localStorage.removeItem('token');
    commit('SET_AUTHENTICATED', false);
    alert('loging out ');
    router.push('/login')
  }
},
  getters: {
    
  },
});