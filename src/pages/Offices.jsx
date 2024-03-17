function Offices() {
  return (
    <div className="container pt-10">
      <header className="bg-rose-500 py-4 text-center text-white">
        <h1 className="text-3xl font-bold">Our Locations</h1>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-xl font-semibold">Headquarters</h2>
            <p className="mb-4">
              Our headquarters are located in the bustling city of New York.
              Here&apos;s where our team of fashion enthusiasts works tirelessly
              to bring you the latest trends in clothing and accessories.
            </p>
            <p className="mb-4">Address:</p>
            <address className="mb-4">123 Fashion Avenue, Suite 101<br>New York, NY 10001<br>United States</address>
            <p>
              Phone: <span className="text-rose-500">1-800-123-4567</span>
            </p>
          </div>
          <div>
            <h2 className="mb-4 text-xl font-semibold">Distribution Center</h2>
            <p className="mb-4">
              Our distribution center is strategically located in Los Angeles to
              ensure efficient shipping and handling of orders. From here, we
              dispatch your favorite clothing items to destinations worldwide.
            </p>
            <p className="mb-4">Address:</p>
            {/* <address className="mb-4">456 Fashion Boulevard<br>Los Angeles, CA 90001<br>United States</address> */}
            <p>
              Phone: <span className="text-rose-500">1-800-987-6543</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offices;
