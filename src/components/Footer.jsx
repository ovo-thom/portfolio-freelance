import { FaCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-950 via-slate-950 to-black text-gray-200 py-4 text-center text-sm sm:text-base">
  <div className="border-t border-white/10 pt-4">
    <p>
      <FaCopyright className="inline-block mr-1" /> 
      2025 Thomas — Déployé avec{" "}
      <a
        href="https://www.netlify.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-200"
      >
        Netlify
      </a>
    </p>
  </div>
</footer>
  );
}
