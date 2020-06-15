<template lang="pug">
  .container
    .title
      h3 文藝復興
    .btn(@click="initMaso") 整理
    .newsWrapper.grid(ref="wrapper" v-infinite-scroll="getArticle" infinite-scroll-disabled="busy" infinite-scroll-distance="100")
      news(v-for="(article,index) in articles" :key="index" :content="article" :index="index") 
      //- .block.grid-item(v-for="(article,index) in articles" :key="index" :content="article" :index="index") {{index}} {{article.content}}
    spacer(:spacerHeight="100")



</template>

<script>
import { mapMutations } from 'vuex'
// eslint-disable-next-line no-unused-vars
import gsap from 'gsap'

import axios from 'axios'
// eslint-disable-next-line no-unused-vars
import news from '../components/news'
import spacer from '../components/spacer'

export default {
  components: {
    news,
    spacer
  },

  data() {
    return {
      spacer: 4,
      busy: false,

      articles: [
        {
          content:
            '一個人，如果沒空，那是因為他不想有空；一個人，如果走不開，那是因為不想走開；一個人，對你藉口太多，那是因為不想在乎。',
          id: '1253',
          author: '張愛玲',
          from: '紅玫瑰與白玫瑰'
        }
      ]
    }
  },
  mounted() {
    // this.getArticle()
  },
  methods: {
    ...mapMutations({
      add: 'increment'
    }),
    loadMore() {
      this.busy = true
      setTimeout(() => {
        for (let i = 0, j = 10; i < j; i++) {
          this.articles.push({
            content:
              '一個人，如果沒空，那是因為他不想有空；一個人，如果走不開，那是因為不想走開；一個人，對你藉口太多，那是因為不想在乎。',
            id: `${i + Math.floor(Math.random() * Math.floor(5000))}123`,
            author: '張愛玲',
            from: '紅玫瑰與白玫瑰'
          })
        }
        this.busy = false
        // this.initMaso()
        // this.initGSAP()
      }, 1000)
    },
    initMaso() {
      // var grid = document.querySelector('.grid')
      // eslint-disable-next-line no-undef
      waterfall(this.$refs.wrapper)
    },
    getArticle() {
      const vm = this
      this.busy = true

      axios
        .get(
          `http://${process.env.HOST || 'localhost'}:${process.env.PORT ||
            3000}/api/hello`
        )
        .then(function(response) {
          // handle success
          vm.articles.push(...response.data)
          vm.$nextTick(() => {
            vm.busy = false
            vm.initMaso()
            // vm.initGSAP()
          })
        })
        .catch(function(error) {
          // handle error
          // eslint-disable-next-line no-console
          console.log(error)
        })
        .then(function() {
          // always executed
        })
    },
    initGSAP() {
      // eslint-disable-next-line no-unused-vars
      const subtitle = gsap.timeline().from('.news', {
        opacity: 0,
        stagger: 0.4,
        y: 20,
        duration: 0.7
      })
    },
    test() {}
  },
  // eslint-disable-next-line vue/order-in-components
  computed: {
    count() {
      return this.$store.state.counter
    }
  },
  head() {
    return {
      script: [
        {
          src:
            'https://cdnjs.cloudflare.com/ajax/libs/waterfall.js/1.0.2/waterfall.min.js'
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@500;700&display=swap'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
  margin: 5rem;
  h3 {
    font-size: 3rem;
  }
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.newsWrapper {
  // display: grid;
  // grid-gap: 1em;
  // grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  width: 80vw;

  // column-count: 4;
  // column-gap: 1em;

  .block {
    background-color: #ee01ca;
    display: block;
    padding: 20px;
    word-wrap: break-word;
    display: inline-block;
    width: 200px;
    margin-bottom: 10px;
  }
}
</style>
