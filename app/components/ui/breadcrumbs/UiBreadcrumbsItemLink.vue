<template>
  <UiLink :to="props.to" :class="tw('inline-flex items-center text-text/40 font-medium text-lg hover:text-text/80', props.class)">
    <Icon v-if="icon" :name="icon" size="24" />
    <slot />
  </UiLink>
</template>

<script setup lang="ts">
import type { ClassValue } from "clsx";

type BreadcrumbsLink = {
  icon?: string | undefined;
  class?: ClassValue | undefined;
  size?: string | number | undefined;
  to: string
};

const props = withDefaults(defineProps<BreadcrumbsLink>(), {
  size: 24,
});
</script>
