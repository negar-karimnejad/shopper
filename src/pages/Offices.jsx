function Offices() {
  return (
    <div className="container pt-10">
      <h1 className="mb-10 text-center text-3xl font-bold text-rose-500">
        Our Locations
      </h1>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-10 text-2xl">Headquarters</h2>
            <p className="mb-4">
              Our headquarters are located in the bustling city of New York.
              Here&apos;s where our team of fashion enthusiasts works tirelessly
              to bring you the latest trends in clothing and accessories.
            </p>
            <p className="mb-4">Address:</p>
            <address className="mb-4">
              123 Fashion Avenue, Suite 101
              <br />
              New York, NY 10001
              <br />
              United States
            </address>
            <p>
              Phone: <span className="text-rose-500">1-800-123-4567</span>
            </p>
          </div>
          <div>
            <h2 className="mb-10 text-2xl">Distribution Center</h2>
            <p className="mb-4">
              Our distribution center is strategically located in Los Angeles to
              ensure efficient shipping and handling of orders. From here, we
              dispatch your favorite clothing items to destinations worldwide.
            </p>
            <p className="mb-4">Address:</p>
            <address className="mb-4">
              456 Fashion Boulevard
              <br />
              Los Angeles, CA 90001
              <br />
              United States
            </address>
            <p>
              Phone: <span className="text-rose-500">1-800-987-6543</span>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <iframe
          className="border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387248.87357945755!2d-74.25987379454591!3d40.69767000525486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2suk!4v1647535623886!5m2!1sen!2suk"
          width="100%"
          height="300"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Offices;
