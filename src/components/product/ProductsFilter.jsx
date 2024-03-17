import { useParams } from 'react-router-dom';
import { useProduct } from '../../context/ProductContext';

function ProductsFilter() {
  const { menProducts } = useProduct();
  const params = useParams();
  console.log(params);
  return (
    <div className="my-8 flex items-center justify-between">
      <p className="flex flex-col gap-x-2 sm:flex-row">
        <strong>Showing 1-12 </strong>
        <span className="text-slate-500">
          out of {menProducts?.length} products
        </span>
      </p>
      <select
        name=""
        id=""
        className="rounded-full border p-2 text-slate-700 outline-none"
      >
        <option value="">Sort by</option>
        <option value="">1</option>
        <option value="">1</option>
        <option value="">1</option>
      </select>
    </div>
  );
}

export default ProductsFilter;
