<script setup>
import { productsStore } from "@/stores/products";
import ProductCard from "./ProductCard.vue";

const emits = defineEmits(["add-to-cart"]);

const handleAddToCart = (product) => {
  emits("add-to-cart", product);
};
</script>

<template>
 <section class="w-full md:w-3/4 px-4 mb-8">
    <h1 class="text-3xl font-bold mb-4">Nouveaux produits</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProductCard
        v-for="product in productsStore.products"
        :key="product.id"
        :product="product"
        @add-to-cart="handleAddToCart"
      />
    </div>
  </section>
</template>