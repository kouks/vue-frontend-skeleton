<template>
  <p>{{ message }}</p>
</template>

<script>
export default {
  data () {
    return {
      message: 'Hello World'
    }
  }
}
</script>

<style lang="scss">
  $color: grey;

  p {
    color: $color;
  }
</style>
