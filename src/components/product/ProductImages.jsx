import { useProduct } from '../../context/ProductContext';

function ProductImages() {
  const { product } = useProduct();

  return (
    <div className="mx-auto flex flex-col-reverse gap-5 overflow-hidden lg:flex-row">
      <div className="hidden w-20 gap-4 sm:flex lg:flex-col">
        <img src={product.image} alt="product" />
        <img src={product.image} alt="product" />
        <img src={product.image} alt="product" />
        <img src={product.image} alt="product" />
      </div>
      <img src={product.image} alt="product" />
    </div>
  );
}

export default ProductImages;
