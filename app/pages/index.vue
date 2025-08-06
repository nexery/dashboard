<template>
  <div
    class="bg-boxes h-dvh relative grid place-items-center after:content-[''] after:absolute after:z-0 after:inset-0 after:bg-linear-to-b after:from-sub-background/20 after:to-background after:to-90%"
  >
    <div class="z-1 w-72 shrink-0">
      <div class="flex items-center justify-center mb-6 space-x-3">
        <NuxtImg width="56px" src="/nex-logo-dark.svg" alt="Logo" />
        <p class="text-lg">
          <span class="font-bold">nex</span>
          <span>board</span>
        </p>
      </div>
      <form
        class="flex flex-col space-y-5 h-auto bg-background border border-border/10 rounded-lg p-4"
        @submit="onSubmit"
      >
        <UiFieldset class="space-y-2">
          <div class="space-y-1">
            <UiLabel for="email">Email</UiLabel>
            <UiInput
              id="email"
              v-model="fields.email.value.value"
              type="text"
              :class="tw('bg-input')"
              :aria-invalid="!!fields.email.errorMessage.value"
              placeholder="Email"
            />
          </div>
          <div class="space-y-1">
            <UiLabel for="password">Password</UiLabel>
            <UiInput
              id="password"
              v-model="fields.password.value.value"
              type="password"
              class="bg-input"
              :aria-invalid="!!fields.password.errorMessage.value"
              placeholder="Password"
            />
          </div>
        </UiFieldset>
        <LoginButton :is-loading="isLoading" />
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { object, string } from "zod";
import useAuth from "~/composables/use-auth";

const { login, isLoading } = useAuth();

const schema = object({
  email: string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email" }),
  password: string().min(6, { message: "Must be at least 6 characters" }),
});

const { fields, form } = useFormFields(schema, {
  email: "",
  password: "",
});

const onSubmit = form.handleSubmit(
  async (values) => {
    if (!values.email && !values.password) return;
    await login(values);
  },
  (errors) => {
    Object.entries(errors).forEach(([field, error]) => {
      console.log(`${field}:`, error);
    });
  }
);
</script>
