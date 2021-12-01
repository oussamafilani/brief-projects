"use strict";

import { Persone, Formateur, Etudiant } from './classes/Persone.js'

import Subject from './classes/Subject.js'
import Question from './classes/Question.js'
import Level from './classes/Level.js'


const container = document.querySelector(".container")

async function  renderSubjects(id){

    let sbj =  await Subject.GetSubjectByParentId(id);
    container.innerHTML = ``
    sbj.forEach((ele) => {
        container.innerHTML += 
        /*html*/
        `
        <div class="card">
        <header class="card-header">
          <p class="card-header-title">
          ${ele.intitule}
          </p>
          <button class="card-header-icon">
            <span class="icon">
              <i class='bx bx-dots-vertical-rounded'></i>
            </span>
          </button>
        </header>
        <div class="card-content">
        ${ele.description}
        </div>
        <div class="card-footer">
            <a href="/questions.html?sujetId=${ele.id}" id="sub-questions-${ele.id}" class="card-footer-item">Questions</a>
            <a   id="sub-subjects-${ele.id}" class="card-footer-item">Sub subjects</a>
          
        </div>
      </div>
        `
    
        document.addEventListener('click', async (e)=>{
            if(e.target.id === `sub-subjects-${ele.id}` ){
                renderSubjects(ele.id)
            }
        })

        document.addEventListener('click', async (e)=>{
            if(e.target.id === `sub-questions-${ele.id}` ){
                
            }
        })
    })
}


const addSubjects = document.querySelector("#add--subject")
const modal_outer = document.querySelector(".modal_outer");
const box = document.querySelector(".box");
const close = document.querySelector(".close");


addSubjects.addEventListener("click",()=>{
  box.style.visibility = "visible";
  modal_outer.style.visibility = "visible";
})

close.addEventListener("click", () => {
  box.style.visibility = "hidden";
  modal_outer.style.visibility = "hidden";
});

modal_outer.addEventListener("click", () => {
  box.style.visibility = "hidden";
  modal_outer.style.visibility = "hidden";
});


document.addEventListener('load', renderSubjects(""))