import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setIsMenuOpen] = useState(false);

  // stop scrolling when nav is open on small devices
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [menuOpen]);

  return (
    <nav className="bg-midnight-blue">
      <div
        className={cn(
          "py-[24px] flex items-center justify-between max-w-[100dvw] overflow-x-hidden",
          location.pathname.startsWith("/dashboard")
            ? "px-5"
            : "section-wrapper"
        )}
      >
        {/* left side */}
        <Link to="/">
          <h4>
            Event {""}
            <span
              className="text-electric-blue
              "
            >
              360
            </span>
          </h4>
        </Link>

        {/* right side */}

        <div>
          <div className="max-md:hidden md:flex gap-4">
            <Link to="/">Home</Link>
            <Link to="/dashboard/recent-events">Dashboard</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
          </div>

          <button onClick={() => setIsMenuOpen(true)} className="md:hidden">
            <IoMenu className="size-6" />
          </button>

          {/* mobile navigation overlay */}
          <div
            onClick={() => setIsMenuOpen(false)}
            className={cn(
              "fixed top-0 right-0 w-full h-full bg-black/70 z-50 backdrop-blur-md md:hidden",
              menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            )}
          ></div>

          {/* mobile navigation content */}
          <div
            className={cn(
              "absolute top-0 left-0 w-1/2 min-h-dvh max-h-dvh md:hidden bg-midnight-blue px-3 py-10 rounded transition-transform ease-in-out duration-300 z-50",
              menuOpen ? "translate-x-0" : "-translate-x-full"
            )}
          >
            {/* closing button */}
            <div
              onClick={() => setIsMenuOpen(false)}
              className="flex justify-end mb-5"
            >
              <button>
                <IoClose className="size-6" />
              </button>
            </div>

            {/* navigation items */}
            <div
              onClick={() => setIsMenuOpen(false)}
              className="flex flex-col gap-1"
            >
              <Link
                to="/"
                className="px-4 py-2 rounded hover:bg-primary duration-300 transition-all"
              >
                Home
              </Link>
              <Link
                to="/dashboard/recent-events"
                className="px-4 py-2 rounded hover:bg-primary duration-300 transition-all"
              >
                Dashboard
              </Link>
              <Link
                to="/"
                className="px-4 py-2 rounded hover:bg-primary duration-300 transition-all"
              >
                About
              </Link>
              <Link
                to="/"
                className="px-4 py-2 rounded hover:bg-primary duration-300 transition-all"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
