<template>
  <div>
    <nav class="footer-panel">
      <!-- back button -->
      <button class="button" v-if="currentValue > 1" @click="previousStep">Back</button>
      <!-- current page number -->
      <p>{{ currentValue }}/4</p>
      <!-- next button -->
      <button class="button loader" v-if="currentValue < 4" @click="nextStep" :disabled="state">
        <!-- loader till we get response from the api -->
        <svg
          v-if="isLoading"
          class="animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        Next
      </button>
    </nav>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FormFooter",
  props: {
    currentValue: Number,
    state: Boolean,
  },
  data() {
    return {
      currentPath: this.currentValue,
      isLoading: false,
    };
  },
  methods: {
    ...mapActions(["submitUser"]),
    // action to be emitted on clicking on next button
    nextStep() {
      if (this.$route.path === "/3") {
        this.submitUserDetails();
      } else {
        ++this.currentPath;
        this.$router.push({ path: `${this.currentPath}` });
      }
    },
    // action to be emitted on clicking on previous button
    previousStep() {
      if (this.currentPath == 2) {
        this.$router.push("/");
      } else {
        --this.currentPath;
        this.$router.push({ path: `${this.currentPath}` });
      }
    },
    // calling the submit user action in store
    async submitUserDetails() {
      try {
        this.isLoading = true;
        await this.submitUser();
        this.isLoading = false;
        ++this.currentPath;
        this.$router.push({ path: `${this.currentPath}` });
        return true;
      } catch (error) {
        this.isLoading = false;
        ++this.currentPath;
        this.$router.push({ path: `${this.currentPath}` });
        return false;
      }
    },
  },
};
</script>
