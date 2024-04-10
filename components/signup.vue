<script setup lang="ts">
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";

import { useRegistrationStore } from "../stores/Auth";

const schema = object({
  name: string()
    .required("full name is required")
    .matches(/^[a-zA-Z\s]+$/, "Full name can only contain letters"),
  username: string()
    .required("username is required")
    .matches(/^[a-zA-Z\s]+$/, "username can only contain letters"),
  email: string().email("Invalid email").required("Email is required"),
  password: string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirm_Password: string()
    .required("Please confirm your password")
    .test("passwords-match", "Passwords must match", function (value) {
      return value === this.parent.password;
    }),
});

type Schema = InferType<typeof schema>;

const state = useRegistrationStore();

async function onSignup(event: FormSubmitEvent<Schema>) {
  await state.signup();
}
</script>

<template>
  <UForm
    :schema="schema"
    :state="state"
    class="w-[300px] px-5 pb-12"
    @submit.prevent="onSignup"
  >
    <UFormGroup name="name" class="w-full mb-5">
      <label for="name" class="text-gray-600 pb-2">Full Name</label>
      <input
        type="text"
        v-model="state.name"
        name="text"
        class="bg-white mt-2 outline-non px-2 text-black w-full border border-gray-100 py-1"
        placeholder="enter your full name "
      />
    </UFormGroup>
    <UFormGroup name="username" class="w-full mb-5">
      <label for="username" class="text-gray-600 pb-2">Username</label>
      <input
        type="text"
        v-model="state.username"
        class="bg-white mt-2 outline-non px-2 text-black w-full border border-gray-100 py-1"
        placeholder="enter your username "
      />
    </UFormGroup>
    <UFormGroup name="email" class="w-full mb-5">
      <label for="email" class="text-gray-600 pb-2">Email</label>
      <input
        type="text"
        v-model="state.email"
        class="bg-white mt-2 outline-non px-2 text-black w-full border border-gray-100 py-1"
        placeholder="enter your email or username"
      />
    </UFormGroup>

    <UFormGroup name="password" class="w-full mb-5">
      <label for="password" class="text-gray-600 pb-2">Password</label>
      <input
        type="password"
        v-model="state.password"
        name="password"
        class="bg-white mt-2 outline-non px-2 text-black w-full border border-gray-100 py-1"
        placeholder="password please"
      />
    </UFormGroup>

    <UFormGroup name="confirm_Password" class="w-full mb-5">
      <label for="confirm_Password" class="text-gray-600 pb-2"
        >Conform Password</label
      >
      <input
        type="password"
        v-model="state.confirm_Password"
        name="text"
        class="bg-white mt-2 outline-non px-2 text-black w-full border border-gray-100 py-1"
        placeholder="conform password"
      />
    </UFormGroup>

    <UButton type="submit" class="mt-3 py-2 text-white" color="blue" block>
      sign up
    </UButton>
  </UForm>
</template>
