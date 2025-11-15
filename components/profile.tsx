import React from "react";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="relative w-[288px] h-[330px] rounded-[20px] border border-[#E1EDE1] py-6 px-4">
      <div className="absolute top-0 right-0 w-[73px] h-5 flex items-center gap-1 ps-1.5 bg-[#F8F8F8] rounded-tr-[20px]">
        <div className="w-1.5 h-1.5 rounded-full bg-[#70B444]" />
        <span className="font-medium text-xs text-[#70B444]">Active</span>
      </div>
      <div className="w-[256px] h-[145px] flex ">
        <div className="w-1/2">
          <div className="relative w-[89] h-[89] mx-auto">
            <div className="w-full h-full rounded-full">
              <Image
                src="/profile.jpg"
                width={89}
                height={89}
                alt="profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute top-[63.37px] left-[70.82px] w-[18.41px] h-[18.41px] bg-[#439F46] rounded-full " />
          </div>
          <div className="full">
            <p className="text-center font-bold text-base text-[#1F1F1F]">
              Phillis Owako
            </p>
            <div className="w-[101px] h-[34px] flex items-center justify-center gap-1.25 mx-auto rounded-[30px] py-1 px-2 bg-white border border-[#F0F0F0]">
              <Image src="/star.svg" width={24} height={24} alt="star icon" />
              <div className="font-bold text-sm">
                4.9 <span className="font-normal text-xs">(499)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full">
          <div className="w-28 h-[113px] my-4 ms-4">
            <div>
              <div className="flex items-center gap-1">
                <Image src="/award.svg" alt="award" width={16} height={16} />{" "}
                <span className="font-bold text-sm text-[#303030]">50+</span>
              </div>
              <div className="font-normal text-xs text-[#545454]">
                Completed tasks
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <Image
                  src="/archive-book.svg"
                  alt="archive book"
                  width={16}
                  height={16}
                />{" "}
                <span className="font-bold text-sm text-[#303030]">9+</span>
              </div>
              <div className="font-normal text-xs text-[#545454]">
                Years of experience
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <Image src="/timer.svg" alt="award" width={16} height={16} />{" "}
                <span className="font-bold text-sm text-[#303030]">3 Days</span>
              </div>
              <div className="font-normal text-xs text-[#545454]">
                Delivery time
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-[#E1EDE1] my-4" />
      <div className="h-[113px]">
        <p className="font-medium text-sm text-[#303030]">Available for</p>
        <div className="flex gap-2 mt-[11px]  mb-[15px] ">
          <div className="font-normal text-xs py-1 px-2 rounded-[7px] bg-[#F4F6FA]">
            Resume Writing
          </div>
          <div className="font-normal text-xs py-1 px-2 rounded-[7px] bg-[#F4F6FA]">
            IT
          </div>
          <div className="font-normal text-xs py-1 px-2 rounded-[7px] bg-[#F4F6FA]">
            Maths
          </div>
          <div className="font-normal text-xs py-1 px-2 rounded-[7px] bg-[#F4F6FA]">
            +7
          </div>
        </div>
        <button className="w-full h-[42px] border border-[#70B444] rounded-[10.42px]">
          Select pro
        </button>
      </div>
    </div>
  );
};

export default Profile;
