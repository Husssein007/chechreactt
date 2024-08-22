import product from '../product';

const Price = () => {
  return (
    <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
  );
};

export default Price;