import { useState } from "react";
import SectionTitle from "./SectionTitle";
import corporateImg from "../assets/images/corporate.png";
import weddingImg from "../assets/images/wedding.png";
import organizationImg from "../assets/images/organization.png";
import checkMarkIcon from "../assets/icons/checkmark-icon.png";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const Services = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const serviceDetails = [
    {
      id: 1,
      eventName: "Corporate Event",
      description:
        "Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut posuere felis arcu tellus tempus in in ultricies.Ut posuere felis arcu tellus tempus in in ultricies.",
      features: [
        "One day pass access all lecture",
        "Lunch and Snack",
        "Meet Event Speaker",
        "Front Seat",
      ],
      image: corporateImg,
    },
    {
      id: 2,
      eventName: "Wedding Event",
      description:
        "Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut posuere felis arcu tellus tempus in in ultricies.Ut posuere felis arcu tellus tempus in in ultricies.",
      features: [
        "One day pass access all lecture",
        "Lunch and Snack",
        "Meet Event Speaker",
        "Front Seat",
      ],
      image: weddingImg,
    },
    {
      id: 3,
      eventName: "Organization Event",
      description:
        "Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut posuere felis arcu tellus tempus in in ultricies.Ut posuere felis arcu tellus tempus in in ultricies.",
      features: [
        "One day pass access all lecture",
        "Lunch and Snack",
        "Meet Event Speaker",
        "Front Seat",
      ],
      image: organizationImg,
    },
  ];

  return (
    <section className="section-wrapper mt-20 lg:mt-[100px] space-y-14">
      <SectionTitle
        title="Our Services"
        description="Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices <br/> faucibus neque velit risus ac id lorem."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {serviceDetails.map((item) => (
          <div
            key={item.id}
            className={cn(
              "p-5 bg-black/50 rounded-md",
              hoveredId === item?.id &&
                "cursor-pointer transition-all duration-500 ease-in-out scale-105"
            )}
            onMouseEnter={() => setHoveredId(item?.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {hoveredId !== item?.id && (
              <img
                src={item?.image}
                alt={item?.eventName}
                className="object-cover mb-4 h-[200px] w-full rounded-md"
              />
            )}

            {hoveredId !== item?.id ? (
              <h4>{item?.eventName}</h4>
            ) : (
              <div>
                <h4>{item?.eventName}</h4>
                <p className="text-justify">{item.description}</p>
              </div>
            )}

            {item.features.map((feature) => (
              <div className="flex items-center gap-3 mt-4">
                <img src={checkMarkIcon} alt="CheckMarkIcon" />
                <p>{feature}</p>
              </div>
            ))}

            {hoveredId === item?.id && (
              <Button className="w-full mt-10">Check it Out</Button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
