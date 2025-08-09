<template>
  <header class="flex-1 h-16 rounded-md z-1 flex items-center px-4 py-3">
    <UiBreadcrumbsList v-if="breadcrumbs">
      <UiBreadcrumbsItemLink
        v-for="value in breadcrumbs.slice(0, breadcrumbs.length - 1)"
        :key="value.link"
        :to="value.link"
        :icon="value.icon"
      >
        {{ value.title }}
      </UiBreadcrumbsItemLink>
      <UiBreadcrumbsSeparator
        v-for="_ in breadcrumbs.slice(0, breadcrumbs.length - 1)"
      />
      <UiBreadcrumbsItemPage :icon="breadcrumbs[breadcrumbs.length - 1]?.icon">
        {{ lastBreadcrumb?.title }}
      </UiBreadcrumbsItemPage>
    </UiBreadcrumbsList>
  </header>
</template>

<script setup lang="ts">
const route = useRoute();
const breadcrumbs = useTransformPathname(route.fullPath);
const lastBreadcrumb = breadcrumbs![breadcrumbs!.length - 1];
console.log(breadcrumbs);
</script>
