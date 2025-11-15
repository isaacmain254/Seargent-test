import Image from "next/image";
import { benefits } from "@/constants/benefits";
import Profile from "@/components/profile";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="bg-[#F5F5F5]">
      {/* h-736 */}
      <section className="w-full lg:w-[1231px] opacity-100 border-t border-[#83A790] lg:my-9.25 mx-auto">
        <div className="w-full  my-9.25">
          <h2 className="text-center font-beVietnamPro text-4xl leading-[100%] text-[#303030] mb-3">
            Stand-alone services
          </h2>
          <p className="w-full lg:w-[708px] mx-auto font-plusJakartaSans font-medium text-sm leading-[100%] text-center text-[#5F5F5F]">
            We review for accuracy, clarity, and originality—refining everything
            from grammar to structure and citations. This ensures your work is
            polished and meets academic or professional standards.
          </p>
        </div>

        <Services />
      </section>

      <section className="w-full lg:w-[1231px] lg:h-[736px] opacity-100 border-t border-[#83A790] mx-auto lg:my-9.25">
        <div className="w-full my-[28] ">
          <h2 className="text-center font-beVietnamPro text-4xl leading-[100%] text-[#303030] pb-[14]">
            How it works
          </h2>
          <p className="w-full lg:w-[708px] font-plusJakartaSans mx-auto font-medium text-sm leading-[100%] text-center text-[#5F5F5F]">
            Choose the service that best fits your needs—whether it&apos;s
            homework help, professional editing, or resume writing. Our tailored
            packages ensure there’s something for everyone:
          </p>
        </div>
        <div className="w-full ">
          <div className="w-full lg:w-[882px] lg:h-[585px] mx-auto flex flex-col lg:flex-row gap-y-4 lg:gap-x-0">
            <div className="flex flex-col gap-y-[30px] self-center lg:self-end">
              <div
                className="relative w-[250px] h-[216px] rounded-3xl flex flex-col items-center justify-center bg-[#E0D44133] shadow-md"
                style={{
                  clipPath:
                    "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                }}
              >
                <div className="font-bungee text-3xl font-normal absolute top-[26px] left-[100px] text-[#0A0D0A]">
                  01
                </div>
                <div className="font-beVietnamPro font-medium text-lg">
                  Choose Your Package
                </div>
              </div>
              <div
                className="relative w-[250px] h-[216px] rounded-3xl flex  items-center justify-center bg-[#E0D441] shadow-md"
                style={{
                  clipPath:
                    "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                }}
              >
                <div
                  className="w-[249px] h-[215px] rounded-3xl flex flex-col items-center justify-center bg-white  shadow-md p-10"
                  style={{
                    clipPath:
                      "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                  }}
                >
                  <div className="font-medium font-beVietnamPro text-xs text-[#5F5F5F]">
                    Choose a tailored resume package for your career
                    level—Entry-Level, Mid-Career, or Executive—to make a strong
                    impression.
                  </div>
                </div>
              </div>
            </div>
            <div className="self-center lg:self-start flex flex-col-reverse lg:flex-col gap-y-[30px] -ml-9">
              <div
                className="relative w-[250px] h-[216px] rounded-3xl flex  items-center justify-center bg-[#D9736E33] shadow-md"
                style={{
                  clipPath:
                    "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                }}
              >
                <div
                  className="w-[249px] h-[215px] rounded-3xl flex flex-col items-center justify-center bg-white  shadow-md p-10"
                  style={{
                    clipPath:
                      "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                  }}
                >
                  <div className="font-medium font-beVietnamPro text-xs text-[#5F5F5F]">
                    We gather insights on your career goals and achievements
                    through a 30-minute consultation or a detailed
                    questionnaire, tailored to your communication preference.
                  </div>
                </div>
              </div>
              <div
                className="relative w-[250px] h-[216px] rounded-3xl flex flex-col items-center justify-center bg-[#D9736E33] shadow-md"
                style={{
                  clipPath:
                    "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                }}
              >
                <div className="font-bungee text-3xl font-normal absolute top-[26px] left-[100px] text-[#0A0D0A]">
                  02
                </div>
                <div className="font-beVietnamPro font-medium text-lg text-[#0A0D0A]">
                  Consultation or <br /> Questionnaire
                </div>
              </div>
            </div>
            <div className="self-center lg:self-end flex flex-col gap-y-[30px] -ml-9">
              <div
                className="relative w-[250px] h-[216px] rounded-3xl flex flex-col items-center justify-center bg-[#4AAB9E33] shadow-md"
                style={{
                  clipPath:
                    "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                }}
              >
                <div className="font-bungee text-3xl font-normal absolute top-[26px] left-[100px] text-[#0A0D0A]">
                  03
                </div>
                <div className="font-beVietnamPro font-medium text-lg text-[#0A0D0A]">
                  Drafting & Revisions
                </div>
              </div>
              <div
                className="relative w-[250px] h-[216px] rounded-3xl flex  items-center justify-center bg-[#4AAB9E33] shadow-md"
                style={{
                  clipPath:
                    "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                }}
              >
                <div
                  className="w-[249px] h-[215px] rounded-3xl flex flex-col items-center justify-center bg-white shadow-md p-10"
                  style={{
                    clipPath:
                      "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                  }}
                >
                  <div className="font-medium font-beVietnamPro text-xs text-[#5F5F5F]">
                    We craft tailored, ATS-optimized resumes with unlimited
                    revisions over 7 days to ensure your success.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-col gap-y-[30px] self-center lg:self-start -ml-9">
              <div
                className="relative w-[250px] h-[216px] rounded-3xl flex  items-center justify-center bg-[#E5963E33] shadow-md"
                style={{
                  clipPath:
                    "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                }}
              >
                <div
                  className="w-[249px] h-[215px] rounded-3xl flex flex-col items-center justify-center bg-white  shadow-md p-10"
                  style={{
                    clipPath:
                      "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                  }}
                >
                  <div className="font-medium font-beVietnamPro text-xs text-[#5F5F5F]">
                    We deliver your finalized resume in 3 business days or
                    within 24–48 hours with rush delivery.
                  </div>
                </div>
              </div>
              <div
                className="relative w-[250px] h-[216px] rounded-3xl flex flex-col items-center justify-center bg-[#E5963E33] shadow-md"
                style={{
                  clipPath:
                    "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                }}
              >
                <div className="font-bungee text-3xl font-normal absolute top-[26px] left-[100px] text-[#0A0D0A]">
                  04
                </div>
                <div className="font-beVietnamPro font-medium text-lg text-[#0A0D0A]">
                  Delivery
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full lg:w-[1231px] lg:h-[736px] opacity-100  border-t border-[#83A790] mx-auto lg:my-9.25">
        <div className="w-full my-[28] ">
          <h2 className="text-center font-beVietnamPro text-4xl leading-[100%] text-[#303030] pb-[14]">
            Benefits
          </h2>
          <p className="w-full lg:w-[708px] mx-auto font-medium text-sm leading-[100%] text-center text-[#5F5F5F]">
            We understand the importance of meeting deadlines—whether it’s for
            an urgent job application, journal submission, or upcoming exam. We
            deliver on time, every time.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-14 gap-y-9 ">
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

      <section className="w-full lg:w-[1231px] lg:h-[736px]  opacity-100  border-t border-[#83A790] mx-auto lg:my-14">
        <div className="w-full my-[28] ">
          <h2 className="text-center font-beVietnamPro text-4xl leading-[100%] text-[#303030] pb-[14]">
            Meet our top-performing experts
          </h2>
          <p className="w-full lg:w-[708px] mx-auto font-medium text-sm leading-[100%] text-center text-[#5F5F5F]">
            Handpicked professionals with proven expertise in crafting resumes
            that stand out. Our team combines industry knowledge and
            personalized strategies to help you achieve your career goals.
          </p>
        </div>

        <div className="flex items-center flex-col lg:flex-row gap-3">
          <Profile />
          <Profile />
          <Profile />

          <div
            className="w-[288px] h-[330px] rounded-[20px] border border-[#F0F0F0] py-6 px-4 flex items-center justify-center "
            style={{
              backgroundImage: "url('/writer-card.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <button className="w-full font-semibold font-beVietnamPro text-white text-base border border-[#70B444] rounded-[10px] py-1">
              View all Pros
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
