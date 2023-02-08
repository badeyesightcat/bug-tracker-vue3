<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/auth";
import LoginView from "@/views/LoginView.vue";

const store = useAuthStore();
const { auth } = storeToRefs(store);

onMounted(() => {
  console.log(auth.value.isLoggedIn);
});
</script>

<template>
  <!-- <RouterView /> -->
  <LoginView v-if="!auth.value?.isLoggedIn" />
</template>

<style scoped></style>
