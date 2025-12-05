
import { reactive } from "vue";

import DB from "@/services/DB";


const products = reactive([]);

// Fonction pour aller chercher les produits sur MockAPI
const init = async (apiURL) => {
  
 
  DB.setApiURL(apiURL); // Dire à DB l'adresse de MockAPI
  const data = await DB.findAll();  //  Aller chercher tous les produits (attendre la réponse)
  
  
  products.splice(0, products.length, ...data); //  Vider le tableau et mettre les nouveaux produits dedans
};


export const productsStore = reactive({
  products, // Le tableau avec les produits
  init,     // La fonction pour charger les produits
});