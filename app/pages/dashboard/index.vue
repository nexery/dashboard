<template>
  <NuxtLayout>
    <section class="flex-1">
      <div class="flex-1 flex items-start">
        <ul class="flex items-center w-full space-x-2">
          <li
            v-for="item in list"
            :key="item.title"
            class="w-1/8 h-24 rounded-md border border-white/10"
          >
            <UiLink
              :to="item.link"
              class="text-text flex-col justify-between px-3 py-4 text-sm w-full h-full hover:bg-sub-background/20"
            >
              <Icon :name="item.icon" size="24px" class="text-icon/40" />
              {{ item.title }}
            </UiLink>
          </li>
        </ul>
        <UiButton class="px-1 py-1 w-9 h-9 [&_svg]:size-6 text-icon/40 rounded-full hover:bg-sub-background/20">
          <Icon name="lucide:ellipsis-vertical" size="24px"  />
        </UiButton>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ROUTES } from "~/constants";

const list = ref([
  {
    title: "Issue a access",
    icon: "lucide:shield-plus",
    link: ROUTES.PAGES.ISSUE_ACCESS,
  },
  {
    title: "Issue a subscription",
    icon: "lucide:sparkles",
    link: ROUTES.PAGES.ISSUE_SUBSCRIPTION,
  },
  {
    title: "New post",
    icon: "lucide:list-plus",
    link: ROUTES.PAGES.POSTS,
  },
  {
    title: "All players",
    icon: "lucide:users",
    link: ROUTES.PAGES.USERS,
  },
]);
</script>
