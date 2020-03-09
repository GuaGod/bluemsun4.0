<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Performance from "./instance/Performance.js";
document.addEventListener("DOMContentLoaded", () => {
  const html = document.querySelector("html");
  let fontSize = window.innerWidth / 10;
  fontSize = fontSize > 50 ? 50 : fontSize;
  html.style.fontSize = fontSize + "px";
});

window.onload = () => {
  setTimeout(() => {
    let performance = new Performance();
    performance.calculate();
  }, 0);
};

export default {}
</script>
<style>
</style>
