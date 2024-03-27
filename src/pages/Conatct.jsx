import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

function Conatct() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (!username || !email || !message) return;
    const uppercaseUsername = username.toUpperCase();

    toast.success(
      `Dear ${uppercaseUsername}, your message has been sent successfully `,
    );
    setUsername('');
    setEmail('');
    setMessage('');
  };

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
              onSubmit={submitHandler}
              className="mb-4 rounded border bg-white px-8 pb-8 pt-6 shadow-md"
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="mb-2 block font-semibold text-gray-700"
                >
                  Your Name
                </label>
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  placeholder="Enter your name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
                  required
                  type="email"
                  id="email"
                  name="email"
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  required
                  id="message"
                  name="message"
                  className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                  rows="5"
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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
