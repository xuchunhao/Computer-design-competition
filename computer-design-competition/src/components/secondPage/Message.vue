<template>
  <div class="message">
    <div class="container clearfix">
      <aside class="message-kind">
        <ul>
          <li class="message-center"><i class="el-icon-s-promotion"></i>消息中心</li>
          <li @click="chooseMessageKind('snotice')" :class="{ active: messageKind == 'snotice' }">系统通知</li>
          <li @click="chooseMessageKind('privateMessage')" :class="{ active: messageKind == 'privateMessage' }">私信</li>
          <li @click="chooseMessageKind('notice')" :class="{ active: messageKind == 'notice' }">公告</li>
        </ul>
      </aside>
      <div class="message-box">
        <private-message></private-message>
      </div>
    </div>
  </div>
</template>


<script>
import '@/assets/css/secondPage/message.less'
import privateMessage from '@/views/PrivateMessage.vue'

export default {
  components:{
    privateMessage
  },
  data() {
    return {
      messageKind: 'privateMessage'
    }
  },
  methods: {
    chooseMessageKind(kind){
      this.messageKind = kind;
    }
  },
  created() {
    this.messageKind = this.$route.params.messageKind;
    // this.chooseMessageKind()
    // console.log(this.messageKind,this.$route)
  }
}
</script>