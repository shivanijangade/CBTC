import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { cn } from "@/lib/utils";

const Dashboard = () => {
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
    <main className="min-h-[calc(100dvh-80px)] grid md:grid-cols-5 lg:grid-cols-12">
      {/* navigation */}
      <aside className="bg-midnight-blue/30 max-md:hidden md:flex flex-col md:col-span-1 lg:col-span-2 p-1 border-r space-y-1">
        <Link
          to="/dashboard/recent-events"
          className="px-4 py-2 rounded hover:bg-midnight-blue duration-300 transition-all"
        >
          Recent Events
        </Link>

        <Link
          to="/dashboard/event-items"
          className="px-4 py-2 rounded hover:bg-midnight-blue duration-300 transition-all"
        >
          Event Items
        </Link>
      </aside>

      {/* mobile navigation */}
      <div className="md:hidden mt-5 ml-5">
        <button onClick={() => setIsMenuOpen(true)} className="md:hidden">
          <IoMenu className="size-6" />
        </button>

        {/* mobile navigation overlay */}
        <div
          onClick={() => setIsMenuOpen(false)}
          className={cn(
            "fixed top-0 left-0 w-full h-full bg-black/70 backdrop-blur-sm md:hidden z-50",
            menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          )}
        ></div>

        {/* mobile navigation content */}
        <div
          className={cn(
            "absolute top-0 left-0 w-1/2 min-h-dvh max-h-dvh md:hidden bg-midnight-blue z-50 px-3 py-10 rounded transition-transform ease-in-out duration-300",
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

          {/* menu items */}
          <div
            onClick={() => setIsMenuOpen(false)}
            className="flex flex-col gap-y-1"
          >
            <Link
              to="/dashboard/recent-events"
              className="px-4 py-2 rounded hover:bg-primary duration-300 transition-all"
            >
              Recent Events
            </Link>

            <Link
              to="/dashboard/event-items"
              className="px-4 py-2 rounded hover:bg-primary duration-300 transition-all"
            >
              Event Items
            </Link>
          </div>
        </div>
      </div>

      {/* content */}
      <section className="md:col-span-4 lg:col-span-10 p-5">
        <Outlet />
      </section>
    </main>
  );
};

export default Dashboard;
