<template>
  <div class="guess-index">

    <div class="jumbotron" v-if="!isHidden">
      <h1 class="display-4 header">Welcome to GUESS SUCKA!</h1>
    </div>

    <div id="wrapup-page" v-if="isHidden">
      <h1 class="results-id">RESULTS:</h1>

      <p class="title-result">
        You got {{ rightCount}} question(s) correct and {{ wrongCount }} question(s) wrong.
      </p>

      <ul class="result-lists" v-for="question in this.questions">
        <li class="good-choice" v-if="question.userChoice === question.correct_answer" >
          Good job, you guessed correctly. You chose {{question.userChoice}}.
        </li>

        <li class="bad-choice" v-else >
          You chose {{question.userChoice}}, but the correct answer is {{question.correct_answer}}.
        </li>
      </ul>
    </div>

    <div id="reset-wrapper" v-if="isHidden">
      <button id="reset-button" @click="restartGame">Restart Game</button>
      <div>
        <img
          src="https://media3.giphy.com/media/l0HUoJEvqeH7IWZ9e/giphy.gif?cid=790b7611a2020ffc918f741fee03523bdfa0d9e1d6aa4852&rid=giphy.gif&rid=giphy.gif"
        />
      </div>
    </div>

     <div class="card" id="main-wrapper" v-if="!isHidden">
        <div class="card-body">
          <h5 class="card-title">Question:</h5>
          <h3>{{ translate(questions[incrementer].question) }}</h3>
          <select id="questions-select-box" v-model="questions[incrementer].userChoice">
            <option v-for="choice in questions[incrementer].incorrect_answers">{{ choice }}</option>
          </select>
        </div>
      </div>

      <div id="button-wrapper" v-if="!isHidden">
        <button id="submit-button" @click="submitAnswer">
          <h3>Submit Answer</h3>
        </button>
      </div>

    </div>
  </div>
</template>

<script>
var axios = require("axios");

export default {
  data: function () {
    return {
      questions: [
        {
          category: "",
          type: "",
          difficulty: "",
          question: "",
          correct_answer: "",
          incorrect_answers: [],
        },
      ],
      isHidden: false,
      incrementer: 0,
      rightCount: 0,
      wrongCount: 0,
      errors: [],
    };
  },
  created: function () {
    axios
      .get(
        `/api.php?amount=${this.$route.query.amount || 10}&category=${
          this.$route.query.category || 21
        }&difficulty=${this.$route.query.difficulty || "easy"}&type=multiple`
      )
      .then((response) => {
        console.log(response);
        this.questions = response.data.results;
        this.questions.forEach(function (question) {
          question.incorrect_answers.push(question.correct_answer).shuffle;
        });
      });
  },
  methods: {
    submitAnswer: function () {
      if (
        this.questions[this.incrementer].userChoice ===
        this.questions[this.incrementer].correct_answer
      ) {
        this.rightCount++;
      } else {
        this.wrongCount++;
      }
      if (this.incrementer < this.questions.length - 1) {
        this.incrementer++;
      } else if (this.incrementer === this.questions.length - 1) {
        this.isHidden = true;
      }
    },
    translate: function (inputString) {
      var parser = new DOMParser();
      var encodedString = parser.parseFromString(inputString, "text/html");
      return encodedString.body.innerText;
    },
    restartGame: function () {
      this.$router.push("/");
    },
  },
};
</script>