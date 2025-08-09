<template>
  <p :class="tw('inline-flex items-center text-text font-medium text-lg', props.class)">
    <Icon v-if="icon" :name="icon" size="24" />
    <slot />
  </p>
</template>

<script setup lang="ts">
import type { ClassValue } from "clsx";

type BreadcrumbsPage = {
  icon?: string | undefined;
  class?: ClassValue | undefined;
  size?: string | number | undefined;
};

const props = withDefaults(defineProps<BreadcrumbsPage>(), {
  size: 24,
});
</script>
