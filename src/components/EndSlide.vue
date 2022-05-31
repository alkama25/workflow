<template>
  <div class="container">
    <!-- if the user data has details of the user registered -->
    <div v-if="userData">
      <h1>Hello {{ userData.login }}</h1>
      <div class="user-info">
        <p>Name : {{ formData.firstName + " " + formData.lastName }}</p>
        <p>Email : {{ formData.email }}</p>
        <img :src="userData.avatar_url" width="60" height="60" />
        <router-link class="link-text" to="/">Back to home page</router-link>
        <a :href="userData.html_url" target="_blank" class="link-text">Go to github profile</a>
      </div>
    </div>
    <!-- if user details are not found -->
    <div v-else class="user-info">
      <h1>User not found</h1>
      <router-link class="link-text" to="/">Back to home page</router-link>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "EndSlide",
  computed: {
    ...mapState(["userData", "formData"]),
  },
  methods: {
    ...mapMutations(["resetState"]),
  },
  destroyed() {
    this.resetState();
  },
};
</script>
