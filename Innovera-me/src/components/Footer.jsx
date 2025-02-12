import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom"; // Assuming you're using React Router

const Footer = () => {
  const [tncOpen, setTncOpen] = useState(false);

  return (
    <footer className="bg-neutral-700 p-4">
      <div className="flex flex-col sm:flex-row sm:justify-around sm:items-center">
        <section>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-6xl text-neutral-300">INNOV-ERA</h1>
            <h3 className="text-5xl font-bold text-neutral-300">
              Techathon KKWIEER
            </h3>
          </div>

          <div className="text-neutral-400 mt-4">
            <p>KK Wagh Institute of Engineering Education & Research</p>
            <p>Hirabai Hiradas VidyaNagari,</p>
            <p>Amrutdham, Panchavati,</p>
            <p>Nashik, Maharashtra 422003,</p>
            <p>India</p>
          </div>
        </section>

        <section className="flex flex-col sm:flex-row">
          <div className="flex flex-col gap-3 sm:m-4 my-4">
            <h1 className="text-2xl text-neutral-300 font-semibold">
              Quick Links
            </h1>

            <p className="text-neutral-400">Home</p>
            <p className="text-neutral-400">Departments</p>
            <p className="text-neutral-400">Admissions</p>
          </div>
          <div className="flex flex-col gap-3 sm:m-4 my-4">
            <h1 className="text-2xl text-neutral-300 font-semibold">
              Resources
            </h1>

            <p className="text-neutral-400">Library</p>
            <p className="text-neutral-400">Research</p>
            <p className="text-neutral-400">Alumni</p>
          </div>
          <div className="flex flex-col gap-3 sm:m-4 my-4">
            <h1 className="text-2xl text-neutral-300 font-semibold">Support</h1>

            <p className="text-neutral-400">FAQs</p>
            <p className="text-neutral-400">Feedback</p>
            <p className="text-neutral-400">Help Center</p>
          </div>
          <div className="flex flex-col gap-3 sm:m-4 my-4">
            <h1 className="text-2xl text-neutral-300 font-semibold">Legal</h1>

            <p className="text-neutral-400" onClick={() => setTncOpen(true)}>
              Terms & Conditions
            </p>
            <p className="text-neutral-400">Privacy & Policy</p>
            <p className="text-neutral-400">Disclaimer</p>
          </div>
        </section>
      </div>

      <div className="flex gap-4 text-neutral-400 my-4 sm:mx-12">
        <FaYoutube size={36} />
        <FaLinkedin size={36} />
        <FaInstagram size={36} />
        <FaFacebook size={36} />
      </div>

      {tncOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-8 rounded-lg shadow-2xl max-w-3xl w-full mx-4 md:mx-auto relative">
            <button
              onClick={() => setTncOpen(false)}
              className="absolute top-4 right-4 text-gray-300 hover:text-white text-2xl">
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-purple-400">
              Terms and Conditions
            </h2>
            <p className="text-gray-300">
              Here are the terms and conditions for using this website. Please
              read them carefully before using any features or services
              provided.
            </p>
            <ul className="list-disc ml-6 mt-4 text-gray-400">
              <li>All information is for educational purposes only.</li>
              <li>Content must not be used for any illegal activities.</li>
              <li>Respect intellectual property and copyright rules.</li>
              <li>For any concerns, contact our support team.</li>
            </ul>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
