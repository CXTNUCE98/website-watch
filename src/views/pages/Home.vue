<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">

import Banner from '../../components/Banner.vue';
import BestSelllers from '../../components/BestSelllers.vue';
import Feedback from '../../components/Feedback.vue';
import Footer from '../../components/Footer.vue';
import Header from '../../components/Header.vue';
import LastChaneToBuy from '../../components/LastChaneToBuy.vue';
import NewArrival from '../../components/NewArrival.vue';
import ShopAddress from '../../components/ShopAddress.vue';


</script>

<template>
  <Header />
  <NewArrival />
  <BestSelllers />
  <LastChaneToBuy />
  <Banner />
  <Feedback />
  <ShopAddress />
  <Footer />
  <router-view />
</template>

<style scoped></style>