import { FaCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-t-gray-700 text-gray-200 py-4 text-center text-sm sm:text-base">
      <p>
        <FaCopyright className="inline-block mr-1" /> 
        2025 Thomas — Déployé avec{" "}
        <a
          href="https://www.netlify.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline font-semibold "
        >
          Netlify
        </a>
      </p>
    </footer>
  );
}
