<template> 
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/ui">UI</router-link> 
    </div> -->
    <router-view/>
  </div>
</template>

<style>
body {
  font-family: "Hoefler Text", "Baskerville Old Face", Garamond,
    "Times New Roman", serif;
  background-image: url("/brickwall.png");
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 20%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.guess-index {
  padding: 40px;
}

#title-span {
  border: 10px solid black;
  background-color: #4d658d;
  padding: 20px 20px;
  font-size: 3.5em;
  border-radius: 40px;
  font-weight: bold;
  margin: 50px;
}

#main-wrapper {
  margin-top: 25px;
}

#choice-wrapper {
  border: 2px solid black;
  background-color: #04a4c2;
  margin: 0 auto;
  margin-top: 30px;
  padding: 40px 0;
  border-radius: 30px;
  border-radius: 30px;
  width: 700px;
  height: 110px;
  padding: 30px;
  box-shadow: 5px 10px;
}

#question-wrapper {
  border: 2px solid black;
  background-color: #04a4c2;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-bottom: 30px;
  border-radius: 30px;
  width: 1000px;
  height: 180px;
  padding: 30px;
  box-shadow: 5px 10px;
}

#questions-select-box {
  font-size: 1.6em;
  width: 50%;
  background-color: 000000;
}

#button-wrapper {
  margin: 40px;
}

#submit-button {
  border: 2px solid black;
  border-radius: 15px;
  text-decoration: none;
  background-color: #86989b;
  font-size: 1em;
  width: 50%;
  padding: 20px 20px;
  margin-top: 2%;
}

#wrapup-page {
  border: 4px solid black;
  background-color: #d4f4fb;
  margin-top: 55px;
  border-radius: 40px;
}

.result-lists {
  text-align: justify;
  width: 46%;
  display: inline-block;
}

.result-lists li {
  padding: 10px 0;
  margin: 10px;
}

#second-page {
  border: 2px solid black;
  background-color: #4d658d;
  padding: 5px 20px;
  font-size: 3.5em;
  border-radius: 40px;
}
#greating {
  margin: 50px;
  border: 5px solid black;
  background-color: #4d658d;
  padding: 9px 20px;
  font-size: 3.5em;
  border-radius: 90px;
}

.good-choice {
  color: green;
  font-size: 1.5em;
  font-style: italic;
  font-weight: bold;
}

.bad-choice {
  color: red;
  font-style: italic;
  font-size: 1.5em;
  font-weight: bold;
}
.title-result {
  font-style: italic;
  font-size: 2em;
  font-weight: bold;
}
.results-id {
  font-size: 3.5em;
  font-weight: 900;
}
.h4-changes {
  font-size: 2.5em;
  font-weight: 800;
}
.reset-wrapper {
  margin: 40px;
}
#reset-button {
  margin: 30px;
  border: 2px solid black;
  border-radius: 15px;
  text-decoration: none;
  background-color: #86989b;
  font-size: 1em;
  width: 50%;
  padding: 20px 20px;
  margin-top: 2%;
}
.header {
  font-weight: bold;
}
</style>
