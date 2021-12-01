"use strict";
export default  class Subject {
    constructor(id, intitule) {
      this.id = id;
      this.intitule = intitule;
    }

    static async GetAll(){
      try {
        const response = await fetch('http://localhost:3000/sujets',
          {
            method: "GET",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          });
        const responseData = await response.json();
        console.log(responseData);
        return responseData;
      } catch (error) {
        return console.warn(error);
      }
    }
    
    static async GetSubjectByParentId(id){
      try {
        const response = await fetch(`http://localhost:3000/sujets/?parentId=${id}`,
          {
            method: "GET",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          });
        const responseData = await response.json();
        console.log(responseData);
        return responseData;
      } catch (error) {
        return console.warn(error);
      }
    }

   static Save(obj){
    fetch("http://localhost:3000/sujets/",
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(obj)
    })
    .then(function(res){ console.log(res) })
    .catch(function(res){ console.log(res) })
    }

    static delete(id){
      fetch(`http://localhost:3000/sujets/${id}`,
      {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "DELETE"
      })
      .then(function(res){ console.log(res) })
      .catch(function(res){ console.log(res) })
    }
  }
  