<script setup>
import { onMounted } from "vue";
import { productsStore } from "@/stores/products";
import { shoppingCartStore } from "@/stores/shoppingcart";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import ProductList from "@/components/shop/ProductList.vue";
import ShoppingCart from "@/components/cart/ShoppingCart.vue";

const API_URL = "https://6931dc8711a8738467d0cd8f.mockapi.io/products";

onMounted(async () => {
  await productsStore.init(API_URL);
});

const handleAddToCart = (product) => {
  shoppingCartStore.addToCart(product);
};
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="flex-1 container mx-auto py-8 px-4 flex flex-wrap">
      <ProductList @add-to-cart="handleAddToCart" />
      <ShoppingCart />
    </main>
    <AppFooter />
  </div>
</template>