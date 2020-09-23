<template>
  <div>
    <div id="header">
      <h1 class="text-4xl text-left sm:text-5xl font-semibold">
        My Stacks
      </h1>
      <div class="text-lg sm:text-xl text-gray-300 font-thin tracking-wide">
        Technologies that I use for my projects
      </div>
      <hr class="border-2 opacity-75 my-4">
    </div>

    <div id="content">
      <div v-for="(field, fieldIndex) in fields" :key="field.id">
        <h2 class="text-xl text-left sm:text-2xl font-semibold"
        v-bind:class="{ 'mt-10':fieldIndex !== 0}">
          {{ field.area}}
        </h2>

        <h3 class="sm:inline-block text-lg sm:text-xl text-gray-400 font-semibold tracking-wide mt-4 sm:mt-2"
        v-for="(stack, stackIndex) in field.stacks" :key="stack.name"
        v-bind:class="{ 'sm:pl-12':stackIndex !== 0, 'opacity-25':!stack.active}"
        >
          <font-awesome-icon :icon="['fab', stack.icon]" fixed-width
          v-if=stack.icon>
          </font-awesome-icon> 
          {{ stack.name }}
        </h3>
      </div>
    </div>

    <div class="text-right text-gray-300 mt-4"> 
      <div class="bg-gray-400 h-2 w-2 inline-block"></div> in touch 
      <div class="bg-gray-400 h-2 w-2 inline-block opacity-25 ml-2"></div> not in touch
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageStacks',
  data () {
    return {
      fields: [
        {
          id: 1,
          area: "Programming Languages",
          stacks: [
            { name: 'Python', icon: 'python', active: true},
            { name: 'Javascript', icon: 'js-square', active: true},
            { name: 'Ruby, Java, C++', icon: '', active: false}
          ]
        },
        {
          id: 2,
          area: "Front-End Web Development",
          stacks: [
            { name: 'Vue.js', icon: 'vuejs', active: true},
            { name: 'TailwindCSS', icon: 'css3-alt', active: true},
            { name: 'Bulma, Bootstrap', icon: '', active: false}
          ]
        },
        {
          id: 3,
          area: "Back-End Web Development",
          stacks: [
            { name: 'Ruby on Rails', icon: '', active: true},
            { name: 'Django', icon: '', active: true},
            { name: 'Flask', icon: '', active: false}
          ]
        },
        {
          id: 4,
          area: "QA Test Automation",
          stacks: [
            { name: 'Appium', icon: '', active: true},
            { name: 'Selenium', icon: '', active: true},
            { name: 'Katalon', icon: '', active: false}

          ]
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>