import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function ProductsFilter({ products }) {
  const { query } = useParams();
  const navigate = useNavigate();

  const [sortBy, setSortBy] = useState(query || '');

  useEffect(() => {
    if (sortBy) navigate(`/products/${sortBy}`);
  }, [navigate, sortBy]);

  return (
    <div className="my-8 flex items-center justify-between">
      <p className="flex flex-col gap-x-2 sm:flex-row">
        <strong>Showing 1-{products?.length}</strong>
        <span className="text-slate-500">
          out of {products?.length} products
        </span>
      </p>
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="rounded-full border p-2 text-slate-700 outline-none"
      >
        <option value="">Sort by</option>
        <option value="cheapest">Cheapest</option>
        <option value="expensive">The most expensive</option>
        <option value="newest">The newest</option>
        <option value="bestSelling">Best Selling</option>
      </select>
    </div>
  );
}

export default ProductsFilter;
