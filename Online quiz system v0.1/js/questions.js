"use strict";

import { Persone, Formateur, Etudiant } from './classes/Persone.js'

import Subject from './classes/Subject.js'
import Question from './classes/Question.js'
import Level from './classes/Level.js'






const sujetId = new URLSearchParams(window.location.search).get('sujetId');


// ----------------------------------------------


// ----------------------------------------------




const  qst   = await Question.GetQuestionsBysujetId(sujetId)
const  subject   = await Subject.GetAll()
const  levels   = await Level.GetAll()

// const question = document.querySelector("#questions")

const container = document.querySelector('.questions');

const  uid =  () =>  (new Date().getTime()).toString(36)




qst.forEach((ele) => {
    container.innerHTML +=
    /*html*/
    `
      <div class="post">
      <div   class="icon ico--more ico--${ele.id}">
      <img id="ico--${ele.id}" src="./public/icons/more.svg" alt="more">
        </div>
      <div class="post--dropdown post--dropdown${ele.id}">
            <ul>
            <li>Edit</li>
            <li id="${ele.id}">Delete</li>
            <li class="view--question" id="viewquestion-${ele.id}">View</li>
            </ul>
        </div>
      <small>${ele.sujet["intitule"]}</small> >
      <small>${ele.level["description"]}</small>
        <h2>${ele.question}</h2>
        
        
      </div>
    `

    document.addEventListener('click', (e)=>{
        if(e.target.id === ele.id ){
            Question.delete(ele.id )
        }
    })
    document.addEventListener('click', (e)=>{
        if(e.target.id === `viewquestion-${ele.id}` ){
            console.log(e.target.previousSibling.id)
            // console.log(e.target.id.split("-")[1])
        }
    })

    document.addEventListener('click', (e)=>{
        if(e.target.id === `ico--${ele.id}`){
            document.querySelector(`.post--dropdown${ele.id}`).classList.add('post--dropdown');
            document.querySelector(`.post--dropdown${ele.id}`).style.visibility = "visible";
            // document.querySelector(`.post--dropdown${ele.id}`).classList.toggle('post--dropdown');
        }else{
           document.querySelector(`.post--dropdown${ele.id}`).style.visibility = "hidden";
        }
    }
    )



  
    // document.addEventListener("click",(e)=>{
    //     if(e.target.id == `ico--more${ele.id}`){
    //         document.querySelector(".post--dropdown").style.visibility = "visible";
    //     }
    // })
})



document.querySelector("#save--question").addEventListener('click',()=>{

    let questionType
    const anwer_op = [];
    const anwer_cr = [];

    
    Array.from(document.querySelectorAll(".answer-op-tag")).forEach(function(el) {
        anwer_op.push(el.value)
      });

    Array.from(document.querySelectorAll("#answers__dropzone2 .answer-op-tag")).forEach(function(el) {
      anwer_cr.push(el.value)
      });

    let qt = new Question(
        uid(),
        questionType = anwer_cr.length > 1 ? "multiple" : "single",
        document.querySelector("#subjects-options").value,
        document.querySelector("#question-level").value,
        document.getElementById("score").value,
        document.querySelector(".question-text").value,
        anwer_op,
        anwer_cr

    )

    Question.Save(qt);

})

const subjectsOtions = document.querySelector("#subjects-options");
const questionLevel = document.querySelector("#question-level");


subject.forEach((ele)=>{

  subjectsOtions.innerHTML += 
  /*html*/
  `
  <option value="${ele.id}">${ele.intitule}</option>
  `

})
levels.forEach((ele)=>{

  questionLevel.innerHTML += 
  /*html*/
  `
  <option value="${ele.id}">${ele.description}</option>
  `

  

})


levels.forEach((ele) =>{

  questionLevel.addEventListener('change',(e)=>{

    if(e.target.value === ele.id)
    {
      document.querySelector(".score").innerHTML =
    /*html*/
      `
      <label for="score">Points : <span class = "score--val">${ele.min}</span></label>

      <input  type="range" id="score" min="${ele.min}" max="${ele.max}" value="0" step="${ele.step}">
      ` 
      
      document.getElementById("score").addEventListener('change',()=>{
      console.log("tsswbat " + document.getElementById("score").value)
      document.querySelector(".score--val").innerHTML = `${document.getElementById("score").value}`
      })
    }
    
    
    
  

  })

  
})

let i = 0
document.querySelector(".answer-op").addEventListener('keyup',(event)=>{

  if (event.keyCode === 13 && document.querySelector(".answer-op").value != '') {
  document.querySelector(".add--answers__option").innerHTML +=
  /*html*/
  `<div class="answer-container" draggable="true">
  <input type="button" value="${document.querySelector(".answer-op").value}" class="answer-op-tag answer-op__${i}">
  <span class="del--ans__op">&#x2716;</span>
  </div>

  `
  document.querySelector(".answer-op").value = ``
  i++
  hundelAnswerOptions()
  }

})


function hundelAnswerOptions(){
  document.querySelectorAll(".answer-container").forEach((element)=>{
  element.addEventListener('click',(event)=>{
    if(event.target.className === 'del--ans__op'){
        element.remove()
    }
  })
})
}


var dragged;

document.querySelector(".add--answers__option").addEventListener('dragstart',(event)=>{
  event.dataTransfer.setData('text/plain',null)
})

/* events fired on the drop targets */
document.addEventListener("dragover", (event)=> {
  // prevent default to allow drop
  event.preventDefault();
}, false);


document.addEventListener("dragstart", (event)=>{
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", (event)=> {
  // reset the transparency
  event.target.style.opacity = "";
}, false);

/* events fired on the drop targets */
document.addEventListener("dragover", (event) =>{
  // prevent default to allow drop
  event.preventDefault();
}, false);

document.addEventListener("dragenter", (event) => {
  // highlight potential drop target when the draggable element enters it
  if (event.target.className == "add--answers__option") {
    event.target.style.background = "rgba(0, 0, 0, 0.2)";
  }

}, false);


document.addEventListener("dragleave", (event) => {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.className == "add--answers__option") {
    event.target.style.background = "";
  }

}, false);

document.addEventListener("drop", (event) =>{
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged elem to the selected drop target
  if (event.target.className == "add--answers__option") {
    event.target.style.background = "";
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  }
}, false);



const addQuestion = document.getElementById("add--question");
const viewQuestion = document.querySelector(".view--question");
const modal_outer = document.querySelector(".modal_outer");
const box = document.querySelector(".box");
const boxView = document.querySelector(".box-view");
const close = document.querySelector(".close");

addQuestion.addEventListener("click", () => {
  box.style.visibility = "visible";
  modal_outer.style.visibility = "visible";
});

viewQuestion.addEventListener("click", () => {
  boxView.style.visibility = "visible";
  modal_outer.style.visibility = "visible";
});

close.addEventListener("click", () => {
  box.style.visibility = "hidden";
  boxView.style.visibility = "hidden";
  modal_outer.style.visibility = "hidden";
});

modal_outer.addEventListener("click", () => {
  box.style.visibility = "hidden";
  boxView.style.visibility = "hidden";
  modal_outer.style.visibility = "hidden";
});












