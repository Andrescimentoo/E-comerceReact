

export const ProductCard = ({
    name,
    price,
    colors,
    sizes,
    imgUrl,
})=>{

    

    return (
		<li>
			<div className="lista de produtos"> 
				
                <div className="primeiro-item">
					
                    <div className="img">
					  	<img src={imgUrl} alt="round_neck" />
						<p className="nome-marca">{name}</p>
					</div>
					
                    <div className="size_color">
						<div className="title">SIZE & COLOR</div>
						<div className="size_wrap">
							{sizes}
							
							{ <ul>
								<li>
									<span>36</span>
								</li>
								<li>
									<span>38</span>
								</li>
								<li>
									<span>40</span>
								</li>
								<li>
									<span>42</span>
								</li>
							</ul> }
						</div>
						
                        <div className="color_wrap">
							<ul>
								<li
									data-color={colors}
									data-src="https://i.imgur.com/a31ZhsD.png"
								></li>
								<li
									className="active"
									data-color={colors}
									data-src="https://i.imgur.com/vuTSHe3.png"
								></li>
								<li
									data-color={colors}
									data-src="https://i.imgur.com/TT6hsaQ.png"
								></li>
							</ul>
						</div>
					</div>
					
                    <div className="price">
						<p>{price}</p>
					</div>
				</div>
			</div>

			
		</li>
	);
}
