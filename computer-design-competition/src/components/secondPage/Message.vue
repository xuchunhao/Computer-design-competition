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
        <s-notice v-if="messageKind == 'snotice'"></s-notice>
        <private-message v-if="messageKind == 'privateMessage'"></private-message>
        <notice v-if="messageKind == 'notice'"></notice>
      </div>
    </div>
  </div>
</template>


<script>
import '@/assets/css/secondPage/message.less'
import sNotice from '@/views/SNotice.vue'
import privateMessage from '@/views/PrivateMessage.vue'
import notice from '@/views/Notice.vue'

export default {
  components:{
    privateMessage,
    sNotice,
    notice
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