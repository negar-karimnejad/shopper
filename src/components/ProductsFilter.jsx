function ProductsFilter() {
  return (
    <div className="my-8 flex items-center justify-between">
      <p className="flex flex-col gap-x-2 sm:flex-row">
        <strong>Showing 1-12 </strong>
        <span className="text-slate-500">out of 54 products</span>
      </p>
      <select name="" id="" className="rounded-full border p-2 outline-none text-slate-700">
        <option value="">Sort by</option>
        <option value="">1</option>
        <option value="">1</option>
        <option value="">1</option>
      </select>
    </div>
  );
}

export default ProductsFilter;
