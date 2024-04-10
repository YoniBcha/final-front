import axios from "axios";
import { defineStore } from "pinia";

export const useRegistrationStore = defineStore("registration", {
  state: () => ({
    name: "",
    username: "",
    email: "",
    password: "",
    confirm_Password: "",
    error: null,
  }),
  actions: {
    async signup() {
      const { data } = await axios.post("http://127.0.0.1:8000/api/register", {
        name: this.name,
        username: this.username,
        email: this.email,
        password: this.password,
      });
      console.log(data);
    },
  },
});
