<template>
  <div class="relative">
    <div
      class="img-style bg-no-repeat absolute bg-[url('assets/imgs/wallPaper.jpg')] bg-cover w-screen"
    >
      <Navigation />
      <ContentHome />
    </div>
    <AboutMe/>
  </div>
</template>

<script setup lang="ts">
import Navigation from "~/components/navigation.vue";
import contentHome from "~/components/contentHome.vue";
import AboutMe from "~/components/AboutMe.vue";
</script>

<style>

</style>
