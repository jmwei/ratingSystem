<template>
  <div class="category">
    <div class="header">
      <mt-header fixed title="RATING"></mt-header>
    </div>
    <div class="list">
      <div class="img-box">
        <div class="img-item"@click="toLists()">
          <img src="../assets/movie.png" alt="">
          <div>MOVIE</div>
        </div>
        <div class="img-item">
          <img src="../assets/tv.png" alt="">
          <div>TVSHOW</div>
        </div>
        <div class="img-item">
          <img src="../assets/novel.png" alt="">
          <div>NOVEL</div>
        </div>
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
      toLists() {
        this.$router.push({path: '/list'})
      }
    },
    mounted() {

    }
  }
</script>

<style  lang="scss" scoped>
  .category {
    .header {
      .mint-header {
        height: 55px;
        background: #00204a;
      }
    }

    .list {
      margin-top: 65px;
      .img-box {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        .img-item {
          padding: 5px;
          text-align: center;
          div {
            font-size: 11px;
          }
        }
        img {
          width: 60px;
          height: 60px;
        }
      }
    }

  }
</style>
