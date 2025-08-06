<template>
  <UiButton :disabled="isLoading" class="bg-sub-background text-lg">
    <Icon
      v-if="isLoading"
      class="animate-spin"
      name="tabler:loader-2"
      :size="24"
    />
    <span v-else>Login</span>
  </UiButton>
</template>

<script setup lang="ts">
defineProps<{ isLoading?: boolean }>();
</script>
