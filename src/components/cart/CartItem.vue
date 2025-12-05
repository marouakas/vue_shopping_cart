<script setup>
const props = defineProps({
  item: { type: Object, required: true }
});

const emits = defineEmits(["update-quantity", "remove"]);

const handleQuantityChange = (event) => {
  const newQty = parseInt(event.target.value);
  if (newQty >= 1) {
    emits("update-quantity", props.item.id, newQty);
  }
};

const handleRemove = () => {
  emits("remove", props.item.id);
};
</script>

<template>
  <li class="flex justify-between items-center py-3">
    <div class="flex items-center">
      <img
        :src="item.image"
        :alt="item.name"
        class="h-12 w-12 rounded-full mr-4"
      />
      <div>
        <span class="font-semibold">{{ item.name }}</span>
        <span class="block text-sm text-gray-500">€{{ item.price.toFixed(2) }}</span>
      </div>
    </div>
    <div class="flex items-center">
      <input
        type="number"
        :value="item.quantity"
        @input="handleQuantityChange"
        min="1"
        class="form-input mt-1 block w-16 text-center rounded text-gray-700 border-gray-300 border"
      />
      <button @click="handleRemove" class="ml-2 text-red-500 hover:text-red-700">
        <i class="fas fa-times"></i>
      </button>
    </div>
  </li>
</template>