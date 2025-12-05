// Classe pour gérer les appels à l'API MockAPI
export default class DB {
  
  // Méthode pour enregistrer l'URL de l'API
  // Paramètre: data = l'URL de MockAPI (ex: "https://6931dc...mockapi.io/products")
  static setApiURL(data) {
    this.apiURL = data; // Stocke l'URL dans une propriété de classe
  }

  // Méthode pour récupérer TOUS les produits de l'API
  // Retourne: Un tableau de tous les produits
  static async findAll() {
    const response = await fetch(this.apiURL); // Appel GET vers l'API
    return response.json(); // Convertit la réponse en JSON et la retourne
  }

  // Méthode pour récupérer UN SEUL produit par son ID
  // Paramètre: id = l'identifiant du produit (ex: "1", "2", etc.)
  // Retourne: Un objet produit
  static async findById(id) {
    const response = await fetch(this.apiURL + "/" + id); // Appel GET vers /products/1
    return response.json(); // Convertit la réponse en JSON et la retourne
  }
}