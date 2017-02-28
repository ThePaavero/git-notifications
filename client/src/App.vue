<template>
  <div id='app'>
    <h1>VCS Events</h1>
    <ul>
      <li v-for='event in this.$store.state.events'>
        {{ event }}
      </li>
    </ul>
  </div>
</template>

<script>
  import ExampleComponent from './components/ExampleComponent.vue'

  const io = window.io
  const apiUrl = 'http://localhost:4200'
  const socket = io.connect(apiUrl)

  export default {
    name: 'app',
    components: {
      ExampleComponent
    },
    data() {
      return {}
    },
    mounted() {
      console.log('Mounted...')
      socket.on('data', data => {
        console.log('Got socket data')
        this.$store.commit('addEvent', data)
      })
    },
    methods: {}
  }

</script>

<style lang='scss' rel='stylesheet/scss'>
  #app {
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #000;
    font-size: 2vw;
    padding: 5vh 5vw;

    @media screen and (max-width: 800px) {
      font-size: 16px;
    }
  }

  h1 {
    font-size: 4vw;
    margin-bottom: 4vh;

    @media screen and (max-width: 800px) {
      font-size: 30px;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }

</style>
