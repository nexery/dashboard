<template>
  <button
    :class="
      tw(
        'inline-flex items-center justify-center font-medium border border-transparent text-text gap-3 leading-none py-2 px-3 h-9 rounded-md transition-colors cursor-pointer hover:border-border/30 hover:text-white [&_svg]:size-3 [&_svg]:shrink-0 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed',
        props.class
      )
    "
    :disabled="props.disabled"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import type { ClassValue } from "clsx";

const props = defineProps<{ class?: ClassValue; disabled?: boolean }>();
</script>
