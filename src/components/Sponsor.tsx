import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const sponsors = [
  {
    name: "Facebook",
    description:
      "Contributing to the success of our event with valuable resources and support.",
    website: "https://www.facebook.com/",
    image:
      "https://store-images.s-microsoft.com/image/apps.37935.9007199266245907.b029bd80-381a-4869-854f-bac6f359c5c9.91f8693c-c75b-4050-a796-63e1314d18c9",
  },
  {
    name: "Apple",
    description:
      "Providing innovative solutions and financial support for our event.",
    website: "https://www.apple.com/",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVByitatwVy2dZAVZOj2VNNhuoWzNrRZbBOfORmn5nzg&s",
  },
];

const Sponsor = () => {
  return (
    <section className="section-wrapper my-20 lg:my-[100px] space-y-16">
      <div
        data-aos="fade-down"
        className="flex items-center flex-col gap-3 text-center"
      >
        <p className="text-sm font-semibold">Our Sponsors</p>
        <h3>We're Proudly Supported By</h3>
      </div>

      <div className="flex flex-col justify-center items-center gap-5">
        {sponsors.map((item, index) => (
          <div
            data-aos="fade-down"
            data-aos-duration="2000"
            key={index}
            className="p-5 bg-black shadow-lg rounded-lg flex gap-10 items-center"
          >
            <div>
              <img
                src={item?.image}
                alt={item?.name}
                className="rounded-md size-9 lg:size-14 object-cover"
              />
            </div>
            <div>
              <h5>{item?.name}</h5>
              <p className="brightness-90">{item?.description}</p>
              <Link
                to={item?.website}
                className="text-blue-500 hover:underline underline-offset-2"
              >
                Visit Website
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div
        data-aos="fade-down"
        data-aos-duration="3000"
        className="flex items-center flex-col gap-3 text-center"
      >
        <h4>Interested in Becoming a Sponsor?</h4>
        <p className="brightness-90">
          Join us in making this event a success and reach a wider audience with
          your brand.
        </p>
        <Button className="rounded-full">Learn More</Button>
      </div>
    </section>
  );
};

export default Sponsor;
