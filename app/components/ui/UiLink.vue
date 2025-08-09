<template>
  <NuxtLink
    :class="
      tw(
        'text-inherit inline-flex [&_svg]:shrink-0 [&_svg]:pointer-events-none font-medium transition-colors',
        props.class
      )
    "
    :to="props.to"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
import type { ClassValue } from "clsx";

const props = defineProps<{ class?: ClassValue; to: string }>();
</script>
