<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
// import {Search, ShoppingCart, UserFilled } from '@element-plus/icons-vue'
import {
  ElIcon
} from 'element-plus'
import {Right} from '@element-plus/icons-vue'
</script>

<template>
  <div class="text-center pt-20 pb-20">
    <h1 class="text-lg font-semibold">
      NEW ARRIVALS
    </h1>
    <button class="border pl-4 pr-4 pt-2 pb-2 bg-black text-white mt-4 mb-4">
      Buy now
    </button>
  </div>
  <div class="flex gap-4 justify-center ">
    <div class="relative">
      <img
        class="w-[500px]"
        src="../assets/image/categories_1.jpg"
        alt=""
      >
      <span class="absolute left-8 bottom-6 text-white font-semibold">ĐỒNG HỒ NAM</span>
      <span class="absolute right-8 bottom-6 text-white rounded-full border p-2 h-[30px] w-[30px] flex items-center justify-center cursor-pointer">
        <el-icon>
          <Right />
        </el-icon>
      </span>
    </div>
    <div class="relative">
      <img
        class="w-[500px]"
        src="../assets/image/categories_2.jpg"
        alt=""
      >
      <span class="absolute left-8 bottom-6 text-white font-semibold">ĐỒNG HỒ NỮ</span>
      <span class="absolute right-8 bottom-6 text-white rounded-full border p-2 h-[30px] w-[30px] flex items-center justify-center cursor-pointer">
        <el-icon>
          <Right />
        </el-icon>
      </span>
    </div>
    <div class="relative">
      <img
        class="w-[500px]"
        src="../assets/image/categories_3.jpg"
        alt=""
      >
      <span class="absolute left-8 bottom-6 text-white font-semibold">PHỤ KIỆN KHÁC</span>
      <span class="absolute right-8 bottom-6 text-white rounded-full border p-2 h-[30px] w-[30px] flex items-center justify-center cursor-pointer">
        <el-icon>
          <Right />
        </el-icon>
      </span>
    </div>
  </div>
</template>

<style scoped></style>