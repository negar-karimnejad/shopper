function ProductSize() {
  return (
    <>
      <p className="mb-4 mt-5 text-xl">Slect Size</p>
      <div className="flex items-center gap-5">
        <div className="flex h-12 w-12 cursor-pointer items-center justify-center border border-slate-500/50 transition-all hover:bg-rose-600 hover:text-white">
          S
        </div>
        <div className="flex h-12 w-12 cursor-pointer items-center justify-center border border-slate-500/50 transition-all hover:bg-rose-600 hover:text-white">
          M
        </div>
        <div className="flex h-12 w-12 cursor-pointer items-center justify-center border border-slate-500/50 transition-all hover:bg-rose-600 hover:text-white">
          L
        </div>
        <div className="flex h-12 w-12 cursor-pointer items-center justify-center border border-slate-500/50 transition-all hover:bg-rose-600 hover:text-white">
          Xl
        </div>
        <div className="flex h-12 w-12 cursor-pointer items-center justify-center border border-slate-500/50 transition-all hover:bg-rose-600 hover:text-white">
          XXL
        </div>
      </div>
    </>
  );
}

export default ProductSize;
