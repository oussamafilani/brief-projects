const click = document.querySelector("#click")
const increment = document.querySelector("#increment")
const Question_number = document.querySelector("#Question_number")
const Question_total = document.querySelector("#Question_total")

let nbmquestion = 10

Question_total.innerHTML = nbmquestion

let n = 100/nbmquestion
let i = n



window.addEventListener('load',()=>{

    Question_number.innerHTML = i * nbmquestion * 0.01
    increment.style.width = i+'%'
    i += n;
    click.addEventListener('click',()=>{
    
        if(i > 100){
            console.log('you are done')
        }
        else{
            
            Question_number.innerHTML = i * nbmquestion * 1/100
            // Question_number.innerHTML = Math.floor(i * nbmquestion * 1/100)
            console.log('clicked')
            increment.style.width =i+'%'
            console.log(i)
            i += n;
            return i;
        }
    })

})