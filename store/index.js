export const state = () => ({
  counter: 0
})

export const mutations = {
  increment(state) {
    // eslint-disable-next-line no-console
    console.log('click')
    state.counter++
  }
}
