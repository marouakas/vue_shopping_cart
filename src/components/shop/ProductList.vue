<script setup>

import { productsStore } from "@/stores/products";

import ProductCard from "./ProductCard.vue";


const emits = defineEmits(["add-to-cart"]);   // Définir un événement qu'on envoie au parent (App.vue)

// Fonction appelée quand on clique sur "Ajouter"
const handleAddToCart = (product) => { emits("add-to-cart", product); };    // Envoyer le produit à App.vue


</script>

<template>
  <!--  la liste des produits -->
  <section class="w-full md:w-3/4 px-4 mb-8">
    
    <h1 class="text-3xl font-bold mb-4">Nouveaux produits</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      
      <!-- Boucle : créer une carte pour chaque produit -->
      <ProductCard
        v-for="product in productsStore.products"     
        :key="product.id"
        :product="product"
        @add-to-cart="handleAddToCart"
      />
    
      <!-- :product = envoyer le produit à ProductCard -->
      <!-- @add-to-cart = écouter l'événement "ajouter" -->
      
    </div>
  </section>
</template>