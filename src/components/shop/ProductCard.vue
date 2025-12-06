<script setup>
// on reçoit les données du produit depuis le parent
const props = defineProps({
  product: { type: Object, required: true }
});

// on prépare un événement pour dire "ajouter au panier"
const emits = defineEmits(["add-to-cart"]);

// quand on clique → on envoie l’événement + le produit
const handleAdd = () => {
  emits("add-to-cart", props.product);
};
</script>

<template>
  <article class="bg-white rounded-lg overflow-hidden shadow-md">
    <img
      :src="product.image"
      :alt="product.name"
      class="w-full h-48 object-cover"
    />

    <div class="p-4">
      <!-- nom du produit -->
      <h2 class="font-bold text-lg mb-2">{{ product.name }}</h2>

      <!-- prix -->
      <p class="text-gray-700">€{{ product.price.toFixed(2) }}</p>

      <!-- bouton : quand on clique → handleAdd -->
      <button
        @click="handleAdd"
        class="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Ajouter
      </button>
    </div>
  </article>
</template>
