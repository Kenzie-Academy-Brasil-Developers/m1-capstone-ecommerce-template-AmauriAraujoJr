let body=document.querySelector('body');
 let vitrine=document.querySelector(".cards")

function addCards(list){


    for(let i = 0 ; i< list .length;i++){
      


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
   
  let cont=document.querySelector('#contador')
  cont.innerText=(`${countCard}`);

 
  somas=somas+card.value

  let valorTotal=document.querySelector('#total')
  valorTotal.innerText=(`R$: ${somas.toFixed(2)}`)

let menuTotais=document.querySelector(".total");

  
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
    p.classList.add("p-carrinho")
    btn.innerText="Remover"
    btn.id='car_'+card.id
    btn.classList.add("card-button")
  
    btn.addEventListener("click",function(event){
    li.remove()
        countCard--
   
        let cont=document.querySelector('#contador')
        cont.innerText=(`${countCard}`);

        somas=somas-card.value

        console.log(somas==0)

        let menuTotais=document.querySelector(".total")
        let addVazio=document.querySelector("#add-vazio");
        let tituloVazio=document.querySelector("#titulo-vazio")

        if(somas==0){
            menuTotais.classList.add('hide')
      
        }

        if(somas==0){
           
 addVazio.classList.remove('hide')
        }

        if(somas==0){
            
            tituloVazio.classList.remove("hide")
        }

        let valorTotal=document.querySelector('#total')
        valorTotal.innerText=(`R$: ${somas.toFixed(2)}`)
     
      
    })

    li.appendChild(div)
      div.appendChild(img)

      li.appendChild(div2)
    
    div2.appendChild(h4)
    
    
    div2.appendChild(p)
    
    div2.appendChild(btn)

    return li
}


let btnTodas= document.querySelector("#btnTodas");
btnTodas.addEventListener('click',function(e){
let todas=document.querySelectorAll(".card")
todas.forEach((e)=>{
    let cervTd=e.childNodes[1].childNodes[0]
    if(cervTd){
        e.classList.remove("hide")
      
    }


})
})


let btnLager= document.querySelector("#btnLager");
btnLager.addEventListener('click',function(e){
let lager=document.querySelectorAll(".card")
lager.forEach((e)=>{
    let cervLager=e.childNodes[1].childNodes[0].innerText
    if(cervLager!="Lager"){
        e.classList.toggle("hide")
      
    }


})
})


let btnPilsen= document.querySelector("#btnPilsen");

btnPilsen.addEventListener('click',function(e){
let pilsen=document.querySelectorAll(".card")
pilsen.forEach((e)=>{
    let cervPilsen=e.childNodes[1].childNodes[0].innerText
    if(cervPilsen!="Pilsen"){
        e.classList.toggle("hide")
      
    }


})
})

 let btnIpa=document.querySelector("#btnIpa");
 btnIpa.addEventListener('click',function(e){

    let ipas=document.querySelectorAll(".card")
    ipas.forEach((e)=>{
        let  cervIpa=e.childNodes[1].childNodes[0].innerText;
        if(cervIpa!="Ipa"){
            e.classList.toggle("hide")
          
        }
  
    
    })
})

let input=document.querySelector('.pesquisa')

input.addEventListener('input',function(e){
    let pesquisa=document.querySelectorAll(".card")
    pesquisa.forEach((e)=>{
        let titleCard=e.childNodes[1].childNodes[1].innerText.toLowerCase()
        
        if(titleCard.includes(input.value.toLowerCase())){
            e.classList.remove("hide")
            e.classList.add("show")
           
        }
        else{ 
            e.classList.remove("show")
             e.classList.add("hide")
            
        }
    
    
    })
    })
