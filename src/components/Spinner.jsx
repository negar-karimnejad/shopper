function Loader() {
  return (
    <div className="flex h-96 w-full flex-col items-center justify-center gap-5 text-center">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-b-8 border-t-8 border-gray-200"></div>
        <div className="absolute left-0 top-0 h-24 w-24 animate-spin rounded-full border-b-8 border-t-8 border-rose-500"></div>
      </div>
      <p className="font-bold text-slate-500">Loading...</p>
    </div>
  );
}

export default Loader;
