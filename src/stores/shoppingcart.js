import { reactive, computed } from "vue";
// reactive = données qui changent en direct
// computed = valeur calculée automatiquement

const cartItems = reactive([]);
// tableau du panier (liste des produits)

const addToCart = (product) => {
  const existingItem = cartItems.find(item => item.id === product.id);
  // on cherche si le produit est déjà dans le panier

  if (existingItem) {
    existingItem.quantity += 1;
    // si oui → on augmente la quantité
  } else {
    cartItems.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
    // sinon → on ajoute le produit avec quantité = 1
  }
};

const removeFromCart = (productId) => {
  const index = cartItems.findIndex(item => item.id === productId);
  // on cherche l’endroit du produit dans le tableau

  if (index !== -1) {
    cartItems.splice(index, 1);
    // si trouvé → on supprime du panier
  }
};

const updateQuantity = (productId, quantity) => {
  const item = cartItems.find(item => item.id === productId);
  // on cherche le produit

  if (item && quantity >= 1) {
    item.quantity = quantity;
    // on change la quantité
  }
};

const totalHT = computed(() => {
  // calcule le total automatiquement
  return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  // total = prix × quantité pour chaque produit
});

export const shoppingCartStore = reactive({
  cartItems,        // liste des produits
  addToCart,        // ajouter au panier
  removeFromCart,   // enlever du panier
  updateQuantity,   // modifier la quantité
  totalHT           // total du panier
});
