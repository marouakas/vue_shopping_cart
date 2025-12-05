import { reactive, computed } from "vue";

const cartItems = reactive([]);

const addToCart = (product) => {
  const existingItem = cartItems.find(item => item.id === product.id);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }
};

const removeFromCart = (productId) => {
  const index = cartItems.findIndex(item => item.id === productId);
  if (index !== -1) {
    cartItems.splice(index, 1);
  }
};

const updateQuantity = (productId, quantity) => {
  const item = cartItems.find(item => item.id === productId);
  if (item && quantity >= 1) {
    item.quantity = quantity;
  }
};

const totalHT = computed(() => {
  return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
});

export const shoppingCartStore = reactive({
  cartItems,
  addToCart,
  removeFromCart,
  updateQuantity,
  totalHT
});