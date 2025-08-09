<template>
  <button
    class="flex items-center px-2 py-1 rounded justify-between w-full cursor-pointer transition-colors hover:bg-background/30 mb-3"
  >
    <div class="flex items-center">
      <div class="w-10 h-10 bg-background rounded-sm mr-3"></div>
      <div class="text-start">
        <p class="text-sm text-text font-semibold">Example</p>
        <span class="text-sm text-text/40 font-medium">@example.me</span>
      </div>
    </div>
    <Icon name="lucide:chevrons-up-down" size="24" />
  </button>
</template>

<script setup lang="ts"></script>
