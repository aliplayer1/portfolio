function GitHubIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 .5C5.93.5.5 5.93.5 12c0 5.1 3.29 9.41 7.86 10.94.58.1.79-.25.79-.56v-1.97c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.69-1.3-1.69-1.07-.74.08-.72.08-.72 1.18.08 1.8 1.21 1.8 1.21 1.05 1.8 2.75 1.28 3.42.98.1-.77.41-1.28.75-1.58-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.28 1.2-3.09-.12-.29-.52-1.47.12-3.05 0 0 .97-.31 3.18 1.18a10.97 10.97 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.64 1.58.24 2.76.12 3.05.75.81 1.2 1.83 1.2 3.09 0 4.43-2.69 5.4-5.25 5.68.42.36.8 1.09.8 2.21v3.28c0 .32.21.68.8.56A11.52 11.52 0 0 0 23.5 12c0-6.07-5.43-11.5-11.5-11.5z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="14"
      height="18"
      viewBox="0 3.1 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.32 2.33C3.32 3.26213 2.55213 4.03 1.62 4.03C0.687872 4.03 0 3.26213 0 2.33C0 1.39787 0.687872 0.71 1.62 0.71C2.55213 0.71 3.32 1.39787 3.32 2.33ZM0.19 15H3.05V5.83H0.19V15ZM5.19 5.83H7.73V6.87H7.81C8.32 6.07 9.47 5.32 10.77 5.32C13.43 5.32 14 6.9 14 9.33V15H11.14V9.95C11.14 8.93 11.13 7.27 9.66 7.27C8.19 7.27 7.73 8.57 7.73 9.87V15H5.19V5.83Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/aliasadpoor"
          >
            <LinkedInIcon />
            <p className="ml-2 h-7">LinkedIn</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.github.com/aliplayer1"
          >
            <GitHubIcon />
            <p className="ml-2 h-7">GitHub</p>
          </a>
        </li>
      </ul>
      <p className="mt-8 text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} MIT Licensed; Created By Ali Asadpoor, Using Vercel
      </p>
    </footer>
  )
}
