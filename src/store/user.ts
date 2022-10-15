import { defineStore } from "pinia";

export const userStore = defineStore("user", {
  state: () => ({ token: 12 }),
  getters: {
    getUserMsg: (state) => state.token + 2,
  },
});
