<template>
  <div class="container">
    <h1>User information</h1>
    <ValidationObserver v-slot="{ invalid }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <fieldset>
          <!-- Email -->
          <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
            <div class="form-fields">
              <label>Email<span class="error">*</span></label>
              <input type="email" v-model="email" />
              <p class="error">{{ errors[0] }}</p>
            </div>
          </ValidationProvider>
          <!-- terms and conditons -->
          <ValidationProvider name="accept" rules="required" v-slot="{ errors }">
            <div class="form-terms">
              <label for="checkbox">Accept terms and conditions</label>
              <input type="checkbox" v-model="accept" />
            </div>
            <p class="error">{{ errors[0] }}</p>
          </ValidationProvider>
        </fieldset>
      </form>
      <!-- footer component -->
      <form-footer :currentValue="3" :state="invalid"></form-footer>
    </ValidationObserver>
  </div>
</template>

<script>
import FormFooter from "./FormFooter.vue";
export default {
  name: "StepTwo",
  components: { FormFooter },
  computed: {
    // getting/setting formData from store state
    email: {
      get() {
        return this.$store.state.formData.email;
      },
      set(value) {
        this.$store.commit("updateField", { value, field: "email" });
      },
    },
    accept: {
      get() {
        return this.$store.state.formData.accept;
      },
      set(value) {
        this.$store.commit("updateField", {
          value: value === false ? null : value,
          field: "accept",
        });
      },
    },
  },
};
</script>
