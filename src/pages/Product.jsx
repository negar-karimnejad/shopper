import Breadcrumb from '../components/product/Breadcrumb';
import ProductImages from '../components/product/ProductImages';
import ProductInfos from '../components/product/ProductInfos';
import RelatedProducts from '../components/product/RelatedProducts';

function Product() {
  return (
    <div className="container pt-10">
      <Breadcrumb />

      <div className="mt-10 grid grid-cols-2 items-start justify-between">
        <ProductImages />
        <ProductInfos />
      </div>

      <div className="mt-10">
        <div className="flex">
          <div className="cursor-pointer border p-3">Description</div>
          <div className="cursor-pointer border p-3">Reviews (122)</div>
        </div>
        <div className="flex flex-col gap-5 border p-8 text-slate-500 dark:text-slate-400">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad nam
            tempora iusto, velit laboriosam ipsum quasi dicta illo, recusandae
            eos aperiam suscipit! Itaque voluptate iste accusantium, culpa
            aliquam officiis optio.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad nam
            tempora iusto, velit laboriosam ipsum quasi dicta illo, recusandae
            eos aperiam suscipit! Itaque voluptate iste accusantium, culpa
            aliquam officiis optio.
          </p>
        </div>
      </div>
      <RelatedProducts />
    </div>
  );
}

export default Product;
