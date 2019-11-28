
<template>
    <div>a</div>
</template>

<script>
  import store from './Home'
  export default {
    name: 'epsode-view',
    props: { index: Number },
    methods: {
    },
    beforeRouteUpdate (to, from, next) {
      this.post = null
      console.log(to)
    },
    store: store
  }
</script>