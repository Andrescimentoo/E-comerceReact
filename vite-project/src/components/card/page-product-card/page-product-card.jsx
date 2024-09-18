//aqui eh vamos dizer o "USE" do nosso component
import { ProductList } from "../product-list/produc-list.jsx";

export const PageProductCard = ()=>{
    return(
        <main className="page-cards">
            <section className="product-cards">
               <ProductList/>
            </section>
        </main>
    )
}
