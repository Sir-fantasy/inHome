<template>
  <div class="tab-main" :style="{margin:'0 '+ isFirst +'px'}">
    <img src="../assets/jia@2x.png" alt="佳" v-if="isGood">
    <img src="../assets/bi@2x.png" alt="弊" v-if="!isGood">
    <div class="info">
      <p v-for="item in arr">{{item.content}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    props: ["title", "arr"],
    computed: {
      isGood() {
        if (this.title == "good") {
          return true;
        } else {
          return false;
        }
      },
      isFirst() {
        if (this.title == "good") {
          return 20;
        }
      }
    }
  }

</script>
<style lang="less">
  .tab-main {
    display: inline-block;
    vertical-align: top;
    img {
      display: block;
      width: 25px;
      height: 25px;
      margin: 0 auto;
    }
    .info {
      display: inline-block;
      width: 120px;
      height: 144px;
      padding: 0 10px;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
    }
    p {
      font-size: 13px;
      color: #666666;
      line-height: 18px;
      text-align: center;
      margin-bottom: 16px;
      position: relative;
      &:first-of-type {
        margin-top: 9px;
      }
      &::before {
        position: absolute;
        content: "";
        background: url("../assets/biaoqin.png");
        width: 2px;
        height: 10px;
        top: 3px;
        left: -5px;
      }
    }
  }

</style>
