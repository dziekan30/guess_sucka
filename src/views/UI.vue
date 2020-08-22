<template>
  <div class="guess-index">

    <div class="jumbotron">
      <h1 class="display-4 header">Welcome to GUESS SUCKA!</h1>
      <hr class="my-4">
      <p class="header">Please select from the following categories to play.</p>
    </div>

    <form v-on:submit.prevent="startGame()">
      
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Select the number of questions (btw 1 and 50)</h5>
          <label for="quantity"></label>
          <input
            v-model="numberOfQuestions"
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            max="50"
          />
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Please select a category from the drop-down menu.</h5>
          <select v-model="userCategory">
            <option v-for="category in this.selectCategory" :value="category.id">{{category.name}}</option>
          </select>
        </div>
      </div>


      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Please select a level of difficulty.</h5>
          <select v-model="userDifficulty">
            <option v-for="difficulty in this.difficultyLevel">{{difficulty}}</option>
          </select>
        </div>
      </div>

      <router-link
        v-bind:to="'/guess?amount=' + numberOfQuestions + '&category=' + userCategory + '&difficulty=' + userDifficulty + '&type=multiple'"
      >
        <input type="submit" id="submit-button" name="Start the game!" />
     </router-link>
    </form>
  </div>
</template>

<script>
var axios = require("axios");

export default {
  data: function () {
    return {
      numberOfQuestions: "",
      userCategory: "",
      selectCategory: [
        { name: "Entertainment_Books", id: 10 },
        { name: "Entertainment_Film", id: 11 },
        { name: "Entertainment_Music", id: 12 },
        { name: "Entertainment_Television", id: 14 },
        { name: "Science_Nature", id: 17 },
        { name: "Mythology", id: 20 },
        { name: "Sports", id: 21 },
        { name: "Geography", id: 22 },
        { name: "History", id: 23 },
        { name: "Politics", id: 24 },
        { name: "Celebrities", id: 26 },
        { name: "Animals", id: 27 },
        { name: "Vehicles", id: 28 },
      ],
      userDifficulty: "",
      difficultyLevel: ["easy", "medium", "hard"],
    };
  },
  created: function () {},
  methods: {},
};
</script>
