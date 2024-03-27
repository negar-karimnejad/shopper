function ProductsList({ children }) {
  return (
    <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {children}
    </div>
  );
}

export default ProductsList;
