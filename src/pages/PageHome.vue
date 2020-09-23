<template>
  <div>
    <h1 class="text-5xl text-left sm:text-5xl font-semibold">
      Hi there.
    </h1>
    <h2 class="text-2xl text-left sm:text-3xl font-semibold mt-2 sm:mt-6">
      My name is <span class="whitespace-no-wrap">Andika William.</span>
    </h2>
    <p class="text-base sm:text-xl text-gray-300 font-light tracking-wide mt-6 sm:mt-8">
      I'm a Web Developer from Jakarta with experience in writing 
      <span class="font-semibold"> Python </span> / <span class="font-semibold">Javascript</span> 
      and using <span class="font-semibold">Vue.js</span>. 
      Also I'm a former QA Engineer who worked on test automation using 
      <span class="font-semibold">Appium</span> / <span class="font-semibold">Selenium</span>. 
    </p>
    <p class="text-base sm:text-xl text-gray-300 font-light tracking-wide mt-6 sm:mt-8">
      For more on the technologies that I've used, check out my 
      <span 
        class="hvr-bounce-to-top cursor-pointer pb-1" 
        v-on:click='$emit("go-to-page", "Stacks")'>
        stacks</span>. 
      You can also check out my other works on my 
      <a 
        target="_blank" rel="noopener noreferrer" 
        href="https://github.com/andikawilliam" 
        class="hvr-bounce-to-top pb-1">Github.
      </a> 
    </p>
    <p class="text-base sm:text-xl text-gray-300 font-light tracking-wide mt-6 sm:mt-8">
      Besides programming and helping around the house, I spend my time reading books 
      (no really), running, and learning the guitar. 
    </p>
  </div>
</template>

<script>

</script>

<style>

</style>
