<template>
  <div class="home">
    <mt-swipe :auto="3000">
      <mt-swipe-item><img src="../assets/slide-1.png" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../assets/slide-2.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../assets/slide-3.jpg" alt=""></mt-swipe-item>
    </mt-swipe>

    <div class="content">
      <div class="content-movie">
        <div class="content-category">
          <div class="content-1">电影</div>
          <div class="content-2">更多<i class="fa fa-chevron-right" aria-hidden="true"></i></div>
        </div>
        <div class="clr"></div>
        <div class="img-box">
          <div class="img-item">
            <img src="../assets/movie-1.png" alt="">
            <span>破门</span>
          </div>
          <div class="img-item">
            <img src="../assets/movie-2.png" alt="">
            <span>联盟</span>
          </div>
          <div class="img-item">
            <img src="../assets/movie-3.png" alt="">
            <span>幕后玩家</span>
          </div>
        </div>
      </div>
      <div class="content-tv">
        <div class="content-category">
          <div class="content-1">电视剧</div>
          <div class="content-2">更多<i class="fa fa-chevron-right" aria-hidden="true"></i></div>
        </div>
        <div class="clr"></div>
        <div class="img-box">
          <div class="img-item">
            <img src="../assets/movie-3.png" alt="">
            <span>幕后玩家</span>
          </div>
          <div class="img-item">
            <img src="../assets/movie-3.png" alt="">
            <span>幕后玩家</span>
          </div>
          <div class="img-item">
            <img src="../assets/movie-3.png" alt="">
            <span>幕后玩家</span>
          </div>
        </div>
      </div>
      <div class="content-novel">
        <div class="content-category">
          <div class="content-1">小说</div>
          <div class="content-2">更多<i class="fa fa-chevron-right" aria-hidden="true"></i></div>
        </div>
        <div class="clr"></div>
        <div class="img-box">
          <div class="img-item">
            <img src="../assets/movie-4.png" alt="">
            <span>后来</span>
          </div>
          <div class="img-item">
            <img src="../assets/movie-4.png" alt="">
            <span>后来</span>
          </div>
          <div class="img-item">
            <img src="../assets/movie-4.png" alt="">
            <span>后来</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      toast() {
        this.$toast({
          message: '操作成功',
          iconClass: 'mint-toast-icon mintui mintui-success'
        });
      }
    },
    mounted() {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>
  .mint-swipe {
    height: 145px;
    img{
      height: 145px;
    }
  }

  .content {
    margin-bottom: 70px;
    .content-movie {
      height: 175px;
      border-bottom: solid 7px #eaeaea;
    }
    .content-tv {
      height: 175px;
      border-bottom: solid 7px #eaeaea;
    }
    .content-novel {
      height: 175px;
    }
    .content-category {
      padding: 5px 6px;
      .content-1 {
        float: left;
      }
      .content-2 {
        float: right;
        color: #b8bbbf;
      }
    }
    .img-box {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      .img-item {
        padding: 5px;
        span {
          font-size: 11px;
        }
      }
      img {
        width: 100%;
        height: 120px;
      }
    }
    .clr {
      clear: both;
    }
  }

</style>
