<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue'
import {
  ElRate
} from 'element-plus'

const color = ref(5)
const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900'])
</script>

<template>
  <h2 class="text-center pb-4 text-2xl">
    WHAT PEOPLE SAY ABOUT OUR PRODUCT
  </h2>
  <div class="flex text-center pt-20 pb-20 w-[60%] m-auto gap-8">
    <div class="bg-[#EEEEEE] p-6 h-[298px] text-left">
      <div class="demo-rate-block">
        <el-rate
          v-model="color"
          :colors="colors"
        />
      </div>
      Sản phẩm đúng với mô tả, chất lượng tốt. Gia công tỉ mỉ, độ hoàn thiện cao. 
      Rất đáng mua, sẽ ủng hộ shop trong thời gian tới.      
    </div>
    <div class="bg-[#EEEEEE] p-6 h-[298px] text-left">
      <div class="demo-rate-block">
        <el-rate
          v-model="color"
          :colors="colors"
        />
      </div>
      Sản phẩm đúng với mô tả, chất lượng tốt. Gia công tỉ mỉ, độ hoàn thiện cao. 
      Rất đáng mua, sẽ ủng hộ shop trong thời gian tới.      
    </div>
    <div class="bg-[#EEEEEE] p-6 h-[298px] text-left">
      <div class="demo-rate-block">
        <el-rate
          v-model="color"
          :colors="colors"
        />
      </div>
      Sản phẩm đúng với mô tả, chất lượng tốt. Gia công tỉ mỉ, độ hoàn thiện cao. 
      Rất đáng mua, sẽ ủng hộ shop trong thời gian tới.      
    </div>
  </div>  
</template>

<style scoped>
.demo-rate-block {
  padding: 30px 0;
  border-right: solid 1px var(--el-border-color);
  display: block;
  width: 49%;
  box-sizing: border-box;
}
.demo-rate-block:last-child {
  border-right: none;
}
.demo-rate-block .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>