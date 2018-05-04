<template>
  <div class="list">
    <div class="header">
      <mt-header fixed title="MOVIE"></mt-header>
    </div>
    <div class="list">
      <div class="img-box">
        <div class="img-item" v-for="item in movieLists" @click="toDetails()">
          <img :src=item.imgUrl alt="">
          <div class="img-name">{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        selected: '0',
        movieLists: [
          {
            imgUrl: require('../assets/movie-1.png'),
            name: '破门'
          },
          {
            imgUrl: require('../assets/movie-2.png'),
            name: '复仇者联盟'
          },
          {
            imgUrl: require('../assets/movie-3.png'),
            name: '幕后玩家'
          },
          {
            imgUrl: require('../assets/movie-4.png'),
            name: '后来的我们'
          },
          {
            imgUrl: require('../assets/movie-1.png'),
            name: '破门'
          },
          {
            imgUrl: require('../assets/movie-2.png'),
            name: '复仇者联盟'
          },
          {
            imgUrl: require('../assets/movie-3.png'),
            name: '幕后玩家'
          },
          {
            imgUrl: require('../assets/movie-4.png'),
            name: '后来的我们'
          },
          {
            imgUrl: require('../assets/movie-1.png'),
            name: '破门'
          },
          {
            imgUrl: require('../assets/movie-2.png'),
            name: '复仇者联盟'
          },
          {
            imgUrl: require('../assets/movie-3.png'),
            name: '幕后玩家'
          },
          {
            imgUrl: require('../assets/movie-4.png'),
            name: '后来的我们'
          },
          {
            imgUrl: require('../assets/movie-1.png'),
            name: '破门'
          },
          {
            imgUrl: require('../assets/movie-2.png'),
            name: '复仇者联盟'
          },
          {
            imgUrl: require('../assets/movie-3.png'),
            name: '幕后玩家'
          },
          {
            imgUrl: require('../assets/movie-4.png'),
            name: '后来的我们'
          },
        ]
      }
    },
    methods: {
      toDetails() {
        this.$router.push({path: '/details'})
      }
    },
    mounted() {

    }
  }
</script>

<style  lang="scss" scoped>
  .list {
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
        }
        img {
          width: 80px;
          height: 100px;
        }
        .img-name {
          font-size: 11px;
        }
      }
    }

  }
</style>
