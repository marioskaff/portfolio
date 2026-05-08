export default function Header() {
  return (
    <header className="w-full py-4 px-8 bg-gray-100 dark:bg-gray-900 flex items-center justify-between shadow">
      <div className="font-bold text-xl">Mario Skaff</div>
      <nav className="space-x-4">
        <a href="#about" className="hover:underline">
          About
        </a>
        <a href="#experience" className="hover:underline">
          Experience
        </a>
        <a href="#consulting" className="hover:underline">
          Consulting
        </a>
        <a href="#skills" className="hover:underline">
          Skills
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
      </nav>
    </header>
  );
}
