<template>
  <div id="app">
    <div class="wrapper clearfix">
      <players
        v-bind:scoresPlayer="scoresPlayer"
        v-bind:currentScore="currentScore"
        v-bind:activePlayer="activePlayer"
        v-bind:isWinner="isWinner"
      />
      <controls
        v-on:handleNewGame="handleNewGame"
        v-on:handleRollDice="handleRollDice"
        v-on:HandleHoldDice="HandleHoldDice"
        v-on:HandleFinalScore="HandleFinalScore"
        v-bind:finalScore="finalScore"
        v-bind:isPlaying="isPlaying"
      />
      <dices v-bind:dices="dices" />
    </div>
    <popup v-on:handleConfirm="handleConfirm" v-bind:isPopup="isPopup" />
  </div>
</template>

<script>
import Players from "./components/Players";
import Controls from "./components/Controls";
import Dices from "./components/Dice";
import Popup from "./components/Popup";
export default {
  name: "app",
  components: {
    Players,
    Controls,
    Dices,
    Popup
  },
  data() {
    return {
      scoresPlayer: [0, 0],
      dices: [6, 6],
      currentScore: 0,
      activePlayer: 0,
      isPopup: false,
      isPlaying: false,
      finalScore: 10
    };
  },
  computed: {
    isWinner() {
      let { scoresPlayer, finalScore } = this;
      if (scoresPlayer[0] >= finalScore || scoresPlayer[1] >= finalScore) {
        this.isPlaying = false;
        return true;
      }
      return false;
    }
  },
  methods: {   
    HandleFinalScore(e) {
      var number = parseInt(e.target.value);
      if (isNaN(number)) {
        this.finalScore = "";
      } else {
        this.finalScore = number;
      }
    },
    nextPlayer() {
      this.activePlayer = this.activePlayer == 0 ? 1 : 0;
      this.currentScore = 0;
    },
    handleNewGame() {
      this.isPopup = true;
    },
    handleConfirm() {
      this.isPlaying = true;
      this.isPopup = false;
      this.activePlayer = 0;
      this.scoresPlayer = [0, 0];
      this.dices = [1, 1];
      this.currentScore = 0;
    },
    handleRollDice() {
      if (this.isPlaying) {
        //Xoay xúc xắc
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        this.dices = [dice1, dice2];
        if (dice1 === 1 || dice2 === 1) {
          let activePlayer = this.activePlayer;
          setTimeout(() => {
            alert(
              `Người chơi ${activePlayer + 1} đã xoay trúng số 1, rất tiêc!`
            );
          }, 20);
          this.nextPlayer();
        } else {
          this.currentScore += dice1 + dice2;
        }
      } else {
        alert("Bạn chưa chọn nút New Game");
      }
    },
    HandleHoldDice() {
      //console.log("HandleHoldDice");
      if (this.isPlaying) {
        let { scoresPlayer, activePlayer, currentScore } = this;
        let cloneScoresPlayer = [...this.scoresPlayer];
        //Cách 1
        // cloneScoresPlayer[activePlayer] =cloneScoresPlayer[activePlayer] + currentScore;
        // this.scoresPlayer = cloneScoresPlayer;
        //Cách 2
        this.$set(
          this.scoresPlayer,
          activePlayer,
          cloneScoresPlayer[activePlayer] + currentScore
        );
        if (!this.isWinner) {
          this.nextPlayer();
        }
        //console.log(this.scoresPlayer);
      } else {
        alert("Bạn chưa chọn nút New Game");
      }
    }
  }
};
</script>

<style>
/**********************************************
*** GENERAL
**********************************************/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.clearfix::after {
  content: "";
  display: table;
  clear: both;
}

body {
  background-image: linear-gradient(
      rgba(62, 20, 20, 0.4),
      rgba(62, 20, 20, 0.4)
    ),
    url(/public/assets/back.jpg);
  background-size: cover;
  background-position: center;
  font-family: Lato;
  font-weight: 300;
  position: relative;
  height: 100vh;
  color: #555;
}

.wrapper {
  width: 1000px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}
</style>
