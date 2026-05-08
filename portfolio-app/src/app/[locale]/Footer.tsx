export default function Footer() {
  return (
    <footer className="w-full py-4 px-8 bg-gray-100 dark:bg-gray-900 text-center text-sm text-gray-500 mt-auto">
      &copy; {new Date().getFullYear()} Mario Skaff. All rights reserved.
    </footer>
  );
}
