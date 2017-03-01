<template>
  <div id='app'>
    <h1>VCS Events</h1>
    <table>
      <thead>
      <tr>
        <th>Event received</th>
        <th>Event type</th>
        <th>Repository</th>
        <th>User</th>
        <th>Branch</th>
        <th>Commits</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for='event in this.$store.state.events'>
        <td>{{ formatEventTimestamp(event.socketMessageReceived) }}</td>
        <td>{{ event.trigger }}</td>
        <td>{{ event.payload.repository.title }}</td>
        <td>{{ event.payload.beanstalk_user.name }}</td>
        <td>{{ event.payload.branch }}</td>
        <td>
          <CommitList :commits='event.payload.commits'/>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import CommitList from './components/CommitList.vue'
  import moment from 'moment'

  const io = window.io
  const apiUrl = 'http://localhost:4200'
  const socket = io.connect(apiUrl)

  export default {
    name: 'app',
    components: {
      CommitList
    },
    data() {
      return {}
    },
    mounted() {
      socket.on('data', data => {
        console.log('Got socket data')
        this.$store.commit('addEvent', data)
      })
    },
    methods: {
      formatEventTimestamp(date) {
        return moment(date).format('DD.MM.YYYY HH:mm:ss')
      }
    }
  }

</script>

<style lang='scss' rel='stylesheet/scss'>
  #app {
    font-family: Arial, sans-serif;

    table {
      width: 100%;
      th {
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
      }
      th, td {
        padding: 10px 15px;
        border-bottom: solid 1px rgba(0, 0, 0, 0.2);
        text-align: left;
      }
    }
  }
</style>
