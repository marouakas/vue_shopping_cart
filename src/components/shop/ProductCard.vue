<script setup>
const props = defineProps({
  product: { type: Object, required: true }
});

const emits = defineEmits(["add-to-cart"]);

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
      <h2 class="font-bold text-lg mb-2">{{ product.name }}</h2>
      <p class="text-gray-700">€{{ product.price.toFixed(2) }}</p>
      <button
        @click="handleAdd"
        class="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Ajouter
      </button>
    </div>
  </article>
</template>