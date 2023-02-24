import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllProducts } from "./product.slice";

import styles from "./Product.module.css";

export function Products() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product.data);
  const isLoading = useSelector((state) => state.product.isLoading);
  const error = useSelector((state) => state.product.error);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  console.log("Fetch from redux store", data);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Products List</h1>
      </div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        data.map((product) => (
          <div className={styles.background} key={product.id}>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
          </div>
        ))
      )}
    </div>
  );
}
