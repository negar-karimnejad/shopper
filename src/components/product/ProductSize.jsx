const sizes = ['S', 'M', 'L', 'Xl', 'XXL'];

function ProductSize() {
  return (
    <>
      <p className="mb-4 mt-5 text-xl">Slect Size</p>
      <div className="flex items-center gap-5">
        {sizes.map((size) => (
          <div
            key={size}
            className="flex h-12 w-12 cursor-pointer items-center justify-center border border-slate-500/50 transition-all hover:bg-rose-600 hover:text-white"
          >
            {size}
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductSize;
