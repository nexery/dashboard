<template>
  <fieldset :class="tw('flex flex-col space-y-1', props.class)">
    <slot />
  </fieldset>
</template>

<script setup lang="ts">
import type { ClassValue } from "clsx";

const props = defineProps<{ class?: ClassValue }>();
</script>
