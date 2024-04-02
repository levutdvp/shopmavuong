import { defineStore } from "pinia";

export const store = defineStore('store', {
    state: () => ({
        isAuthenticated: false
    }),
    actions: {
        login() {
            this.isAuthenticated = true
        },
        logout() {
            this.isAuthenticated = false
        }
    }
})