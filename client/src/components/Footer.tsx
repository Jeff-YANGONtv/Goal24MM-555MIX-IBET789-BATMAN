export default function Footer() {
  return (
    <footer className="bg-black py-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} Goal 24 MM. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
