import React from 'react';
import { LinkedInIcon, GitHubIcon, EmailIcon, PhoneIcon } from './Icons'; // Assuming you have these icon components

type ModalProps = {
  onClose: () => void;
};

export default function Modal({ onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg w-full max-w-sm text-center relative">
        <span
          className="text-2xl font-bold cursor-pointer text-neutral-800 dark:text-neutral-200 absolute top-2 right-3"
          onClick={onClose}
        >
          &times;
        </span>
        <h2 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-6">Contact Information</h2>

        {/* Email */}
        <div className="flex items-center justify-center mb-4">
          <EmailIcon className="w-6 h-6 mr-2 text-neutral-700 dark:text-neutral-300" />
          <p className="text-neutral-700 dark:text-neutral-300">ali.asadpoor@torontomu.ca</p>
        </div>

        {/* Phone */}
        <div className="flex items-center justify-center mb-4">
          <PhoneIcon className="w-6 h-6 mr-2 text-neutral-700 dark:text-neutral-300" />
          <p className="text-neutral-700 dark:text-neutral-300">+1 647-450-3559</p>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center justify-center mb-4">
          <LinkedInIcon className="w-6 h-6 mr-2 text-neutral-700 dark:text-neutral-300" />
          <a
            href="https://www.linkedin.com/in/aliasadpoor"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300"
          >
            LinkedIn Profile
          </a>
        </div>

        {/* GitHub */}
        <div className="flex items-center justify-center">
          <GitHubIcon className="w-6 h-6 mr-2 text-neutral-700 dark:text-neutral-300" />
          <a
            href="https://github.com/aliplayer1"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
}
