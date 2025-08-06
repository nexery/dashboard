<template>
  <input
    v-model="model"
    :class="
      tw(
        props.class,
        'inline-flex border border-white/10 text-text placeholder:text-text/40 h-9 px-3 py-1 min-w-0 w-full rounded bg-transparent text-base transition-[color,box-shadow] outline-none shadow-md',
        'focus:ring-2 focus:border-border/40 focus:ring-border/50',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
        'aria-invalid:ring-red-500 aria-invalid:border-red-500'
      )
    "
  />
</template>

<script setup lang="ts" generic="T = string">
import tw from "~/utils/tw";
import type { ClassValue } from "clsx";

const props = defineProps<{
  class?: ClassValue;
}>();

const model = defineModel<T>();
</script>
