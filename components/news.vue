<template lang="pug">
  .b.grid-item
    .news
      .newsContent 
        p {{content.content}}
      .detail
        h4 {{content.author}} {{index}}
        p.motto {{content.from}}
</template>

<script>
export default {
  name: 'News',
  props: {
    content: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  computed: {},
  mounted() {
    // console.log(this.contentJson)
    // console.log(this.content)
  }
}
</script>

<style lang="scss">
.b {
  display: inline-block;
  // margin-bottom: 1rem;
  width: 33%;
  animation: float 3s ease 0s 1;
}
.news {
  margin: 1rem;

  box-sizing: border-box;
  text-align: right;
  // min-width: 400px;
  // border-bottom: 1px solid black;
  padding: 10px 20px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // animation: float 3s ease 0s 1;
  h4 {
  }
  .newsContent {
  }
}

@keyframes float {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.newsContent {
  min-height: 60px;
  margin-bottom: 1rem;
  font-size: 1.5rem;

  position: relative;
  p {
    word-wrap: break-word;
    text-align: left;
  }
}
.motto {
  color: lightslategray;
}
</style>
