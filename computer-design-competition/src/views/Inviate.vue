<template>
  <div class="inviate">
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-button @click="search()">搜索</el-button>
    <div class="inviate-person" v-for="(person, index) in tempPerson" :key="index">
      {{person.name}}
      <el-button>邀请</el-button>
    </div>
  </div>
</template>

<script>
import '@/assets/css/inviate.less';

export default {
  data () {
    return {
      input: "",
      inviatePerson:[{
        name:"张三"
      },{
        name:"李四"
      },{
        name:"王五"
      }],
      tempPerson:[{
        name:"张三"
      },{
        name:"李四"
      },{
        name:"王五"
      }],
    }
  },
  methods : {
    search () {
      let newArr = [];
      for(let i = 0; i < this.inviatePerson.length; i++) {
        if(this.inviatePerson[i].name.indexOf(this.input) != -1){
          newArr.push(this.inviatePerson[i]);
        }
      }
      this.tempPerson = newArr;
    }
  }
}
</script>