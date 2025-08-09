<template>
  <div class="flex p-2 h-dvh space-x-2">
    <LayoutSidebar />
    <main class="flex-1 relative space-y-3">
      <LayoutHeader />
      <slot />
    </main>
  </div>
</template>
