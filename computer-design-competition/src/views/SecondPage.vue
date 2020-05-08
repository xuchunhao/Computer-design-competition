<template>
  <div class="second-page">
    <second-page-nav></second-page-nav>
    <router-view style="padding-top: 62px"></router-view>
  </div>
</template>

<script>
import secondPageNav from '@/components/secondPage/SecondPageNav';

export default {
  components: {
    secondPageNav,

  }
}
</script>