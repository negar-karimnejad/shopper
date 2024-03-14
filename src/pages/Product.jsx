import { useParams } from 'react-router-dom';
import Breadcrumb from '../components/product/Breadcrumb';
import DescriptionAndReviews from '../components/product/DescriptionAndReviews';
import ProductImages from '../components/product/ProductImages';
import ProductInfos from '../components/product/ProductInfos';
import RelatedProducts from '../components/product/RelatedProducts';

function Product() {
  const { id } = useParams();
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
