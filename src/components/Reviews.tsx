import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Reviews = () => {
  const reviewsData = [
    {
      id: 1,
      name: "John Doe",
      designation: "CEO, ABC Company",
      review:
        "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
      imageUrl:
        "https://images.pexels.com/photos/14679355/pexels-photo-14679355.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "Jane Smith",
      designation: "Marketing Manager, XYZ Inc.",
      review:
        "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
      imageUrl:
        "https://images.pexels.com/photos/14679355/pexels-photo-14679355.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "Michael Johnson",
      designation: "CTO, PQR Corporation",
      review:
        "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
      imageUrl:
        "https://images.pexels.com/photos/14679355/pexels-photo-14679355.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "Emily Brown",
      designation: "HR Manager, LMN Group",
      review:
        "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
      imageUrl:
        "https://images.pexels.com/photos/14679355/pexels-photo-14679355.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 5,
      name: "David Lee",
      designation: "Finance Director, RST Enterprises",
      review:
        "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
      imageUrl:
        "https://images.pexels.com/photos/14679355/pexels-photo-14679355.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 6,
      name: "Sarah Adams",
      designation: "Operations Manager, UVW Co.",
      review:
        "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
      imageUrl:
        "https://images.pexels.com/photos/14679355/pexels-photo-14679355.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <main className="section-wrapper mt-20 lg:mt-[100px] space-y-20">
      <h1>What Everyone Says</h1>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {reviewsData.map((item) => (
          <SwiperSlide
            key={item?.id}
            className="p-8 space-y-4 bg-black/50 rounded-md"
          >
            <p>{item?.review}</p>

            <div className="flex items-center gap-4">
              <div>
                <img
                  src={item?.imageUrl}
                  alt={item?.designation}
                  className="rounded-full h-16 w-16 object-cover"
                />
              </div>

              <div>
                <p>{item?.name}</p>
                <p className="text-[#475569]">{item?.designation}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default Reviews;
