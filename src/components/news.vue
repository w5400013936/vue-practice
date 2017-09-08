<template>
  <div class="container">
      <h1>新闻</h1>
      <el-button type="text" @click="open2">点击打开</el-button>
  </div>
</template>
<script>
export default{
  data(){
    return{

    } 
  },
  methods:{
    open2(){
      this.$confirm('确定要删除吗？','提示',{
        confirmButtonText:'确定',
        cancelButtonText:'取消',
        type:'warning'
      }).then(()=>{
        this.$message({
          type:'success',
          message:'删除成功'
        })
      }).catch(()=>{
        this.$message({
          type:'info',
          message:'已取消删除'
        })
      })
    }
  }
}
</script>

