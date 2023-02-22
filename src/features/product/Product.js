import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "./product.slice"

function Products() {
    const dispatch = useDispatch;
    const products = useSelector(store => store.products)
    return ( 
        <div>

        </div>
     );
}

export default Products;