import React from 'react';
import { SectionWrapper } from '../hoc';
import Happy from './Happy';

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-full"> {/* Flex column on small screens, flex row on larger screens */}
      <div className="max-w-md w-full mx-auto p-6 rounded-lg shadow-md mb-8 sm:mb-0 sm:w-3/4 md:w-1/2 lg:w-2/5"> {/* Responsive width */}
        <h2 className="text-3xl text-center text-pink-600 font-bold mb-6 font-ComicNeue">Connect with Me</h2>
        <form>
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2 font-ComicNeue" htmlFor="name">
              Your Name
            </label>
            <input
              id="name"
              placeholder=""
              className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500 font-ComicNeue"
              type="text"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2 font-ComicNeue" htmlFor="email">
              Your Email
            </label>
            <input
              id="email"
              placeholder="ABC@gmail.com"
              className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500 font-ComicNeue"
              type="email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2 font-ComicNeue" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Type your message here..."
              className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500 font-ComicNeue"
            ></textarea>
          </div>
          <button type="submit" className="px-4 py-2 rounded-md bg-pink-600 text-white font-bold">
            Send Message
          </button>
        </form>
      </div>
      <div className="hidden sm:block "> {/* Show Happy component on medium and larger screens */}
        <Happy />
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "");
