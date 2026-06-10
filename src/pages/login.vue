<template>
  <el-row class="min-h-screen bg-indigo-500">
    <el-col :lg="16" :md="12" class="flex items-center justify-center flex-col">
      <div>
        <div class="font-bold text-5xl text-light-50 mb-4">欢迎光临</div>
        <div class="text-gray-200 text-sm ">此站点是《vue3+ vite实战商城后台开发》视频课程的演示地址</div>
      </div>
    </el-col>
    <el-col :lg="8" :md="12" class="bg-light-50 flex items-center justify-center flex-col">
       <h2 class="font-bold text-gray-800 text-3xl">欢迎回来</h2>
       <div class="flex items-center justify-center my-5 text-gray-300 space-x-2">
        <span class="h-[1px] bg-gray-200   w-16"></span>
        <span>账号密码登录</span>
        <span class="h-[1px] bg-gray-200    w-16"></span>
        </div>
       <el-form ref="form" :model="form" class="w-[250px]">
  <el-form-item >
    <el-input v-model="form.name"  placeholder="请输入账号">
       <template #suffix>
        <User />
      </template>
    </el-input>
  </el-form-item>
   <el-form-item >
    <el-input v-model="form.name" placeholder="请输入密码"></el-input>
  </el-form-item>
  
  <el-form-item >
    <el-button class="w-[250px]" type="primary" @click="onSubmit" round color="#626aef">登录</el-button>
  </el-form-item>
</el-form>
    </el-col>
  </el-row>
</template>

<script>

  export default {
    data() {
      return {
        form: {
          usename: '',
          password: '',
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>