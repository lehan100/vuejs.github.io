<template>
  <div class="controls">
    <button class="control btn-new" v-on:click="newsGame">
      <i class="ion-ios-plus-outline"></i>New game
    </button>
    <button class="control btn-roll" v-on:click="rollDice">
      <i class="ion-ios-loop"></i>Roll dice
    </button>
    <button class="control btn-hold" v-on:click="HoldDice">
      <i class="ion-ios-download-outline"></i>Hold
    </button>

    <input
      type="number"
      placeholder="Final score"
      class="final-score"
      v-bind:value="finalScore"
      v-bind:disabled="isPlaying"
      v-on:input="$emit('HandleFinalScore',$event)"
    />
    <!--
      1. ràng buộc 1 chiều: v-bind
          1 chiều từ data -> input
      2. ràng buộc 2 chiều: v-model
          1 chiều từ data -> input
          1 chiều từ input -> data
    -->
  </div>
</template>
<script>
export default {
  name: "com-controls",
  props: {
    finalScore: { type: [Number, String], default: 100 },
    isPlaying: { type: Boolean, default: true }
  },
  data() {
    return {};
  },
  methods: {
    newsGame() {
      this.$emit("handleNewGame");
    },
    rollDice() {
      this.$emit("handleRollDice");
    },
    HoldDice() {
      this.$emit("HandleHoldDice");
    }
  }
};
</script>
<style>
/**********************************************
*** Control
**********************************************/
.control {
  position: absolute;
  width: 200px;
  left: 50%;
  transform: translateX(-50%);
  color: #555;
  background: none;
  border: none;
  font-family: Lato;
  font-size: 20px;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 300;
  transition: background-color 0.3s, color 0.3s;
}
.control.disable {
  pointer-events: none;
}

.control:hover {
  font-weight: 600;
}
.control:hover i {
  margin-right: 20px;
}

.control:focus {
  outline: none;
}

.control i {
  color: #42b983;
  display: inline-block;
  margin-right: 15px;
  font-size: 32px;
  line-height: 1;
  vertical-align: text-top;
  margin-top: -4px;
  transition: margin 0.3s;
}

.btn-new {
  top: 45px;
}
.btn-roll {
  top: 403px;
}
.btn-hold {
  top: 467px;
}

.final-score {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 520px;
  color: #555;
  font-size: 18px;
  font-family: "Lato";
  text-align: center;
  padding: 10px;
  width: 160px;
  text-transform: uppercase;
}

.final-score:focus {
  outline: none;
}
</style>