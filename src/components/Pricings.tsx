import checkMarkIcon from "../assets/icons/checkmark-icon.png";
import { Button } from "./ui/button";

const Pricings = () => {
  const pricingDetails = [
    {
      id: 1,
      packageName: "STANDART",
      price: "$120",
      features: ["One day pas access all lecture", "Lunch and Snack"],
    },
    {
      id: 2,
      packageName: "PREMIUM",
      price: "$180",
      features: [
        "One day pas access all lecture",
        "Lunch and Snack",
        "Meet Event Speaker",
      ],
    },
    {
      id: 3,
      packageName: "ENTERPRICE",
      price: "$200",
      features: [
        "One day pas access all lecture",
        "Lunch and Snack",
        "Meet Event Speaker",
        "Front Seat",
      ],
    },
  ];

  return (
    <section className="bg-black/50 min-h-dvh flex items-center justify-center">
      <div className="section-wrapper w-full space-y-16 py-10 lg:py-0">
        <div className="flex items-center flex-col gap-3">
          <p className="text-sm font-semibold">PRICING</p>
          <h3>Package Pricing</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {pricingDetails.map((item) => (
            <div
              key={item?.id}
              className="bg-slate-900 p-8 rounded-md group hover:bg-[#0038B4]  hover:transition-colors hover:duration-300 hover:ease-in-out hover:scale-110"
            >
              <div className="relative h-full">
                <div className="space-y-4">
                  <p className="text-xs font-semibold">{item?.packageName}</p>
                  <h4>{item?.price}</h4>
                </div>

                {item?.features?.map((feature) => (
                  <div className="flex items-center gap-3 mt-4">
                    <img src={checkMarkIcon} alt="CheckMarkIcon" />
                    <p>{feature}</p>
                  </div>
                ))}

                <div className="mt-20">
                  <Button className="absolute w-full bottom-0 bg-gray-700 text-white group-hover:bg-electric-blue group-hover:text-black ">
                    Get Your Ticket
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricings;
