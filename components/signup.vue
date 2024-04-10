<script setup lang="ts">
import { object, string } from "yup";
import { reactive } from "vue";
import type { FormSubmitEvent } from "#ui/types";

const schema = object({
  email: string().email("Invalid email").required("Required"),
  password: string()
    .min(8, "Must be at least 8 characters")
    .required("Required"),
});

const state = reactive({
  email: "",
  password: "",
});

async function onSubmit(event: FormSubmitEvent) {
  console.log(event.data);
}
</script>

<template>
  <UForm
    :schema="schema"
    :state="state"
    class="w-[300px] px-5 pb-12"
    @submit="onSubmit"
  >
    <UFormGroup name="email" class="w-full mb-5">
      <label for="email" class="text-gray-600 pb-2">Email</label>
      <input
        type="text"
        v-model="state.email"
        name="text"
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

    <NuxtLink class="flex self-end mb-2 text-blue-600 right-0" to="#"
      >forgot password ?</NuxtLink
    >

    <UButton type="submit" class="mt-3 py-2 text-white" color="blue" block>
      sign in
    </UButton>
  </UForm>
</template>
