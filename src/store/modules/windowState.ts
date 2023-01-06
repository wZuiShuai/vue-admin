import { defineStore } from "pinia";

export const windowStateStore = defineStore("windowState", {
  state: () => ({ isExpand: true }),
  actions: {
		async setCollapse() {
			this.isExpand = !this.isExpand;
		},
	},
  persist: {
    storage: sessionStorage,
    paths: ['isExpand'],
  },
});
