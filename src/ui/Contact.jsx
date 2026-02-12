
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import Container from "./Container";

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_kmqsebh", // 🔹 Replace with your EmailJS Service ID
        "template_mgo8xwr", // 🔹 Replace with your Template ID
        formRef.current,
        "fAtaXmWwW6AsA7STh"   // 🔹 Replace with your Public Key
      )
      .then(
        (result) => {
          console.log("✅ Message sent:", result.text);
          toast.success("Message sent successfully!");
          e.target.reset();
          setLoading(false);
        },
        (error) => {
          console.error("❌ Error:", error.text);
          toast.error("Failed to send message. Try again!");
          setLoading(false);
        }
      );
  };

  return (
    <Container
      id="contact"
      className="py-16 lg:py-28 flex flex-col items-center gap-6"
    >
      {/* Toast Container */}
      <Toaster position="bottom-right"  reverseOrder={false} />

      <p className="text-designColor text-lg font-semibold tracking-wide">
        05. What's next?
      </p>
      <h1 className="text-4xl md:text-5xl font-bold text-center text-white">
        Get In Touch
      </h1>
      <p className="max-w-2xl text-center text-darkText leading-relaxed">
        Feel free to reach out if you have a question or just want to say hello.
        I’ll get back to you as soon as I can!
      </p>

      {/* Contact Form */}
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="w-full max-w-xl mt-8 space-y-5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-gray-200 focus:outline-none focus:border-designColor"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-gray-200 focus:outline-none focus:border-designColor"
          />
        </div>

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-gray-200 focus:outline-none focus:border-designColor"
        />

        <textarea
          rows="3"
          name="message"
          placeholder="Your Message"
          required
          className="w-full px-4 py-3 bg-transparent border border-gray-700 rounded-md text-gray-200 focus:outline-none focus:border-designColor resize-none"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 border border-designColor rounded-md font-semibold tracking-wide flex justify-center items-center gap-2
            ${
              loading
                ? "bg-gray-800 text-gray-400 cursor-not-allowed"
                : "text-designColor hover:bg-designColor hover:text-white duration-200"
            }`}
        >
          {loading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-designColor"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>

      <a
        href="mailto:sarowar2287@gmail.com"
        className="mt-6 text-designColor underline text-sm hover:text-white"
      >
        Or send me an email directly
      </a>
    </Container>
  );
}

