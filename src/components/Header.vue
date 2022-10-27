<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue';
import logoLight from '../assets/image/Asset 3.svg'
import logoDark from '../assets/image/Asset 2.svg'
import {Search, ShoppingCart, User } from '@element-plus/icons-vue'
import {
  ElIcon
} from 'element-plus'

const indexY = ref(false)

window.addEventListener(
  "scroll",
  function () {
    if(window.scrollY > 10) indexY.value = true
    else indexY.value = false
  },
  { passive: true }
);
</script>

<template>
  <div class="handle-background relative">
    <div
      class="flex h-20 justify-between items-center fixed top-0 divider-under z-50 w-[100%]"
      :class="{ menu: indexY}"
    >
      <div class="flex flex-1 justify-center gap-8 ">
        <span
          class="text-white cursor-pointer"
          :class="{change_color : indexY}"
        >
          <router-link to="/product">NEW ARRIVALS</router-link>
        </span>
        <span
          class="text-white cursor-pointer"
          :class="{change_color : indexY}"
        >
          <router-link to="lastchanetobuy">COLLECTION</router-link>
        </span>
        <span
          class="text-white cursor-pointer"
          :class="{change_color : indexY}"
        >ABOUT US</span>
      </div>
      <div class="flex-1 flex justify-center">
        <router-link to="/">
          <img
            v-if="indexY"
            class="w-[164px] cursor-pointer text-black"
            :src="logoDark"
          >
          <img
            v-else
            class="w-[164px] cursor-pointer "
            :src="logoLight"
          >
        </router-link>
      </div>
      <div class="flex flex-1 justify-center gap-8">
        <el-icon
          :size="24"
          class=" cursor-pointer"
        >
          <Search
            class="text-white"
            :class="{change_color : indexY}"
          />
        </el-icon>
        <el-icon
          :size="24"
          class="cursor-pointer"
        >
          <ShoppingCart
            class="text-white"
            :class="{change_color : indexY}"
          />
        </el-icon>
        <el-icon
          :size="24"
          class="cursor-pointer"
        >
          <User
            class="text-white"
            :class="{change_color : indexY}"
          />
        </el-icon>
      </div>
    </div>
    <div class="pt-[14rem] pl-[6rem]">
      <span class="text-white pl-10 text-lg">#CHORONOS</span>
      <span class="text-white pl-4 text-lg">#WATCHSTORE</span>
      <div class="mt-4">
        <span class="text-white pl-10 text-2xl">COLOSSEUM COLLECTION</span>
      </div>
      <div class="mt-4">
        <span class="text-white pl-10 text-2xl font-light">Represent strength and adventure</span>
      </div>
      <div class="mt-8">
        <button class="text-white border border-1 pt-2 pb-2 pl-6 pr-6 ml-10">
          DISCOVER NOW
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.handle-background{
  height: 600px;
  background-image: url('../assets/image/slide_header.jpg');
  background-size: cover;
}

.menu{
  background-color: white;
}

.divider-under{
  border-bottom: 1px solid #ccc;
}
.change_color{
  color: black;
}
</style>