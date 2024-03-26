import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import Breadcrumb from '../components/product/Breadcrumb';
import DescriptionAndReviews from '../components/product/DescriptionAndReviews';
import ProductImages from '../components/product/ProductImages';
import ProductInfos from '../components/product/ProductInfos';
import RelatedProducts from '../components/product/RelatedProducts';
import { useProduct } from '../context/ProductContext';

function Product() {
  const { getProduct, product, dispatch } = useProduct();
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      const fetchedProduct = await getProduct(id);
      dispatch({ type: 'get_Product', payload: fetchedProduct });
    };

    fetchData();
  }, [getProduct, id, dispatch]);

  if (!product) return <Spinner title="Loading..." />;

  return (
    <div className="container pt-10">
      <Breadcrumb
        links={[
          { id: 1, title: 'Shop', to: `/${product.category}` },
          { id: 2, title: product.title, to: `/product/${product.title}` },
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
