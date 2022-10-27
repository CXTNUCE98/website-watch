<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
// import {Search, ShoppingCart, UserFilled } from '@element-plus/icons-vue'
import {
  ElIcon
} from 'element-plus'
import {Right} from '@element-plus/icons-vue'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {productList} from '../assets/fakeData/product.js'

const onSwiper = (swiper: any) => {
    console.log(swiper);
}
const onSlideChange = () => {
    console.log('slide change');
}

const modules = [Navigation, Pagination, Scrollbar, A11y]
</script>

<template>
  <div class="text-center pt-20 pb-20">
    <h1 class="text-3xl font-semibold">
      BEST SELLERS
    </h1>
    <div class="flex justify-center items-center gap-4 mt-4 mb-4">
      <span class="font-semibold">View all</span>
      <el-icon><Right /></el-icon>
    </div>
  </div>
  <div class="flex justify-center m-auto w-[80%]">
    <swiper
      :modules="modules"
      :slides-per-view="4"
      :space-between="50"
      navigation
      :pagination="{ clickable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        v-for="item in productList"
        :key="item.id"
      >
        <img
          :src="item.image"
          alt=""
        >
      </swiper-slide>    
    </swiper>
  </div>
</template>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

::v-deep(.el-carousel__mask){
    background-color: transparent;
}
</style>