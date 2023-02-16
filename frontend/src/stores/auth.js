import { ref } from "vue"; //, computed
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const auth = ref({
    username: "",
    password: "",
    isAdmin: false,
    isLoggedIn: false,
  });
  // const doubleCount = computed(() => count.value * 2);
  // function increment() {
  //   count.value++;
  // }
  function signIn({ username, password }) {
    auth.value.isLoggedIn = true;
    auth.value.isAdmin = true;
    auth.value.username = username;
    auth.value.password = password;
    console.log(auth);
  }
  function signOut() {
    auth.value.isLoggedIn = false;
    auth.value.isAdmin = false;
  }

  return { auth, signIn, signOut };
});
