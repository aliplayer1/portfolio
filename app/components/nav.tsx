'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import Modal from './Modal';

const navItems = {
  '/': {
    name: 'Home',
  },
  '/projects': {
    name: "Projects"
  },
  '/blog': {
    name: 'Blog',
  }
};

export function Navbar() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {/* Navigation Links */}
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              );
            })}

            {/* Vertical Divider */}
            <div className="border-l border-gray-300 dark:border-gray-600 h-8 my-auto mx-4"></div>

            {/* Contact me button */}
            <button
              onClick={handleOpenModal}
              className="transition-all bg-gray-800 text-white text-sm hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-500 py-1 px-2 ml-4 rounded-md shadow"
            >
              Contact me
            </button>

            {/* Download Resume button */}
            <a
              href="/home/alia/projects/portfolio/files/resume.pdf"
              download
              className="transition-all bg-gray-800 text-white text-sm hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-500 py-2.5 px-2 ml-4 rounded-md shadow"
            >
              Resume
            </a>
          </div>
        </nav>
      </div>

      {/* Modal for Contact Information */}
      {showModal && <Modal onClose={handleCloseModal} />}
    </aside>
  );
}
