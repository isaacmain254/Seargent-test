"use client";

import { Service, SERVICES } from "@/constants/services";
import { useState } from "react";

export default function Services() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-[18px] mx-5 lg:mx-0">
      {SERVICES.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`border border-[#70B444] rounded-2xl p-4 flex flex-col justify-between transition-all duration-300`}
      style={{
        height: expanded ? "auto" : "576px",
      }}
    >
        
      <div>
        <h3 className="text-[#70B444] text-base font-plusJakartaSans font-bold">
          {service.title}
        </h3>

        <p className="my-[13px] text-sm text-[#5F5F5F] font-plusJakartaSans">
          {service.description}
        </p>

        <div className="text-sm text-[#5F5F5F]">
          Starting at <br />
          <span className="text-[32px] font-semibold font-plusJakartaSans">
            ${service.price}
          </span>
        </div>

        <div>
          <div className="text-base font-bold font-plusJakartaSans text-[#303030]">
            What it entails
          </div>

          <ul
            className={`list-disc px-6 clamp-list ${
              expanded ? "expanded" : ""
            }`}
          >
            {service.items.map((item, index) => (
              <li
                key={index}
                className="text-base font-plusJakartaSans text-[#5F5F5F]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-4">
        <button
          onClick={() => setExpanded(!expanded)}
          className="block w-full py-[5px] px-[15px] text-center text-[#70B444] font-beVietnamPro text-[17px] font-medium border border-gray-200"
        >
          {expanded ? "View less" : "View more"}
        </button>

        <button className="block w-full my-1.5 py-[5px] px-[15px] text-center text-[#70B444] font-beVietnamPro text-[17px] font-medium border border-[#70B444] rounded-[7px] cursor-pointer">
          Hire pro
        </button>

        <p className="text-[10px] italic font-beVietnamPro text-center text-[#5F5F5F]">
          *Risk Free, Release pay only if satisfied
        </p>
      </div>
    </div>
  );
}
