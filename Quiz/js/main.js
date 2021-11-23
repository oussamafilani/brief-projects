


const increment = document.querySelector("#increment")
const question_number = document.querySelector("#question_number")
const question_total = document.querySelector("#question_total")
const score = document.querySelector("#score")

const nextBtn = document.querySelector("#next_btn")
const question = document.querySelector(".questions")


answers_container = document.querySelector(".answers")
answers_label = document.querySelectorAll(".answers .btn")


let  timeleft = 10
const downloadTimer = setInterval(function(){

  if(timeleft <= -1){
    timeleft = 10
  } 
  else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds";
}
  timeleft -= 1;
}, 1000);


window.addEventListener('load',async ()=>{
    const data = await fetchQuestions();
    let nbQuestions = data.length
    question_total.innerHTML =  nbQuestions

    let m = 100/ nbQuestions
    let i = m

    question_number.innerHTML = Math.floor(i * nbQuestions * 1/100)
    increment.style.width = `${i}%`
    i += m;

    function progressIncrement(){
        timeleft = 10
        // clearInterval(progressIncrement)
        // clearInterval(questionsIncrement)
    
        if(Math.floor(i) <= 100){
            
            question_number.innerHTML = Math.floor(i * nbQuestions * 1/100)
            increment.style.width =`${i}%`
            i += m;
            return i; 
        }
    }
    
    nextBtn.addEventListener('click',()=>{
        setTimeout(progressIncrement,350)
    })
    // nextBtn.click()
    // setInterval(progressIncrement, 10000)


})

async function fetchQuestions() {
    let response = await fetch('js/questions.json');
    let data = await response.json();
            return data.results
}



function paginate(array, page_size, page_number) {
    return array.slice(
      (page_number - 1) * page_size,
      page_number * page_size
    );
  }

const itemCounter = (array, item) => {
    let counter = 0
    array.forEach(x => {
      if(x == item){ counter++ }
    });
    return counter
  }



let n = 2
const choices = []
// let  points = localStorage.getItem("score");
async function questionsIncrement(){
  let results = await fetchQuestions()
  let [result] = paginate(results, 1, n)
  if(n === (results.length) && (itemCounter(choices,true)*10 >= (Math.floor(results.length /2)*10)  ) ){
    let  uid = (new Date().getTime()).toString(36)
    let avatar = `https://avatars.dicebear.com/api/pixel-art/${uid}.svg`

      document.getElementById("avatarImag").src = avatar
      document.getElementById("box").style.display = "block";
      document.querySelector(".bg-win").style.display = "block";
      document.getElementById("countdown").style.display = "none";
      document.getElementById("fina_score").innerHTML = itemCounter(choices,true)*10;
      document.querySelectorAll(".btn").forEach((ele) =>{ ele.disabled = true});
      document.getElementById("player_name").value = ''

      document.getElementById("save").addEventListener('click',()=>{

        let scores = JSON.parse(localStorage.getItem('scores'))
        scores.pop()
        scores.push({
            "name": document.getElementById("player_name").value,
            "score":  itemCounter(choices,true)*10,
            "avatar": avatar,
        })

        // sort by value

        scores.sort(function (a, b) {
            return b.score - a.score;
        });
        
        localStorage.setItem('scores',JSON.stringify(scores))

      })

}else if(n === (results.length) && (itemCounter(choices,true)*10 < (Math.floor(results.length /2)*10)  ) ){
      document.getElementById("box").style.display = "block";
      document.querySelector(".bg-win").style.display = "block";
      document.getElementById("countdown").style.display = "none";
      document.getElementById("player_name").style.display = "none"
      document.getElementById("fina_score").innerHTML = itemCounter(choices,true)*10;
      document.getElementById("save").style.display = "none"
      document.getElementById("avatarImag").src = "./img/game-over.gif"
      document.getElementById("avatarImag").style.width = "300px"

}

  answers_container.innerHTML = ``
  result.answer_options.forEach((ele,index)=>{

    answers_container.innerHTML += 
    `<input type="button" class="btn" id="btn_answer${index}" value="${ele}">`
})

  question.innerHTML = result.question

  document.querySelectorAll(".answers .btn").forEach((ele) =>{
    

    ele.addEventListener('click',(e)=>{
        if(e.target.id === ele.id){
            

            if(result.correct_answer === ele.value )
            {
                choices[n-1] = true
                score.innerHTML = itemCounter(choices,true)*10
                e.target.style.backgroundColor = "green";
                // localStorage.setItem("score", ++points)

            }else{
              e.target.style.backgroundColor = "red";

            }   
            nextBtn.click()
            // document.querySelectorAll(".answers .btn").forEach((ele) =>{ ele.disabled = true});
         
        }
    
    })

})

n++
}


    nextBtn.addEventListener('click',()=>{
        setTimeout(questionsIncrement,350)
    })


// setInterval(questionsIncrement, 10000)

async function initialQuestions(){
    let results = await fetchQuestions()
    let [result] = paginate(results, 1, 1)

    answers_container.innerHTML = ``
    result.answer_options.forEach((ele,index)=>{
        answers_container.innerHTML += 
        `<input type="button" class="btn" id="btn_answer${index}" value="${ele}">`
    })

    question.innerHTML = result.question

    document.querySelectorAll(".answers .btn").forEach((ele) =>{
        ele.addEventListener('click',(e)=>{

            if(e.target.id === ele.id){
                
                if(result.correct_answer === ele.value )
                {
                    choices[0] = true
                    score.innerHTML = itemCounter(choices,true)*10
                    e.target.style.backgroundColor = "green";
  
                }else{
                  e.target.style.backgroundColor = "red";
                }
                nextBtn.click()
                // document.querySelectorAll(".answers .btn").forEach((ele) =>{ ele.disabled = true});
        }   

        })
      
    })
}

window.addEventListener('load',initialQuestions )





