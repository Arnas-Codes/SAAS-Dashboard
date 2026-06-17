import React from "react";
import ArrowIcon from "../assets/icons/ArrowIcon.png";

const features = [
  {
    name: "Luxury facilities",
    desk: "The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.",
  },
  {
    name: "Affordable Price",
    desk: "You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.",
  },
  {
    name: "Many Choices",
    desk: "We provide many unique work space choices so that you can choose the workspace to your liking.",
  },
];
const About = () => {
  return (
    <div className="max-w-7xl flex items-center mx-auto px-10 pt-6 gap-20 justify-center">
      <h2 className="text-2xl font-bold">Why Choosing Us</h2>
      <div className="flex gap-5">
        {features.map((feature, i) => (
          <div className="flex flex-col gap-3" key={i}>
            <h3 className="text-lg font-bold">{feature.name}</h3>
            <p className="tect-xs">{feature.desk}</p>
            <div className="flex gap-2 text-[#E58411]">
              <p>More Info</p> <img className="" src={ArrowIcon} alt="Img" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
