import { useParams } from 'react-router-dom';
import Breadcrumb from '../components/product/Breadcrumb';
import DescriptionAndReviews from '../components/product/DescriptionAndReviews';
import ProductImages from '../components/product/ProductImages';
import ProductInfos from '../components/product/ProductInfos';
import RelatedProducts from '../components/product/RelatedProducts';
import { useProduct } from '../context/ProductContext';
import { useEffect } from 'react';
import Spinner from '../components/Spinner';

function Product() {
  const { getProduct, product } = useProduct();
  const { id } = useParams();

  useEffect(() => {
    getProduct(id);
  }, [getProduct, id]);

  if (!product) return <Spinner />;

  return (
    <div className="container pt-10">
      <Breadcrumb
        links={[
          { id: 1, title: 'product', to: '/product' },
          { id: 2, title: id, to: `/product/${id}` },
        ]}
      />
      <div className="mt-10 grid items-start justify-between gap-10 md:grid-cols-2">
        <ProductImages />
        <ProductInfos />
      </div>
      <DescriptionAndReviews />
      <RelatedProducts />
    </div>
  );
}

export default Product;
