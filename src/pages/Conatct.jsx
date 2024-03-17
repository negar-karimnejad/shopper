import { Link } from 'react-router-dom';

function Conatct() {
  return (
    <div className="container pt-10">
      <h1 className="mb-10 text-center text-3xl font-bold text-rose-500">
        Contact Us
      </h1>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-10 text-3xl">Get in Touch</h2>
            <p className="mb-4">
              Have a question, comment, or suggestion? We&apos;d love to hear
              from you! Feel free to reach out to us via the contact form below,
              and we&apos;ll get back to you as soon as possible.
            </p>
            <p className="mb-4">
              You can also contact us directly via email or phone:
            </p>
            <p className="mb-4">
              Email:{' '}
              <Link
                to="mailto:info@shopper.com"
                className="text-rose-500 hover:underline"
              >
                info@shopper.com
              </Link>
            </p>
            <p>
              Phone: <span className="text-rose-500">1-800-123-4567</span>
            </p>
          </div>
          <div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md border"
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="mb-2 block font-semibold text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="mb-2 block font-semibold text-gray-700"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="mb-2 block font-semibold text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  rows="5"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="focus:shadow-outline rounded bg-rose-500 px-4 py-2 font-bold text-white hover:bg-rose-600 focus:outline-none"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conatct;
