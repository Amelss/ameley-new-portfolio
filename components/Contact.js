import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://xticfiaas5.execute-api.eu-west-2.amazonaws.com/deployment/submitForm",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ body: JSON.stringify(formData) }),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      setModalOpen(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred while submitting the form");
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 ${
          modalOpen ? "block" : "hidden"
        }`}
      ></div>
      <div
        className={`fixed inset-0 flex justify-center items-center ${
          modalOpen ? "block" : "hidden"
        }`}
      >
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-xl font-bold mb-4 text-center">Thank you for your message!</p>
          <div className="text-center">
            <button
              onClick={closeModal}
              className="py-2 px-4 bg-slateBlue text-white rounded-lg focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      </div>
      <div
        id="contact"
        className="px-5 rounded-lg xl:w-[800px] xl:mx-auto py-14"
      >
        <section className=" bg-white rounded-lg shadow-lg">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center bg-gradient-to-r from-black to-slateBlue text-transparent bg-clip-text ">
              Get In Touch
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
              Want to connect? Please drop me a message below!
            </p>
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2"
                  placeholder="Sarah Dore"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 "
                  placeholder="hello@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Leave a comment..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-slateBlue sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300  "
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
