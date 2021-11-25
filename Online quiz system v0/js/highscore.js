
const scores = JSON.parse(localStorage.getItem('scores'))

window.addEventListener('load',()=>{

    scores.forEach((ele,index) =>{
       
      if( index === 0){
        document.querySelector('#players_list').innerHTML +=
       /*html*/ `  <li>
        <div class="flex-item flex-item_1">
          <div>${index+1}</div>
          <img
            class="medal"
            src="./img/gold-medal.png"
            alt="medal"
          />
          <img
            class="avatar"
            src="${ele.avatar}"
            alt="avatar"
          />
          <span>${ele.name}</span>
        </div>
        <div class="flex-item lex-item_2">
          <span>${ele.score} </span>

          <img class="coin" src="./img/coin.svg" alt="coin" />
        </div>
      </li>`

      }else if(index === 1){
        document.querySelector('#players_list').innerHTML +=
       /*html*/ `  <li>
        <div class="flex-item flex-item_1">
          <div>${index+1}</div>
          <img
            class="medal"
            src="./img/silver-medal.png"
            alt="medal"
          />
          <img
            class="avatar"
            src="${ele.avatar}"
            alt="avatar"
          />
          <span>${ele.name}</span>
        </div>
        <div class="flex-item lex-item_2">
          <span>${ele.score} </span>

          <img class="coin" src="./img/coin.svg" alt="coin" />
        </div>
      </li>`
      }else if(index === 2){
        document.querySelector('#players_list').innerHTML +=
       /*html*/ `  <li>
        <div class="flex-item flex-item_1">
          <div>${index+1}</div>
          <img
            class="medal"
            src="./img/bronze-medal.png"
            alt="medal"
          />
          <img
            class="avatar"
            src="${ele.avatar}"
            alt="avatar"
          />
          <span>${ele.name}</span>
        </div>
        <div class="flex-item lex-item_2">
          <span>${ele.score} </span>

          <img class="coin" src="./img/coin.svg" alt="coin" />
        </div>
      </li>`
      }else{
        document.querySelector('#players_list').innerHTML +=
        /*html*/ `  <li>
         <div class="flex-item flex-item_1">
           <div>${index+1}</div>
           <spam style=" width: 30px;margin :0 6px;"></spam>
           <img
             class="avatar"
             src="${ele.avatar}"
             alt="avatar"
           />
           <span>${ele.name}</span>
         </div>
         <div class="flex-item lex-item_2">
           <span>${ele.score} </span>
  
           <img class="coin" src="./img/coin.svg" alt="coin" />
         </div>
       </li>`
      }
          
    })

})

// const scorre = [{"name": "oussama","score":  33,"avatar": "https://avatars.dicebear.com/api/pixel-art/djdjdjjdj.svg"},{"name": "oussama","score":  33,"avatar": "https://avatars.dicebear.com/api/pixel-art/djdddjdjjdj.svg"},{"name": "oussama","score":  33,"avatar": "https://avatars.dicebear.com/api/pixel-art/djdjdjjdj.svg"},{"name": "oussama","score":  33,"avatar": "https://avatars.dicebear.com/api/pixel-art/djdjdjjdj.svg"},{"name": "oussama","score":  33,"avatar": "https://avatars.dicebear.com/api/pixel-art/djdjdjjdj.svg"}]

// localStorage.setItem('scores',JSON.stringify([{"name": "oussama","score":  33,"avatar": "https://avatars.dicebear.com/api/pixel-art/djdjdjjdj.svg"},{"name": "oussama","score":  33,"avatar": "https://avatars.dicebear.com/api/pixel-art/djdddjdjjdj.svg"},{"name": "oussama","score":  33,"avatar": "https://avatars.dicebear.com/api/pixel-art/djdjdjjdj.svg"},{"name": "oussama","score":  33,"avatar": "https://avatars.dicebear.com/api/pixel-art/djdjdjjdj.svg"},{"name": "oussama","score":  33,"avatar": "https://avatars.dicebear.com/api/pixel-art/djdjdjjdj.svg"}]))