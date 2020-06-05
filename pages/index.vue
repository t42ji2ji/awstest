<template lang="pug">
  .container
    h3 AWSTEST {{count}}
    .btn(@click="add") add
    .btn(@click="test") add2
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  components: {},
  methods: {
    ...mapMutations({
      add: 'increment'
    }),
    test() {
      console.log('object')
    }
  },
  // eslint-disable-next-line vue/order-in-components
  computed: {
    count() {
      return this.$store.state.counter
    }
  }
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
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
</style>
