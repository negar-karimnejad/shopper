import CartItem from './CartItem';

const heads = ['Product', 'Title', 'Price', 'Quantity', 'Total', 'Remove'];

function CartItems() {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto md:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="border-b bg-white dark:bg-slate-900">
                <tr>
                  {heads.map((head, index) => (
                    <th
                      key={index}
                      scope="col"
                      className="whitespace-nowrap px-6 py-4 text-left font-medium text-gray-900 dark:text-slate-100"
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white dark:bg-slate-900">
                  <CartItem />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;