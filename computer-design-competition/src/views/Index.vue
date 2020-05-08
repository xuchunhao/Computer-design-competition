<template>
  <div class="index">
    <homepage/>
    <introduce/>
  </div>
</template>

<script>
import '@/assets/css/index.less'
import Homepage from '@/components/index/Homepage'
import Introduce from '@/components/index/Introduce'

export default {
  name: 'Index',
  components: {
    Homepage,
    Introduce
  }
}
</script>
