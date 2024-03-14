import Button from '../components/Button';
import Input from '../components/Input';

function Cart() {
  return (
    <div className="container pt-10">
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b bg-white dark:bg-slate-900">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left font-medium text-gray-900 dark:text-slate-100"
                    >
                      Product
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left font-medium text-gray-900 dark:text-slate-100"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-6 py-4 text-left font-medium text-gray-900 dark:text-slate-100"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="whitespace-nowrap px-6 py-4 text-left font-medium text-gray-900 dark:text-slate-100"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left font-medium text-gray-900 dark:text-slate-100"
                    >
                      Total
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left font-medium text-gray-900 dark:text-slate-100"
                    >
                      Remove
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-white dark:bg-slate-900">
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                      <img src="images/cart_product_icon.png" alt="" />
                    </td>
                    <td className="px-6 py-4 text-sm font-light text-gray-900 dark:text-slate-100">
                      Boys Orange Colourblocked Hooded Sweatshirt
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900 dark:text-slate-100">
                      $120.5
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900 dark:text-slate-100">
                      <input
                      defaultValue={1}
                        type="text"
                        className="h-8 w-8 border text-center font-semibold outline-none"
                      />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900 dark:text-slate-100">
                      $120.5
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900 dark:text-slate-100">
                      <span className="cursor-pointer text-2xl font-semibold transition-all hover:text-rose-500">
                        &times;
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 flex w-full justify-between gap-x-52">
        <div className="flex w-full flex-1 flex-col ">
          <h2 className="mb-10 text-2xl font-bold">Cart Totals</h2>
          <div className="flex justify-between border-b py-4 text-slate-500 dark:text-slate-400">
            <p>Subtotal</p>
            <p>$82</p>
          </div>
          <div className="flex justify-between border-b py-4 text-slate-500 dark:text-slate-400">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <div className="mb-8 flex justify-between py-4 text-lg font-bold">
            <p>Total</p>
            <p>$82</p>
          </div>
          <div className="w-fit">
            <Button variant="secondaryLessRound">PROCEED TO CHECKOUT</Button>
          </div>
        </div>
        <div className="flex-1">
          <p className="text-slate-500">
            If you have a promo code, Enter it here.
          </p>
          <form className="mt-4 flex">
            <Input type="text" placeholder="promo code" />
            <div>
              <Button variant="blackLessRound">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cart;
