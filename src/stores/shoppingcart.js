import { reactive, computed } from "vue"; 
// reactive = données qui se mettent à jour
// computed = valeur calculée automatiquement

const cartItems = reactive([]); 
// le panier (tableau réactif)

const addToCart = (product) => {
  const existingItem = cartItems.find(item => item.id === product.id);
  // chercher si le produit existe déjà dans le panier

  if (existingItem) {
    existingItem.quantity += 1;
    // si déjà là → +1 quantité
  } else {
    cartItems.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
    // sinon → on ajoute un nouveau produit au panier
  }
};

const removeFromCart = (productId) => {
  const index = cartItems.findIndex(item => item.id === productId);
  // trouver l’index du produit dans le panier

  if (index !== -1) {
    cartItems.splice(index, 1);
    // on supprime le produit du panier
  }
};

const updateQuantity = (productId, quantity) => {
  const item = cartItems.find(item => item.id === productId);
  // trouver le produit à modifier

  if (item && quantity >= 1) {
    item.quantity = quantity;
    // changer la quantité
  }
};

const totalHT = computed(() => {
  // calcul automatique du total
  return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
});

export const shoppingCartStore = reactive({
  cartItems,        // le panier
  addToCart,        // ajouter
  removeFromCart,   // supprimer
  updateQuantity,   // changer quantité
  totalHT           // total calculé
});
