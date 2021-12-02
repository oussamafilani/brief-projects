"use strict";

export default class Question {
  constructor(id, type, sujetId, levelId, score, question, correct_answer, answer_options ) {
    this.id = id;
    this.type = type ;
    this.sujetId = sujetId;
    this.levelId = levelId;
    this.score = score;
    this.question = question;
    this.correct_answer = correct_answer;
    this.answer_options = answer_options;
  }

    
    static async GetAll(){
      try {
        const response = await fetch('http://localhost:3000/questions?_expand=sujet',
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

    static async GetQuestionsBysujetId(id){
      try {
        const response = await fetch(`http://localhost:3000/questions?_expand=level&_expand=sujet&sujetId=${id}`,
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
    fetch("http://localhost:3000/questions/",
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
      fetch(`http://localhost:3000/questions/${id}`,
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
