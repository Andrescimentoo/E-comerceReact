//aqui eh a validacao

import { ProductCard } from "../product-card/product-card.jsx";


    const cardItens = [
    {
        name:"Camisa Barcelona 20/21",
        price:"150,00$",
        sizes:["P,M,G,GG"],
        imgUrl:"../src/assets/Barcelona24-25.webp",
        inputName1:"Messi 10 ",
        inputName2:"Griezmann 7 ",
        inputName3:"Jordi ALba 18 "
    },
    
    { 
        name:"Camisa Barcelona 18/19",
        price:"250,00",
        sizes:["P,M,G,GG"],
        imgUrl:"../src/assets/BarcelonaA23-24.webp",  
        inputName1:"Coutinho 7 ",
        inputName2:" Messi 10 ",
        inputName3:"Jordi ALba 18 "
    },
    { 
        name:"Camisa Barcelona B 23/24",
        price:"250,00",
        sizes:["P,M,G,GG"],
        imgUrl:"../src/assets/BarcelonaA23-24.webp",          
        inputName:"Lewandowisk 9 ",
        inputName2:"Lamine Yamal 27 ",
        inputName3:"Rafinha 11 "
        },
    
    
];
 export const ProductList = ()=>{
    
    
    return(
        <>
           <h1>Lista de Produtos</h1>
           <ul className="product-list">
              {cardItens.map((item,index)=>(
                   <ProductCard
                      key={index}
                      name={item.name}
                      price={item.price}
                      sizes={item.sizes}
                      imgUrl={item.imgUrl}
                      inputName1={item.inputName1}
                      inputName2={item.inputName2}
                      inputName3={item.inputName3}
                      
                   />
              )
            
            )}  
           </ul>
       </> 
    )
 }

    