import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left px-6 mt-8">
        {/* Work in Progress Section */}
        <div className="Box">
          <h3 className="text-lg text-white font-semibold mb-4">WORK IN PROGRESS :</h3>
          <p className="text-sm text-gray-400">
            This site is under active development. Check back for updates!
          </p>
        </div>

        {/* Pages Section */}
        <div className="Box">
          <h3 className="text-lg text-white font-semibold mb-4">PAGES :</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/about"
                className="text-sm text-gray-400 hover:text-white underline"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className="text-sm text-gray-400 hover:text-white underline"
              >
                Projects
              </a>
            </li>
          </ul>
        </div>

        {/* Contacts Section */}
        <div className="Box">
          <h3 className="text-lg text-white font-semibold mb-4">CONTACTS :</h3>
          <ul className="space-y-4">
            <li>
              <a
                href="mailto:aniketwakalkar23@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center text-sm text-gray-400 hover:text-white underline cursor-pointer"
              >
                <img
                  className="bg-white w-8 h-8 border border-white p-1 rounded-full mr-3"
                  src="https://img.icons8.com/?size=100&id=tnnUFgHrPmR0&format=png&color=000000"
                  alt="Gmail Icon"
                />
                aniketwakalkar23@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/aniket-wakalkar-b8a418160/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center text-sm text-gray-400 hover:text-white underline"
              >
                <img
                  className="bg-white w-8 h-8 border border-white p-1 rounded-full mr-3"
                  src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
                  alt="LinkedIn Icon"
                />
                linkedin.com/in/aniket-wakalkar
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-400">
        © 2024 Aniket Wakalkar. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
