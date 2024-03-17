import { useProduct } from '../../context/ProductContext';

function ProductsFilter() {
  const { kidsProducts, menProducts, womenProducts } = useProduct();

  const pathname = document.location.pathname;
  console.log(pathname);
  return (
    <div className="my-8 flex items-center justify-between">
      <p className="flex flex-col gap-x-2 sm:flex-row">
        <strong>Showing 1-8</strong>
        <span className="text-slate-500">
          out of {pathname === '/kids' && kidsProducts?.length}
          {pathname === '/women' && womenProducts?.length}
          {pathname === '/men' && menProducts?.length} products
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
