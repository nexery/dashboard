<template>
  <aside :class="tw('p-3 bg-sub-background rounded-md w-72')">
    <UserProfile />
    <nav>
      <ul class="space-y-1">
        <li v-for="item in navList" :key="item.title">
          <NuxtLink
            :to="item.link"
            class="inline-flex items-center border border-transparent p-2 tex-text transition-colors hover:bg-background/40 w-full rounded [&.router-link-active]:text-primary/80 [&.router-link-active]:bg-primary/20 [&.router-link-active]:border-primary/20"
          >
            <Icon :name="item.icon" size="24" class="mr-3" />
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { ROUTES } from "~/constants";

const navList = ref([
  {
    title: "Dashboard",
    link: ROUTES.PAGES.DASHBOARD,
    icon: "lucide:house",
  },
  {
    title: "Notifications",
    link: ROUTES.PAGES.NOTIFICATIONS,
    icon: "lucide:layout-grid",
  },
  {
    title: "Projects",
    link: ROUTES.PAGES.PROJECTS,
    icon: "lucide:layers",
  },
  {
    title: "Tasks",
    link: ROUTES.PAGES.TASKS,
    icon: "lucide:copy-check",
  },
  {
    title: "Users",
    link: ROUTES.PAGES.USERS,
    icon: "lucide:users",
  },
]);
</script>
