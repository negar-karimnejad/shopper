import { useProduct } from '../../context/ProductContext';

function DescriptionAndReviews() {
  const { product } = useProduct();

  return (
    <div className="mt-10">
      <div className="flex">
        <div className="cursor-pointer border p-3">Description</div>
        {/* <div className="cursor-pointer border p-3">Reviews (122)</div> */}
      </div>
      <div className="flex flex-col gap-5 border p-8 text-slate-500 dark:text-slate-400">
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default DescriptionAndReviews;
