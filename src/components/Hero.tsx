import heroLeft from "../assets/images/wedding.png";
import heroRight from "../assets/images/corporate.png";
import linear from "../assets/images/linear.png";
import checkMarkIcon from "../assets/icons/checkmark-icon.png";
import { Button } from "./ui/button";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const details = [
    {
      id: 1,
      title: "One day pass access all lecture",
    },
    {
      id: 2,
      title: "Lunch and Snack",
    },
    {
      id: 3,
      title: "Meet Event Speaker",
    },
    {
      id: 4,
      title: "Front Seat",
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section className="bg-midnight-blue lg:pb-20">
      <div className="section-wrapper grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* left side */}
        <div
          data-aos="fade-up"
          className="lg:max-h-[calc(100dvh-120px)] lg:col-span-2 relative"
        >
          <img
            src={heroLeft}
            alt="LeftSide"
            className="h-full w-full object-cover"
          />

          <img
            src={linear}
            alt="Linear Gradient"
            className="absolute w-full bottom-0"
          />

          <div className="absolute bottom-5 lg:bottom-10 mx-5 lg:mx-[60px] space-y-3">
            <h2>New Packages For Winter</h2>
            <p>
              Ut posuere felis arcu tellus tempus in in ultricies. Gravida id
              nibh ornare viverra. <br /> Ultrices faucibus neque velit risus ac
              id lorem. Always together.
            </p>
          </div>
        </div>

        {/* right side */}
        <div
          data-aos="fade-down"
          className="lg:max-h-[calc(100dvh-120px)] lg:col-span-1 md:bg-black/50 px-8 py-[30px] space-y-[30px] h-fit lg:h-full"
        >
          <h5 className="px-5">OUR MOST POPULAR SERVICES</h5>
          <hr className="border-[#344E71]" />

          <div className="px-5">
            <img
              src={heroRight}
              alt="RightSide"
              className="w-full object-cover mb-6"
            />
            <h4>Corporate Event</h4>

            {details.map((item) => (
              <div key={item?.id}>
                <div className="mt-4 flex items-center gap-3">
                  <img src={checkMarkIcon} alt="CheckMarkIcon" />
                  <p>{item?.title}</p>
                </div>
              </div>
            ))}

            <Button size="full" className="mt-[35px]">
              View Details
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
