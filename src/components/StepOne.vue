<template>
  <div class="container">
    <h1>User information</h1>
    <ValidationObserver v-slot="{ invalid }">
      <form @submit.prevent="onSubmit">
        <fieldset>
          <!-- first name -->
          <ValidationProvider name="first name" rules="required|alpha_spaces" v-slot="{ errors }">
            <div class="form-fields">
              <label>First name<span class="error">*</span></label>
              <input type="text" v-model="firstName" />
              <p class="error">{{ errors[0] }}</p>
            </div>
          </ValidationProvider>
          <!-- last name -->
          <ValidationProvider name="last name" rules="required|alpha_spaces" v-slot="{ errors }">
            <div class="form-fields">
              <label>Last name<span class="error">*</span></label>
              <input type="text" v-model="lastName" />
              <p class="error">{{ errors[0] }}</p>
            </div>
          </ValidationProvider>
          <!-- user name -->
          <ValidationProvider name="username" rules="required" v-slot="{ errors }">
            <div class="form-fields">
              <label>User name<span class="error">*</span></label>
              <input type="text" v-model="username" />
              <p class="error">{{ errors[0] }}</p>
            </div>
          </ValidationProvider>
        </fieldset>
      </form>
      <!-- footer component -->
      <form-footer :currentValue="2" :state="invalid"></form-footer>
    </ValidationObserver>
  </div>
</template>

<script>
import FormFooter from "./FormFooter.vue";
export default {
  name: "StepOne",
  components: { FormFooter },
  computed: {
    // getting/setting formData from store state
    firstName: {
      get() {
        return this.$store.state.formData.firstName;
      },
      set(value) {
        this.$store.commit("updateField", { value, field: "firstName" });
      },
    },
    lastName: {
      get() {
        return this.$store.state.formData.lastName;
      },
      set(value) {
        this.$store.commit("updateField", { value, field: "lastName" });
      },
    },
    username: {
      get() {
        return this.$store.state.formData.username;
      },
      set(value) {
        this.$store.commit("updateField", { value, field: "username" });
      },
    },
  },

  data() {
    return {};
  },
  methods: {
    onSubmit() {},
  },
};
</script>
