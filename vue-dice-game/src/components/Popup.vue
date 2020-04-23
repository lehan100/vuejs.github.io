<template>
  <div class="popup" v-bind:class="{open:isPopup}">
    <div class="content">
      <h3>Luật chơi</h3>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias dolores natus hic iure ea, impedit eveniet ipsa soluta eum saepe quia, pariatur suscipit numquam omnis placeat quisquam quas a. Magnam!</p>
      <button v-on:click="confirm">Đã hiểu</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "com-popup",
  props: {
    isPopup: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods:{
      confirm(){
          this.$emit("handleConfirm")
      }
  }
};
</script>

<style>
.popup {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
}

.popup > .content {
  position: absolute;
  width: 50%;
  left: 50%;
  right: 50%;
  top: 50%;
  background: #fff;
  border: 1px solid #eee;
  padding: 20px;
  font-family: Tahoma;
  transform: translate(-50%, -50%) scale(1);
  transition: all 0.3s ease;
}
.popup.open {
  opacity: 1;
  visibility: visible;
}
.popup.open .content {
  transform: translate(-50%, -50%) scale(1.2);
}
.popup > .content h3 {
  margin-bottom: 10px;
}
.popup > .content button {
  padding: 10px;
  border: 1px solid #333;
  margin-top: 20px;
  transition: all 0.3s ease;
  cursor: pointer;
}
.popup > .content button:hover {
  background: #333;
  color: #fff;
}
</style>