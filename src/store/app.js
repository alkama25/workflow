import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

const getDefaultState = () => {
  return {
    formData: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      accept: null,
    },
    userData: null,
  };
};

const state = getDefaultState();

const mutations = {
  // update form fields
  updateField: (state, { value, field }) => {
    state.formData[field] = value;
  },
  // store user data
  setUserDetails: (state, value) => {
    state.userData = value;
  },
  // reset state after going to home page
  resetState: (state) => {
    Object.assign(state, getDefaultState());
  },
};
const actions = {
  async submitUser({ commit }) {
    const response = await axios.get(
      `https://api.github.com/users/${this.state.formData.username}`
    );
    commit("setUserDetails", response.data);
    return response;
  },
};

export const store = new Vuex.Store({
  state,
  mutations,
  actions,
});
