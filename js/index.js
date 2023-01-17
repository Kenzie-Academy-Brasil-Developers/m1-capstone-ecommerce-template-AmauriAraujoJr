let body=document.querySelector('body');
 let vitrine=document.querySelector(".cards")

function addCards(list){


    for(let i = 0 ; i< list .length;i++){
       console.log(list[i].nameItem);


        let card= document.createElement("li");
        card.classList.add("card")
        card.id=list[i].id
        vitrine.appendChild(card)

        let divFigure= document.createElement('div')
        divFigure.classList.add("figure-card");
        card.appendChild(divFigure);
        let imgCard=document.createElement('img');
         imgCard.src=list[i].img;
        imgCard.classList.add('img-card');
        divFigure.appendChild(imgCard);

        let divInfo= document.createElement('div');
                divInfo.classList.add("info");
                card.appendChild(divInfo)

                let h3= document.createElement('h3');
                h3.classList.add("tipo");
             h3.innerText=list[i].tag;
             h3.classList.add('etiqueta')
                divInfo.appendChild(h3);
          
        let h4= document.createElement("h4");
        h4.classList.add("title")
                h4.innerText=list[i].nameItem;
                divInfo.appendChild(h4);

                let descr=document.createElement("small");
              descr.innerText=list[i].description;
                 divInfo.appendChild(descr);

                 let valor =document.createElement("p");
        valor.innerText=(`R$: ${list[i].value.toFixed(2)}`);
           divInfo.appendChild(valor);

           let botao=document.createElement('button');
        botao.classList.add('card-button');
        botao.id=list[i].botao
       botao.innerText=list[i].addCart
       card.appendChild(botao);
        
    }
      
      
}
addCards(cervejas)


let botoes=document.querySelectorAll(".card-button");

let countCard=0;

let somas=0;
function addCArrinho(){
for(let i= 0 ;i<botoes.length;i++){
   let btn=botoes[i];


   btn.addEventListener('click',function(event){
let idElemento=event.target.id;
let id=parseInt(idElemento[3]);
let card=procuraCard(id);

let cria=createCard(card)

 let lista =document.querySelector(".espaco-car");

 let tituloVazio=document.querySelector("#titulo-vazio")
 tituloVazio.classList.add("hide")

 let addVazio=document.querySelector("#add-vazio");
 addVazio.classList.add('hide')
 lista.appendChild(cria)

     countCard++
   
  let cont=document.querySelector('#contador').innerText=(`${countCard}`);

 
  somas=somas+card.value

  let valorTotal=document.querySelector('#total').innerText=(`R$: ${somas.toFixed(2)}`)

let menuTotais=document.querySelector(".total");
console.log(menuTotais)
menuTotais.classList.remove('hide')

}
   )
}
}
addCArrinho()
function procuraCard(id){
    for(let i = 0; i<cervejas.length;i++){
        if(id==cervejas[i].id){
            return cervejas[i]
        }
    }
    return "erro"
}

function createCard(card){
    let li=document.createElement('li');
    let img=document.createElement("img");
    img.classList.add("imgCar")
    let h4= document.createElement('h4');
    
    let p= document.createElement('p');
    p.class="valorCard"
    let btn=document.createElement('button')

    let div=document.createElement('div')
    div.classList.add("divImg")

    let div2=document.createElement('div');
    div2.classList.add('div2')

    li.id='f_'+card.id;
    li.classList.add("liCar")
    img.src=card.img;
 
    h4.innerText=card.nameItem;
   h4.classList.add("titulo-carrinho")
    p.innerText=(`R$: ${card.value.toFixed(2)}`);
    btn.innerText="Remover"
    btn.id='car_'+card.id
    btn.classList.add("card-button")
    btn.classList.add("btnColor")

    btn.addEventListener("click",function(event){
        event.path[2].remove()
        countCard--
   
        let cont=document.querySelector('#contador').innerText=(`${countCard}`);

        somas=somas-card.value

        let valorTotal=document.querySelector('#total').innerText=(`R$: ${somas.toFixed(2)}`)
      
    })

    li.appendChild(div)
      div.appendChild(img)

      li.appendChild(div2)
    
    div2.appendChild(h4)
    
    
    div2.appendChild(p)
    
    div2.appendChild(btn)

    return li
}

// function soma(list){
//     for(let i = 0; i<list.length;i++){
//  somas+=products[i].valor
//     }
//     return somas
//  }

let btnTodas= document.querySelector("#btnTodas");
btnTodas.addEventListener('click',function(e){
let lager=document.querySelectorAll(".card").forEach((e)=>{
    if(e.childNodes[1].childNodes[0]){
        e.classList.remove("hide")
      
    }


})
})


let btnLager= document.querySelector("#btnLager");
btnLager.addEventListener('click',function(e){
let lager=document.querySelectorAll(".card").forEach((e)=>{
    if(e.childNodes[1].childNodes[0].innerText!="Lager"){
        e.classList.toggle("hide")
      
    }


})
})


let btnPilsen= document.querySelector("#btnPilsen");
btnPilsen.addEventListener('click',function(e){
let pilsen=document.querySelectorAll(".card").forEach((e)=>{
    if(e.childNodes[1].childNodes[0].innerText!="Pilsen"){
        e.classList.toggle("hide")
      
    }


})
})

 let btnIpa=document.querySelector("#btnIpa");
 btnIpa.addEventListener('click',function(e){

    let ipas=document.querySelectorAll(".card").forEach((e)=>{
        if(e.childNodes[1].childNodes[0].innerText!="Ipa"){
            e.classList.toggle("hide")
          
        }
  
    
    })
})

let input=document.querySelector('.pesquisa')

input.addEventListener('input',function(e){
    let pesquisa=document.querySelectorAll(".card").forEach((e)=>{
        if(e.childNodes[1].childNodes[1].innerText.includes(input.value)){
            e.classList.toggle("show")
          
        }
        else{  e.classList.toggle("hide")}
    
    
    })
    })
       
    
    