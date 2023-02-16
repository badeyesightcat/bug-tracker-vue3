<template>
  <main class="login-wrap flex justify-center items-center flex-col">
    <h1 class="brandname text-center mb-8">Landscape</h1>
    <form action="" class="login-form flex flex-col">
      <fieldset class="flex flex-col login-input-section">
        <input
          :value="loginForm.username"
          name="username"
          @input="handleLoginformInput"
          class="login-input"
          placeholder="username"
        />
        <input
          type="password"
          :value="loginForm.password"
          name="password"
          @input="handleLoginformInput"
          class="login-input"
          placeholder="password"
        />
      </fieldset>
      <button
        type="submit"
        @click.prevent="handleSubmitForm"
        class="login-btn"
        :class="{
          readyToSubmit: loginForm.username !== '' && loginForm.password !== '',
        }"
      >
        Submit to sign in
      </button>
    </form>
  </main>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/auth.js";

const store = useAuthStore();
const { signIn } = store;
const { auth } = storeToRefs(store);
const loginForm = ref({
  username: "",
  password: "",
});

const handleLoginformInput = (e) => {
  loginForm.value = {
    ...loginForm.value,
    [e.target.name]: e.target.value,
  };
};

const handleSubmitForm = () => {
  signIn({
    username: loginForm.value.username,
    password: loginForm.value.password,
  });
};

onMounted(() => {
  console.table(auth);
});
</script>

<style scoped>
.login-wrap {
  position: relative;
  height: 100vh;
  background: rgba(0, 0, 0, 0.25) url(../assets/images/visit-greenland.jpg)
    no-repeat; /* from "Visit Greenland(@visitgreenland) */
  background-size: cover;
  background-blend-mode: multiply;
}

.login-form {
  position: relative;
  z-index: 1;
  gap: 2rem;
}

.login-input-section {
  gap: 1rem;
}

.login-input {
  padding: 0 0.5rem;
  height: 2.5rem;
  background: var(--neutral700);
  border: 0;
  color: var(--fontColor);
}

.login-input::placeholder {
  color: var(--white);
}

.login-btn {
  /* border: 0.25rem solid var(--primaryDark); */
  background: var(--secondaryDark);
  height: 2.5rem;
  color: var(--white);
}

.login-btn.readyToSubmit {
  background: var(--secondaryMain);
  color: var(--fontColor);
  font-weight: 700;
}
</style>
