<template>
  <div>
    <div class="absolute z-30 block lg:hidden top-0 right-0 p-8">
      <div class="container" v-on:click="toggleSideBar" v-bind:class="{'active' : openSideBar}">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
    </div>
    
    <nav 
      id="menu" 
      class="h-screen transition-width duration-300 fixed z-10 top-0 right-0 text-lg py-32 w-0 font-montserrat shadow-xl bg-black-100 lg:w-1/2 lg:bg-transparent lg:shadow-none lg:block lg:pl-24 lg:flex-grow lg:pt-40"
      v-bind:class="{ 'w-3/5': openSideBar }"
    >
      <h3 class="text-xl px-8  text-gray-300 font-bold">Menu</h3>
      <div
        class="block mt-4 px-8 font-semibold transition-opacity duration-300 hover:opacity-50 cursor-pointer"
        v-for="page in pages"
        :key="page.id"
        v-on:click="changePage(page)"
        v-bind:class="{ 'text-red-pink' : isActivePage(page) }"
      >
      <font-awesome-icon :icon="[getIconFamily(page), getIconName(page)]" fixed-width>
      </font-awesome-icon>
      {{ page.name }}
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'TheSidebar',
  props: ['currentPage'],
  data () {
    return {
      openSideBar: false,
      pages: [
        {
          id: 1,
          icon: "fas-home",
          name: "Home",
        },
        {
          id: 2,
          icon: "far-file-code",
          name: "Stacks",
        },
        {
          id: 3,
          icon: "far-sticky-note",
          name: "Portfolio",
        },
        {
          id: 4,
          icon: "far-question-circle",
          name: "Questions"
        },
      ]
    }
  },
  methods: {
    isActivePage: function(page) {
      let pageName = "Page" + page.name;
      let active = false;
      if (this.currentPage === pageName) {
        active = true;
      }
      return active;
    },
    toggleSideBar: function() {
      this.openSideBar = !this.openSideBar;
    },
    changePage: function(page) {
      this.toggleSideBar();
      this.$emit('change-page', page.name);
    },
    getIconFamily: function(page){
      return page.icon.split('-')[0];
    },
    getIconName: function(page){
      return page.icon.split(/-(.+)/)[1]; //regex captures +1 separator '-'
    },
  }
}
</script>

<style scoped>
.container {
  display: inline-block;
  cursor: pointer;
}

.bar1, .bar2, .bar3 {
  width: 26px;
  height: 3px;
  background-color: white;
  margin: 6px 0;
  transition: 0.4s;
}

.active .bar1 {
  -webkit-transform: rotate(-45deg) translate(-3px, 3px);
  transform: rotate(-45deg) translate(-3px, 3px);
}

.active .bar2 { opacity: 0; }

.active .bar3 {
  -webkit-transform: rotate(45deg) translate(-9px, -10px);
  transform: rotate(45deg) translate(-9px, -10px);
}
</style>