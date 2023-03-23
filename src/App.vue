<template>
  <div id="sideBar" class="from-right slide-in-out" :class="{opened:sidebarOpened}">
  <div id="sideBarContent">
    Sidebar
  </div>
  </div>
  <div id="appWrapper">
    <header>
      <button @click="toggleSidebar()">MENU</button>
      Header
    </header>
    <main>Main</main>
    <footer>Footer</footer>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      sidebarOpened: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpened = !this.sidebarOpened;
    },
  },
};
</script>

<style></style>
