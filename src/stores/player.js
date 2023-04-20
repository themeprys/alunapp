import { defineStore } from 'pinia'

export const usePlayerStore = defineStore('player', {
  state: () => ({
    counter: 0,
    player: true,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.player == false ;
    },
  },
})