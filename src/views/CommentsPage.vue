<template>
  <div class="comment-container">
    <div class="comment-writer">
      <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>留言板</span>
      </div>
    </template>
    <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
    :size="formSize"
    status-icon
  >
  <el-input
    v-model="textarea"
    :rows="3"
    type="textarea"
    placeholder="说两句吧"
    prop="content"
  />
  </el-form>

  </el-card>

    </div>
    <div class="comment-list">

    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
const formSize = ref('default')
const ruleFormRef = ref()
const ruleForm = reactive({
  content: ''
})

const rules = reactive({
  content: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
  ]
})
</script>

<style lang="scss" scoped>
@import '@/common/sass/mixin.scss';
 .comment-container {
  width: 80%;
  margin: auto;
  height: 100vh;

}

</style>
