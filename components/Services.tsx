"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Service, SERVICES } from "@/constants/services";

export default function Services() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-[18px]">
      {SERVICES.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const [expanded, setExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" ? window.innerWidth < 1024 : true);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 1024);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <div
      className={`relative border border-[#70B444] rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 `}
      style={{
        height: expanded ? "auto" : isMobile ? "auto" : "576px",
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
      {!expanded && (
        <div className="absolute bottom-12 left-0 z-10 h-[220px] w-full flex bg-linear-to-t from-white to-[#F5F5F5]  text-red-600" />
      )}

      <div className="mt-4 z-40">
        <button
          onClick={() => setExpanded(!expanded)}
          className="block w-full py-[5px] px-[15px] text-center text-[#70B444] font-beVietnamPro text-[17px] font-medium"
        >
          {expanded ? "View less" : "View more"}
        </button>

        <Link
          href="/pros"
          className="block w-full my-1.5 py-[5px] px-[15px] text-center text-[#70B444] font-beVietnamPro text-[17px] font-medium border border-[#70B444] rounded-[7px] cursor-pointer"
        >
          Hire pro
        </Link>

        <p className="text-[10px] italic font-beVietnamPro text-center text-[#5F5F5F]">
          *Risk Free, Release pay only if satisfied
        </p>
      </div>
    </div>
  );
}
