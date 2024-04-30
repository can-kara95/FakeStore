'use client'
import  Link  from 'next/link';
import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function ProdList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  // if (product.description.substring(0, 135) ){

  // }

  //truncate

  return (
    <main className={styles.main}>
      <div>
        <h1 className={styles.headline}>Can's Fake Bazar</h1>
        <div className={styles.products}>
          <ul className={styles.gridContainer}>
            {products.map((product, index) => (
              <li className={`${styles.gridItem} ${styles.card}`} key={index}>
                <Link href={`/products/${product.id}`}>
                  <div className={styles.prod}>
                    <h5 className={styles.headline}>{product.title}</h5>
                    <img className={styles.image} src={product.image} alt={product.title} />
                    <p className={styles.prodDesc}>{product.description.substring(0, 135).concat("...")}</p>
                  </div>
                  </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
