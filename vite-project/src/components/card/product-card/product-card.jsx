//aqui e a montagem da estrutura

import "./productCard.css"

export const ProductCard = ({
    name,
    price,
    sizes,
    imgUrl,
	inputName1,
	inputName2,
	inputName3
	
})=>{

    

    return (
		<li>
			<div className="card-list"> 
				
                <div className="cards">
					
                    <div className="card-img">
					  	<img src={imgUrl} alt="round_neck" />
						<p className="nome-marca">{name}</p>
					</div>
					
						<div className="card-size-color">
								<h3>NOME & NUMERO</h3>
						</div>		
							<div className="recal-forget">
					
								<label> 
									{inputName1}<input type= 'checkbox'/>
								</label>
							
								<label>
									{inputName2}<input type= 'checkbox'/>
								</label>
							
								<label>
									{inputName3}<input type= 'checkbox'/>
								</label>  
							</div>                   	                                
           					
								<div className="size_wrap">
									{sizes}
								</div>
						                      				
									<div className="price">
										<p>{price}</p>
									</div>
					</div>
			</div>
		</li>
	);
}
