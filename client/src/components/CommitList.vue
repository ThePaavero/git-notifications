<template>
  <div>
    <ul>
      <li v-for='commit in commits'>
        <a
          target='_blank'
          :href='commit.changeset_url'>
          {{ commit.message }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['commits'],
    data() {
      return {}
    },
    methods: {},
    components: {}
  }
</script>

<style lang='scss' rel='stylesheet/scss' scoped>
</style>
