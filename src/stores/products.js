
import { reactive } from "vue";

import DB from "@/services/DB";


const products = reactive([]);

// Fonction pour aller chercher les produits sur MockAPI
const init = async (apiURL) => {
  
  // Dire à DB l'adresse de MockAPI
  DB.setApiURL(apiURL);
  
  // Aller chercher tous les produits (attendre la réponse)
  const data = await DB.findAll();
  
  //  Vider le tableau et mettre les nouveaux produits dedans
  products.splice(0, products.length, ...data);
};

// Exporter pour utiliser ailleurs dans l'application
export const productsStore = reactive({
  products, // Le tableau avec les produits
  init,     // La fonction pour charger les produits
});