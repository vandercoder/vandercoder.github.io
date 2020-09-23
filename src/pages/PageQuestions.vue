<template>
  <div>
    <div id="header">
      <h1 class="text-4xl text-left sm:text-5xl font-semibold">
        Quick Questions
      </h1>
      <p class="text-lg sm:text-xl text-gray-300 font-thin tracking-wide">
        Not frequently asked per se, but I have had people ask these questions.
      </p>
      <hr class="border-2 opacity-75 my-4 ">
    </div>

    <div id="content">
      <div class="py-4 question-transition" v-for="question in questions" :key="question.id">
        
        <div class="flex justify-between items-center cursor-pointer"
          v-on:click="toggleAnswer(question)">
          <h2 class="w-11/12 text-lg text-left sm:text-xl font-semibold"
            v-html="question.ask"></h2>
          <font-awesome-icon 
            :icon="['fas', 'chevron-down']" fixed-width
            class="transition-tranform duration-500"
            v-bind:class="{ 'transform rotate-180' : question.showAnswer}"
          ></font-awesome-icon> 
        </div>

        <transition name="slide-fade">
          <p class="text-lg sm:text-xl text-gray-300 font-light tracking-wide py-2"
            v-html="question.answer" v-show="question.showAnswer">
          </p>
        </transition>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageQuestions',
  data () {
    return {
      questions: [
        { 
          id: 1,
          ask: `"So uh.. what should I call you?"`,
          answer:`People usually call me <span class="italic">'Dika'</span> in 
          Indonesia. Though it usually doesn't sound good in English. 
          So you can call me <span class="italic">'Andy'</span> as well.`,
          showAnswer: false
        },
        { 
          id: 2,
          ask: `"Are you a self-learned developer or did study CS in a University?"`,
          answer: `Yes to both. I think most developers learned their stuff outside of Uni.`,
          showAnswer: false
        },
        { 
          id: 3,
          ask: `"Oh, so which University did you go into?"`,
          answer: `I went to UGM in Yogyakarta, Indonesia.`,
          showAnswer: false
        },
        { 
          id: 4,
          ask: `"So you like reading? Isn't that like everyone's fake hobby? 
              You know like travelling or hiking.."`,
          answer: `Yeah, but it is what it is. Check out my 
              <a href="https://www.goodreads.com/andiwilliam" 
              class="hvr-bounce-to-top">goodreads</a>, 
              maybe we have some common book interests.`,
          showAnswer: false,
        },
        { 
          id: 5,
          ask: `"Can you hack Facebook?"`,
          answer: `No..`,
          showAnswer: false
        },
      ]
    }
  },
  methods: {
    toggleAnswer: function(question) {
      question.showAnswer = !question.showAnswer
    },
    toggleArrow: function(showAnswer) {
      let arrowState = 'chevron-down'
      if (showAnswer) {
         arrowState = 'chevron-up';
      }
      return arrowState;
    }
  },
}
</script>

<style scoped>
  .arrow-show {
    transform: rotate(180);
  }

  .question-transition {
    transition: all .5s ease-in-out;
  }
</style>