<template>
  <div
    id="sideBar"
    class="from-right slide-in-out"
    :class="{ opened: sidebarOpened }"
  >
    <div id="sideBarContent">Sidebar</div>
  </div>
  <div data-scroll-container id="appWrapper">
    <header>
      <button @click="toggleSidebar()">MENU</button>
      Header
    </header>
    <div data-scroll-section id="layoutScrollBox">
      <main>
        Main
        <div style="height: 3000px"></div>
      </main>
      <footer>Footer</footer>
    </div>
  </div>
</template>
<script>
import LocomotiveScroll from "locomotive-scroll";

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
  mounted() {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });
  },
};
</script>

<style></style>
