import checkMarkIcon from "../assets/icons/checkmark-icon.png";
import galleryOne from "../assets/images/gallery/1.png";
import galleryTwo from "../assets/images/gallery/2.png";
import galleryThree from "../assets/images/gallery/3.png";
import galleryFour from "../assets/images/gallery/4.png";
import galleryFive from "../assets/images/gallery/5.png";
import gallerySix from "../assets/images/gallery/6.png";
import gallerySeven from "../assets/images/gallery/7.png";
import galleryEight from "../assets/images/gallery/8.png";
import galleryNine from "../assets/images/gallery/9.png";
import galleryTen from "../assets/images/gallery/10.png";

const Gallery = () => {
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
    {
      id: 5,
      title: "One day pas access all lecture",
    },
  ];

  return (
    <section className="section-wrapper min-h-dvh flex items-center justify-center my-20 lg:my-0">
      <div className="w-full flex items-center justify-between gap-20 flex-col lg:flex-row">
        {/* left side */}
        <div data-aos="fade-right" className="space-y-9 flex-1">
          <h1>Gallery</h1>

          <p>
            Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut
            posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
          </p>

          <div>
            {details.map((item) => (
              <div key={item?.id}>
                <div className="flex items-center gap-3 mt-4">
                  <img src={checkMarkIcon} alt="CheckMarkIcon" />
                  <p>{item?.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* right side */}
        <div data-aos="fade-left" className="flex-1 flex items-center">
          <div className="flex flex-col">
            <img className="ps-5" src={galleryOne} alt="" />
            <img src={galleryTwo} alt="" />
          </div>

          <div>
            <img src={galleryThree} alt="" />
            <img src={galleryFour} alt="" />
            <img src={galleryFive} alt="" />
          </div>

          <div>
            <img src={gallerySix} alt="" />
            <img src={gallerySeven} alt="" />
            <img src={galleryEight} alt="" />
          </div>

          <div className="flex flex-col">
            <img src={galleryNine} alt="" />
            <img className="pr-5" src={galleryTen} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
