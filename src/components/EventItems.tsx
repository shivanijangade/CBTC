import useFetchData from "@/hooks/useFetchData";
import SectionTitle from "./SectionTitle";
import Skeleton from "react-loading-skeleton";

interface EventItemProps {
  _id: string;
  eventName: string;
  imageURL: string;
}

const EventItems = () => {
  const { isLoading, error, data } = useFetchData({
    queryKey: "eventItems",
    url: "https://event-360-serverr.vercel.app/api/v1/event-items",
  });

  if (error) {
    return (
      <div className="section-wrapper my-20 lg:my-[100px]">
        <p>An error has occurred: {error?.message}</p>
      </div>
    );
  }

  return (
    <section className="section-wrapper mt-20 lg:mt-[100px] space-y-14">
      <SectionTitle
        title="Event Items"
        description="Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices <br/> faucibus neque velit risus ac id lorem."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div key={index}>
                <Skeleton
                  height={25}
                  baseColor="#02011B"
                  highlightColor="#384259"
                  className="mb-2"
                />
                <Skeleton
                  height={200}
                  baseColor="#02011B"
                  highlightColor="#384259"
                />
              </div>
            ))
          : data.map((item: EventItemProps) => (
              <div key={item._id} className="p-5 bg-black/50 rounded-md">
                <h5>{item?.eventName}</h5>

                <img
                  src={item?.imageURL}
                  alt={item?.eventName}
                  className="object-cover mt-3 h-[200px] w-full rounded-md"
                />
              </div>
            ))}
      </div>
    </section>
  );
};

export default EventItems;
