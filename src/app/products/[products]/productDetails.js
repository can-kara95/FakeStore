import { useParams } from 'react-router-dom';

export default function ProductDetails({ products }) {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h6>{product.category}</h6>
      <h1>{product.title}</h1>
      <h2>${product.price}</h2>
      <img src={product.image} alt={product.title} />
      <h3>Rating: {product.rating.rate} ({product.rating.count} reviews)</h3>
      <h4>Description:</h4>
      <p>{product.description}</p>
    </div>
  );
}
