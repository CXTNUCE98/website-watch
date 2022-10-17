<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import logo from '../assets/image/logo.jpg'
import {Search, ShoppingCart, UserFilled } from '@element-plus/icons-vue'
import {
  ElIcon
} from 'element-plus'
</script>

<template>
  <div class="flex h-20 justify-between items-center ">
    <div class="flex flex-1 justify-center gap-8">
      <span>NEW ARRIVAL</span>
      <span>COLLECTION</span>
      <span>ABOUT US</span>
    </div>
    <div class="flex-1 flex justify-center">
      <img
        class="w-[164px] cursor-pointer "
        :src="logo"
      >
    </div>
    <div class="flex flex-1 justify-center gap-8">
      <el-icon class="cursor-pointer">
        <Search />
      </el-icon>
      <el-icon class="cursor-pointer">
        <ShoppingCart />
      </el-icon>
      <el-icon class="cursor-pointer">
        <UserFilled />
      </el-icon>
    </div>
  </div>
</template>

<style scoped></style>