<template>
  <div class="container">
    <header><h1>Get Started</h1></header>
    Learn how to start building, shipping, and maintaining software with GitHub. Explore our
    products, sign up for an account, and connect with the world's largest development community.
    <ul>
      <li>In the first step, provide your first name, last name and user name</li>
      <li>In the next step, provide your email address and accept to the terms and conditions</li>
      <li>Your account is successfully created</li>
    </ul>
    <!-- footer component -->
    <form-footer :currentValue="1"></form-footer>
  </div>
</template>

<script>
import FormFooter from "./FormFooter.vue";
export default {
  name: "IntroSlide",
  components: { FormFooter },
};
</script>
