<template>
  <div class="personal">
    <div class="header">
      <mt-header fixed title="RATING"></mt-header>
    </div>
    <div class="content">
      <div class="userInfo">
        <img src="../assets/personal.jpg" alt="">
        <span class="userName">COLM</span>
      </div>
      <div class="userSign">
        Forgive me for not invading by hundered poision, just because there is no one behind me.
      </div>
      <div class="userOther">

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        selected: '0'
      }
    },
    methods: {

    },
    mounted() {

    }
  }
</script>

<style  lang="scss" scoped>
  .personal {
    .header {
      .mint-header {
        height: 55px;
        background: #00204a;
      }
    }

    .content {
      margin-top: 65px;
      padding: 10px 20px;
      .userInfo {
        display: grid;
        grid-template-columns: 1fr 3fr;
        img {
          width: 60px;
          height: 60px;
          border-radius: 60px;
        }
        .userName {
          line-height: 60px;
        }
      }
      .userSign {
        margin-top: 20px;
        padding: 7px 5px;
        text-align: center;
        background: #f2f2f2;
      }
      .userOther {
        height: 200px;
        margin-top: 20px;
        padding: 7px 5px;
        text-align: center;
        background: #f2f2f2;
      }
    }
  }
</style>
