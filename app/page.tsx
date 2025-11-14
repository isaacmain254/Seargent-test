import Link from "next/link";
import Image from "next/image";
import { benefits } from "@/constants/benefits";

export default function Home() {
  return (
    <main className="flex flex-col w-full justify-center items-center pt-5 ]">
      <section className="w-[1231] h-[736] opacity-100 border border-[#83A790]">
        <div className="w-full my-[28] border border-gray-200">
          <h2 className="text-center font-beVietnamPro text-4xl leading-[100%] text-[#303030] pb-[14]">
            Stand-alone services
          </h2>
          <p className="w-[708] mx-auto font-medium text-sm leading-[100%] text-center text-[#5F5F5F]">
            We review for accuracy, clarity, and originality—refining everything
            from grammar to structure and citations. This ensures your work is
            polished and meets academic or professional standards.
          </p>
        </div>
        <div className="w-full grid grid-cols-3 gap-[18] border border-gray-200">
          <div className="border border-[#70B444] rounded-2xl p-4 h-[576px]">
            <h3 className="text-[#70B444] text-base font-plusJakartaSans">
              Resume Writing
            </h3>
            <p className="my-[13] text-sm text-[#5F5F5F] font-font-plusJakartaSans">
              Craft a results-driven resume that opens doors—whether you&apos;re
              starting fresh, pivoting careers, or aiming higher. We help you
              present your value clearly, confidently, and competitively.
            </p>
            <div className="text-sm text-[#5F5F5F]">
              Starting at <br />
              <span className="text-[32px] font-semibold font-plusJakartaSans">
                $40.00
              </span>
            </div>
            <div className="h-[165px] overflow-hidden">
              <div className="text-base font-bold font-plusJakartaSans text-[#303030]">
                What it entails
              </div>
              <ul className="list-disc px-6">
                <li className="text-base text-[#5F5F5F] font-normal">
                  Comprehensive resume writing, whether creating from scratch or
                  rewriting an existing document
                </li>
                <li className="text-base text-[#5F5F5F] font-normal">
                  Tailoring content to align with your career goals, industry
                  standards, and specific job targets
                </li>
                <li className="text-base text-[#5F5F5F] font-normal">
                  Optimization for Applicant Tracking Systems (ATS) using
                  strategic keyword integration Clear, compelling phrasing that
                  highlights achievements, skills, and career progression
                  Professional formatting that ensures a clean, modern, and
                  recruiter-friendly presentation
                </li>
              </ul>
            </div>
            <Link
              href="#"
              className="block w-full py-[5px] px-[15px] text-center text-[#70B444] font-beVietnamPro text-[17px] font-medium border border-gray-200"
            >
              View more
            </Link>
            <button className="block w-full my-1.5 py-[5px] px-[15px] text-center text-[#70B444] font-beVietnamPro text-[17px] font-medium border border-[#70B444] rounded-[7px] cursor-pointer">
              Hire pro
            </button>
            <p className="text-[10px] italic font-normal font-beVietnamPro text-center text-[#5F5F5F]">
              *Risk Free, Release pay only if satisfied
            </p>
          </div>
        </div>
      </section>

      <section className="w-[1231] h-[736] opacity-100 border-t border-[#83A790]">
        <div className="w-full my-[28] border border-gray-200">
          <h2 className="text-center font-beVietnamPro text-4xl leading-[100%] text-[#303030] pb-[14]">
            How it works
          </h2>
          <p className="w-[708] mx-auto font-medium text-sm leading-[100%] text-center text-[#5F5F5F]">
            Choose the service that best fits your needs—whether it&apos;s
            homework help, professional editing, or resume writing. Our tailored
            packages ensure there’s something for everyone:
          </p>
        </div>
        <div className="w-full border border-gray-200">
          <div className="w-[882px] h-[585px] mx-auto flex  border border-gray-400">
            <div className="flex flex-col gap-y-[30px] self-end">
              <div
                className="w-[250px] h-[216px] rounded-3xl flex flex-col items-center justify-center bg-[#E0D44133] shadow-md"
                style={{
                  clipPath:
                    "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                }}
              >
                <div className={` text-3xl font-normal`}>01</div>
                <div>Choose Your Package</div>
              </div>
              <div
                className="w-[250px] h-[216px] rounded-3xl flex flex-col items-center justify-center bg-[#E0D44133] shadow-md"
                style={{
                  clipPath:
                    "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                }}
              >
                <div>
                  Choose a tailored resume package for your career
                  level—Entry-Level, Mid-Career, or Executive—to make a strong
                  impression.
                </div>
              </div>
            </div>
            <div className="self-start flex flex-col gap-y-[30px] -ml-9">
              <div
                className="w-[250px] h-[216px] rounded-3xl flex flex-col items-center justify-center bg-[#E0D44133] shadow-md"
                style={{
                  clipPath:
                    "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                }}
              >
                <div>
                  We gather insights on your career goals and achievements
                  through a 30-minute consultation or a detailed questionnaire,
                  tailored to your communication preference.
                </div>
              </div>
              <div
                className="w-[250px] h-[216px] rounded-3xl flex flex-col items-center justify-center bg-[#E0D44133] shadow-md"
                style={{
                  clipPath:
                    "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                }}
              >
                <div className={` text-3xl font-normal`}>02</div>
                <div>Consultation or Questionnaire</div>
              </div>
            </div>
            <div className="self-end flex flex-col gap-y-[30px] -ml-9">
              <div
                className="w-[250px] h-[216px] rounded-3xl flex flex-col items-center justify-center bg-[#E0D44133] shadow-md"
                style={{
                  clipPath:
                    "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                }}
              >
                <div className={` text-3xl font-normal`}>03</div>
                <div>Drafting & Revisions</div>
              </div>
              <div
                className="w-[250px] h-[216px] rounded-3xl flex flex-col items-center justify-center bg-[#E0D44133] shadow-md"
                style={{
                  clipPath:
                    "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                }}
              >
                <div>
                  We craft tailored, ATS-optimized resumes with unlimited
                  revisions over 7 days to ensure your success.
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-[30px] self-start -ml-9">
              <div
                className="w-[250px] h-[216px] rounded-3xl flex flex-col items-center justify-center bg-[#E0D44133] shadow-md"
                style={{
                  clipPath:
                    "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                }}
              >
                <div>
                  We deliver your finalized resume in 3 business days or within
                  24–48 hours with rush delivery.
                </div>
              </div>
              <div
                className="w-[250px] h-[216px] rounded-3xl flex flex-col items-center justify-center bg-[#E0D44133] shadow-md"
                style={{
                  clipPath:
                    "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                }}
              >
                <div className={` text-3xl font-normal`}>04</div>
                <div>Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-[1231] h-[736] my-9 opacity-100 gap-[2.31rem] border-t border-[#83A790]">
        <div className="w-full my-[28] ">
          <h2 className="text-center font-beVietnamPro text-4xl leading-[100%] text-[#303030] pb-[14]">
            Benefits
          </h2>
          <p className="w-[708] mx-auto font-medium text-sm leading-[100%] text-center text-[#5F5F5F]">
            We understand the importance of meeting deadlines—whether it’s for
            an urgent job application, journal submission, or upcoming exam. We
            deliver on time, every time.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-x-14 gap-y-9 py-9.25 ">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="w-[364px] h-[298px] px-8 py-6 bg-white border border-[#F0F0F0] rounded-xl shadow-md space-y-3.5"
            >
              <div className="relative w-16 h-16">
                <div className="absolute top-2.5 left-0 w-[54px]  h-[54px] flex justify-center items-center bg-[#000000] opacity-20 border-2 border-white   rounded-xl z-10">
                  <Image
                    src={`icons/${benefit.icon}`}
                    alt="icon"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="absolute top-1 left-1 w-[54px] h-[54px] bg-[#70B444] rounded-xl rotate-15"></div>
              </div>
              <h3 className="font-xl font-medium leading-tight text-[#303030]">
                {benefit.title}
              </h3>
              <p className="font-normal text-sm text-[#5F5F5F]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="w-[1231] h-[736] my-6.5 opacity-100  border-t border-[#83A790]">
        <div className="w-full my-[28] border border-gray-200">
          <h2 className="text-center font-beVietnamPro text-4xl leading-[100%] text-[#303030] pb-[14]">
            Meet our top-performing experts
          </h2>
          <p className="w-[708] mx-auto font-medium text-sm leading-[100%] text-center text-[#5F5F5F]">
            Handpicked professionals with proven expertise in crafting resumes
            that stand out. Our team combines industry knowledge and
            personalized strategies to help you achieve your career goals.
          </p>
        </div>
        <div>
          <div className="relative w-[288px] h-[330px] rounded-[20px] border border-[#F0F0F0] py-6 px-4">
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
                    <Image
                      src="/star.svg"
                      width={24}
                      height={24}
                      alt="star icon"
                    />
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
                      <Image
                        src="/award.svg"
                        alt="award"
                        width={16}
                        height={16}
                      />{" "}
                      <span className="font-bold text-sm text-[#303030]">
                        50+
                      </span>
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
                      <span className="font-bold text-sm text-[#303030]">
                        9+
                      </span>
                    </div>
                    <div className="font-normal text-xs text-[#545454]">
                      Years of experience
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <Image
                        src="/timer.svg"
                        alt="award"
                        width={16}
                        height={16}
                      />{" "}
                      <span className="font-bold text-sm text-[#303030]">
                        3 Days
                      </span>
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
              <p className="font-medium text-sm text-[#303030]">
                Available for
              </p>
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
        </div>
      </section>
    </main>
  );
}
