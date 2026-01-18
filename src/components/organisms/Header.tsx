import { Search, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 w-full z-50 transition-all duration-300
          ${scrolled ? "bg-black/60 backdrop-blur-[40px]" : "bg-transparent"}
        `}
      >
        <div className="mx-auto h-16 flex items-center justify-between px-4 lg:max-w-[1280px]">
          {/* Left */}
          <div className="flex items-center gap-10 text-white">
            <img
              src="./src/assets/images/logo.svg"
              alt="Movie Logo"
              className="h-8"
              onClick={() => navigate("/")}
            />

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-12">
              <li>
                <a href="/" className="text-md text-white no-underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/favorite" className="text-md text-white no-underline">
                  Favorites
                </a>
              </li>
            </ul>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4 text-white">
            {/* Desktop Search */}
            <div className="hidden lg:flex items-center gap-2 rounded-2xl border border-[#181D27] bg-black/60 px-4 h-11 w-[260px]">
              <Search className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search movie"
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              />
            </div>

            {/* Mobile Search Icon */}
            <button className="lg:hidden" aria-label="Search">
              <Search className="h-6 w-6" />
            </button>

            {/* Hamburger */}
            <button
              className="lg:hidden"
              aria-label="Menu"
              onClick={() => setOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black text-white">
          <div className="flex items-center justify-between h-16 px-4">
            <img
              src="./src/assets/images/logo.svg"
              alt="Movie Logo"
              className="h-8"
            />
            <button onClick={() => setOpen(false)} aria-label="Close">
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col items-start pt-6 px-4 gap-4 h-[calc(100vh-64px)] text-md text-left">
            <a href="/" onClick={() => setOpen(false)} className="text-left">
              Home
            </a>
            <a
              href="/favorite"
              onClick={() => setOpen(false)}
              className="text-left"
            >
              Favorites
            </a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
