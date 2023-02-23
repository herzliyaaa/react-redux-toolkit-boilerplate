import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts, fetchAllProducts } from "./product.slice";
import styles from "./Product.module.css";

export function Products() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Products List</h1>
        </div>
        <div className={styles.background}>
          {data.map((product) => (
            <div key={product.id}>
              <h1>{product.name}</h1>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
