import { FaLongArrowAltRight } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { FaEuroSign } from "react-icons/fa";
import { BiUniversalAccess } from "react-icons/bi";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="text-light-sky">
      <hr className="border-[#334155]" />

      <div
        className={cn(
          "grid grid-cols-1 lg:grid-cols-6 gap-x-[48px] gap-y-[32px] py-[48px]",
          location.pathname.startsWith("/dashboard")
            ? "px-5"
            : "section-wrapper"
        )}
      >
        <div>
          <h4 className="text-white">
            Event {""}
            <span
              className="text-secondary
          "
            >
              360
            </span>
          </h4>
        </div>

        <div className="space-y-3">
          <p className="font-medium text-white">Product</p>
          <p>Pricing</p>
          <p>Overview</p>
          <p>Browse</p>
          <p>Accessibility</p>
        </div>

        <div className="space-y-3">
          <p className="font-medium text-white">Solutions</p>
          <p>Brainstorming</p>
          <p>Ideation</p>
          <p>Wireframing</p>
          <p>Resarch</p>
        </div>

        <div className="space-y-3">
          <p className="font-medium text-white">Resources</p>
          <p>Help Center</p>
          <p>Blog</p>
          <p>Tutorials</p>
          <p>FAQs</p>
        </div>

        <div className="space-y-3">
          <p className="font-medium text-white">Support</p>
          <p>Contact Us</p>
          <p>Developers</p>
          <p>Documentation</p>
          <p>Integrations</p>
        </div>

        <div className="space-y-3">
          <p className="font-medium text-white">Company</p>
          <p>About</p>
          <p>Press</p>
          <p>Events</p>
          <div className="flex items-center gap-2">
            <p>Request Demo</p>
            <FaLongArrowAltRight />
          </div>
        </div>
      </div>

      <div className="section-wrapper">
        <hr className="border-[#334155]" />

        <div className="flex flex-col lg:flex-row lg:justify-between py-[24px]">
          <div className="mb-[24px] lg:mb-0">
            <p>@ 2023. All rights reserved.</p>
          </div>

          <div className="flex gap-[32px]">
            <p>Terms</p>
            <p>Privacy</p>
            <p>Contact</p>
            <p className="flex items-center gap-2">
              <GrLanguage className="h-6 w-6" /> EN
            </p>
            <p className="flex items-center gap-2">
              <FaEuroSign className="h-6 w-6" />
              EUR
            </p>
            <BiUniversalAccess className="h-6 w-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
