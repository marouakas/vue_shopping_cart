// Classe pour gérer les appels à l'API MockAPI
export default class DB {
  

  static setApiURL(data) {
    this.apiURL = data; // Stocke l'URL dans une propriété de classe
  }

 
  static async findAll() {
    const response = await fetch(this.apiURL); // Appel GET vers l'API
    return response.json(); // Convertit la réponse en JSON et la retourne
  }

 
  static async findById(id) {
    const response = await fetch(this.apiURL + "/" + id); // Appel GET vers /products/1
    return response.json(); // Convertit la réponse en JSON et la retourne
  }
}