<template>
  <div class="basic-info">
    <div class="container info-content">
      <porotrait/>
      <div class="info-box">
        <div class="info-list">
          账号：<el-input></el-input>
        </div>
        <div class="info-list">
          姓名：<el-input></el-input>
        </div>
        <div class="info-list">
          昵称：<el-input></el-input>
        </div>
        <el-button>修改信息</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import porotrait from '@/components/secondPage/porotrait/porotrait.vue'
import '@/assets/css/secondPage/basicInfo.less'

export default {
  components: {
    porotrait
  },
  data() {
    return {
      
    };
  },
  
};
</script>
