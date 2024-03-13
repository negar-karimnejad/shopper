function ProductSize() {
  return (
    <>
      <p className="mb-4 mt-5 text-xl">Slect Size</p>
      <div className="flex items-center gap-8">
        <div className="flex h-12 w-12 items-center justify-center border border-slate-500/50">
          S
        </div>
        <div className="flex h-12 w-12 items-center justify-center border border-slate-500/50">
          M
        </div>
        <div className="flex h-12 w-12 items-center justify-center border border-slate-500/50">
          L
        </div>
        <div className="flex h-12 w-12 items-center justify-center border border-slate-500/50">
          Xl
        </div>
        <div className="flex h-12 w-12 items-center justify-center border border-slate-500/50">
          XXL
        </div>
      </div>
    </>
  );
}

export default ProductSize;
