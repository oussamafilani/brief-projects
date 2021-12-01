"use strict";

 class Persone {
  constructor(id, name, prenom) {
    this.id = id;
    this.name = name;
    this.prenom = prenom;
  }

}

 class Formateur extends Persone {
  constructor(id, name, prenom, sujet_id) {
    super(id, name, prenom);
    this.sujet_id = sujet_id;
  }

  static fetchAll(){
    fetch("http://localhost:3000/formateurs")
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
  }

//   static async fetchAll(){
//     let response = await fetch("http://localhost:3000/formateurs");
//     let data = await response.json();
//     console.log(data) 
    
//   }

  fetchOne(){
    fetch(`http://localhost:3000/formateurs/${this.id}`)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
  }

}

 class Etudiant extends Persone {
  constructor(id, name, prenom) {
    super(id, name, prenom);
  }
  GetAll(){
      fetch("http://localhost:3000/etudiants")
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
  }
  GetOne(id){
      fetch(`http://localhost:3000/etudiants/${id}`)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
  }

}




export { Persone, Formateur, Etudiant };
