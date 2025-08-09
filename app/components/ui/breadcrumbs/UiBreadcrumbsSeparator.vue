<template>
  <Icon :name="props.name" :size="props.size" :class="tw('text-text/40',props.class)" />
</template>

<script setup lang="ts">
import type { ClassValue } from "clsx";

type BreadcrumbsSeparator = {
  name?: string | undefined;
  size?: string | number | undefined;
  class?: ClassValue | undefined;
};
const props = withDefaults(defineProps<BreadcrumbsSeparator>(), {
  name: "lucide:chevron-right",
  size: 24,
});
</script>
