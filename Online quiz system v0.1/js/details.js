// javascript for details.html
const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.details');


const renderDetails = async () => {
  const res = await fetch('http://localhost:3000/questions/' + id + '/?_expand=level&_expand=sujet' );
  if (!res.ok) {
    window.location.replace("/");
  }
  const question = await res.json();
   



  let template = `
    <div class="titre">${question.sujet.intitule} > <span>${question.level.description} <span> <div>
    <h1>${question.question}</h1>
  `
  let choicesContainer = "<div class='choices'>"
  let div = "</div>"
  // for(let x of question.answer_options){
    
  //   choicesContainer += "<button class='correct--answer'><p class='choice'>" + x  + "</button></p>";
  // }

  question.answer_options.forEach((ele,index) => {
    choicesContainer += `<input  type="button"  value="${ele}">`;
  })




  template += (choicesContainer + div);

  
  container.innerHTML = template;
  

console.log(question.correct_answer)

// document.querySelector(".choices").children;

question.correct_answer.forEach(async (ele)=>{

  // if(ele === document.querySelector(`.correct--answer${index}`).value )
  // // if(true)
  // {

  //     document.querySelector(`.correct--answer${index}`).classList.add("correct--answer")
  // }

  // console.log(document.querySelector(".choices").children[0].value)
  // document.querySelector(".choices").children.forEach((e)=>{
  //   if(ele === e.value )
    
  //   {
  
  //       e.classList.add("correct--answer")
  //   }
  // })

  for(let i = 0 ; i<document.querySelector(".choices").children.length ; i++){

      if(document.querySelector(".choices").children[i].value == ele){
        document.querySelector(".choices").children[i].classList.add("correct--answer")
      }
  }


  
})




}







// if(forEach()question.answer_options){

// }



window.addEventListener('DOMContentLoaded', renderDetails);