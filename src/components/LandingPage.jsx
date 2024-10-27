import { Button } from "../components/ui/button";
import Logo from "@/assets/logo.svg?react";
import Flag from "@/assets/flag.svg";
import Reviews from "./Reviews";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Input } from "../components/ui/input";
import Sidebar from "../components/Sidebar";
// import {
//   HoverCard,
//   HoverCardContent,
//   HoverCardTrigger,
// } from "./components/ui/hover-card";

export default function LandingPage() {
  return (
    <div>
      <div className={`bg-[url('/john-towner.png')] bg-center`}>
        <div className="grid grid-cols-[auto_1fr_auto_auto] lg:grid-cols-[auto_1fr_repeat(8,auto)] h-[70px] items-center gap-[0.85rem] px-8">
          <div>
            <Logo />
          </div>
          <div></div>
          <Button
            variant="ghost"
            className="hidden lg:block hover:bg-transparent"
          >
            Askitect AI
          </Button>
          <Button
            variant="ghost"
            className="hidden lg:block hover:bg-transparent"
          >
            Solutions
          </Button>
          <Button
            variant="ghost"
            className="hidden lg:block hover:bg-transparent"
          >
            Pricing
          </Button>
          <Button
            variant="ghost"
            className="hidden lg:block hover:bg-transparent"
          >
            About US
          </Button>
          <Button
            variant="ghost"
            className="hidden lg:block hover:bg-transparent"
          >
            Contact US
          </Button>
          <div>
            <Button variant="ghost">
              <img src={Flag} />
              <svg
                height="1"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="white"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
            {/* <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link">@nextjs</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4"></div>
            </HoverCardContent>
          </HoverCard> */}
          </div>
          <Button className="hidden lg:block rounded-full px-6">Log in</Button>
          <Button
            variant="outline"
            className="hidden lg:block rounded-full px-6 border border-[#BFBCDD] bg-transparent"
          >
            Sign up
          </Button>
          <Sidebar />
        </div>
        <div className="h-[calc(100vh-70px)] grid place-content-center px-4 md:px-8">
          <p className="text-5xl font-semibold text-center">
            Vivamus pretium elit,
          </p>
          <p className="text-5xl font-semibold text-center">
            venenatis quam scelerisque non.
          </p>
          <p className="py-4 text-center">
            Fusce egestas fermentum elit ac sollicitudin. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>
          <div className="w-min mx-auto">
            <Button className="w-min rounded-full px-4">
              Let’s Start{" "}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: "block" }}
              >
                <path
                  d="M7 7H17M17 7V17M17 7L7 17"
                  stroke="#F5F5F7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto mt-24 px-4 md:px-8">
        <div>
          <p className="font-semibold">Products & Solutions</p>
          <p className="text-4xl font-semibold pt-8">Askitect AI</p>
          <p className="pt-2 pb-4">
            Aenean tristique, tellus id posuere tincidunt, enim tortor
            scelerisque quam, vitae faucibus felis nunc vitae nulla. Etiam
            tincidunt nisl sed quam tempor.
          </p>
          <Button className="w-min rounded-full px-4">
            Try Now
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: "block" }}
            >
              <path
                d="M7 7H17M17 7V17M17 7L7 17"
                stroke="#F5F5F7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            {[
              {
                p: "Maecenas eleifend",
                d: "Curabitur sit amet lacinia justo. Nullam accumsan velit quam, quis euismod dui sodales a. Proin non tincidunt neque.",
              },
              {
                p: "Duis ac ipsum nulla",
                d: "Aliquam pretium enim odio dapibus, non imperdiet lorem euismod. Curabitur blandit urna ante, ac accumsan lorem aliquet.",
              },
              {
                p: "Duis laoreet posuere",
                d: "Vivamus eros metus, vestibulum ut erat aliquam, pellentesque consectetur libero. Vestibulum laoreet dictum magna at suscipit.",
              },
            ].map((a, i) => (
              <div key={i}>
                <p className="font-semibold">{a.p}</p>
                <p className="text-sm pt-2">{a.d}</p>
              </div>
            ))}
          </div>
          <p className="text-2xl font-semibold pt-16">
            You may need our services if you want to:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            {[
              {
                p: "Purchase Evaluation",
                l: "",
              },
              {
                p: "Pre Construction Consultation",
                l: "",
              },
              {
                p: "Construction Quality Evaluation",
                l: "",
              },
            ].map((a, i) => (
              <div key={i} className="p-6 bg-[#453C8852] rounded-lg">
                <p className="font-semibold">{a.p}</p>
                <div className="grid grid-cols-[auto_auto_1fr] items-center gap-1">
                  <p className="text-sm pt-2 text-[#8C7CFF] font-bold">
                    Learn More
                  </p>
                  <div className="pt-[0.6rem]">
                    <svg
                      width="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ display: "block" }}
                    >
                      <path
                        d="M7 7H17M17 7V17M17 7L7 17"
                        stroke="#F5F5F7"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="my-28">
          <div className="lg:grid lg:grid-cols-[35%_1fr] lg:gap-[10%] items-center">
            <div>
              <p className="text-3xl">
                Blandit turpis ut augue pulvinar rutrum.
              </p>
              <p className="pt-4">
                Maecenas sit amet dui et purus imperdiet venenatis. Donec
                placerat arcu vulputate dictum blandit. Pellentesque tincidunt
                congue nunc, eget cursus mauris efficitur vel. Proin et nunc
                ultrices libero pharetra congue vitae sit amet odio. Fusce quis
                quam quis erat congue eleifend. Curabitur magna diam, interdum
                sed tincidunt et, finibus et ipsum. Cras justo mauris imperdiet
                vitae metus vel placerat nunc.
              </p>
            </div>
            <div className="relative lg:block hidden">
              <img
                src="/section1.png"
                className="absolute top-0 left-0 w-[64%] h-full"
              />
              <img
                src="/section2.png"
                className="absolute top-0 right-0 w-[64%] h-full"
              />
              <div className="grid grid-cols-[repeat(3,auto)] gap-[20%] p-6">
                {[
                  {
                    p: "AI",
                    d: "Our AI-powered platform is designed to identify potential construction issues, such as poor installation or structural concerns, by analysing photos you upload. It’s constantly learning from new data to give you more accurate and reliable feedback every time.",
                  },
                  {
                    p: "Insight",
                    d: "We don’t just detect problems; we provide you with clear, actionable insights so you can understand whether something needs immediate attention or if it can wait. Our goal is to help you make confident decisions about your home.",
                  },
                  {
                    p: "Advanced Analytics",
                    d: "Using sophisticated analysis, we process your queries effciently and give you detailed results. This technology ensures you get comprehensive advice without the long waits, making it easy to keep your projects on track.",
                  },
                ].map((a, i) => (
                  <div key={i}>
                    <p>{a.p}</p>
                    <p className="text-[0.8rem]">{a.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="my-28">
          <p className="text-3xl font-semibold">
            What customers think about our product:
          </p>
          <Reviews />
        </div>
        <div className="my-28">
          <p className="text-3xl font-semibold">Frequently asked questions:</p>
          <div className="pt-6">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  n: "Mauris ornare est nec ultrices rhoncus morbi faucibus consectetur ornare?",
                  d: "Vestibulum tempus et turpis at pretium. Nam cursus purus lacus, vitae pharetra quam ultricies eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent non tincidunt risus. Sed aliquam fringilla diam, nec sollicitudin arcu aliquet efficitur. Etiam at justo vel augue ornare mollis sagittis non tortor. Duis eu libero elit. Vivamus risus felis, auctor id ullamcorper a, tincidunt sed magna.",
                },
                {
                  n: "Nulla pulvinar a neque sed scelerisque phasellus porta odio dolor?",
                  d: "Vestibulum tempus et turpis at pretium. Nam cursus purus lacus, vitae pharetra quam ultricies eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent non tincidunt risus. Sed aliquam fringilla diam, nec sollicitudin arcu aliquet efficitur. Etiam at justo vel augue ornare mollis sagittis non tortor. Duis eu libero elit. Vivamus risus felis, auctor id ullamcorper a, tincidunt sed magna.",
                },
                {
                  n: "Vestibulum in feugiat metus aenean quis risus nibh etiam rhoncus egestas gravida?",
                  d: "Vestibulum tempus et turpis at pretium. Nam cursus purus lacus, vitae pharetra quam ultricies eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent non tincidunt risus. Sed aliquam fringilla diam, nec sollicitudin arcu aliquet efficitur. Etiam at justo vel augue ornare mollis sagittis non tortor. Duis eu libero elit. Vivamus risus felis, auctor id ullamcorper a, tincidunt sed magna.",
                },
                {
                  n: "Cras vel nunc sed massa tristique auctor vestibulum facilisis aliquet lectus vel congue?",
                  d: "Vestibulum tempus et turpis at pretium. Nam cursus purus lacus, vitae pharetra quam ultricies eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent non tincidunt risus. Sed aliquam fringilla diam, nec sollicitudin arcu aliquet efficitur. Etiam at justo vel augue ornare mollis sagittis non tortor. Duis eu libero elit. Vivamus risus felis, auctor id ullamcorper a, tincidunt sed magna.",
                },
                {
                  n: "Donec eget ante ipsum. Nam vestibulum maximus venenatis?",
                  d: "Vestibulum tempus et turpis at pretium. Nam cursus purus lacus, vitae pharetra quam ultricies eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent non tincidunt risus. Sed aliquam fringilla diam, nec sollicitudin arcu aliquet efficitur. Etiam at justo vel augue ornare mollis sagittis non tortor. Duis eu libero elit. Vivamus risus felis, auctor id ullamcorper a, tincidunt sed magna.",
                },
              ].map((a, i) => (
                <AccordionItem
                  value={`item-${i}`}
                  key={i}
                  className="border-[#424245]"
                >
                  <AccordionTrigger>{a.n}</AccordionTrigger>
                  <AccordionContent className="text-[#CCCDD7]">
                    {a.d}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        <div className="my-28">
          <div className="bg-[#F2F2F814] rounded-xl py-24 px-4">
            <p className="text-3xl font-semibold text-center">
              Aliquam quis dui nec justo elementum posuere.
            </p>
            <p className="text-center pt-2 pb-6">
              Vestibulum efficitur, magna eget egestas fringilla, dui nibh
              cursus velit, id tempus lorem est ut dui.
            </p>
            <div className="w-min mx-auto">
              <Button className="rounded-full px-6">Inquire Now</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-28 bg-[linear-gradient(180deg,_#161D3A_0%,_#2B3973_100%)]">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-[10%] border-b border-[#CCCDD750]">
            <div>
              <Logo />
              <div className="lg:flex gap-4 pt-8 lg:pt-20 space-y-4 lg:space-y-0">
                {[
                  { n: "About Us", l: "" },
                  { n: "Contact Us", l: "" },
                  { n: "Terms & Conditions", l: "" },
                  { n: "Privacy Policy", l: "" },
                ].map((a, i) => (
                  <div key={i}>{a.n}</div>
                ))}
              </div>
            </div>
            <div className="pt-12 lg:pt-0">
              <p className="text-2xl font-semibold">Join our mailing list</p>
              <p className="leading-none pt-2">
                Subscribe to get the latest news and updates right to your
                inbox.
              </p>
              <div className="grid grid-cols-[1fr_auto] gap-4 py-10">
                <Input
                  className="bg-transparent border-[#CCCDD750]"
                  placeholder="Email Address"
                />
                <Button className="rounded-full">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-[auto_1fr_auto] items-center py-3 gap-3">
            <p className="text-[#CCCDD750] text-center">
              © 2024 Askitect. All rights reserved.
            </p>
            <div></div>
            <div className="w-min mx-auto py-3 lg:py-0">
              <div className="flex gap-4 flex-nowrap">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1038_737)">
                    <path
                      d="M20.3974 5.99976H17.2011C15.3042 5.99976 13.1944 6.79754 13.1944 9.54707C13.2037 10.5051 13.1944 11.4226 13.1944 12.4553H11V15.9472H13.2623V25.9998H17.4194V15.8808H20.1632L20.4114 12.4455H17.3477C17.3477 12.4455 17.3546 10.9173 17.3477 10.4735C17.3477 9.38691 18.4783 9.44913 18.5463 9.44913C19.0844 9.44913 20.1304 9.4507 20.399 9.44913V5.99976H20.3974Z"
                      fill="#CCCDD7"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1038_737">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1038_740)">
                    <path
                      d="M6 8.22008C6 7.57656 6.22523 7.04568 6.67568 6.62741C7.12612 6.20913 7.71172 6 8.43243 6C9.14029 6 9.71299 6.20591 10.1506 6.61776C10.601 7.04247 10.8263 7.59587 10.8263 8.27799C10.8263 8.89575 10.6075 9.41054 10.1699 9.82239C9.71944 10.2471 9.12741 10.4595 8.39382 10.4595H8.37452C7.66666 10.4595 7.09396 10.2471 6.65637 9.82239C6.21878 9.39768 6 8.86357 6 8.22008ZM6.25097 25.112V12.2162H10.5367V25.112H6.25097ZM12.9112 25.112H17.1969V17.9112C17.1969 17.4607 17.2484 17.1132 17.3514 16.8687C17.5315 16.4311 17.805 16.0611 18.1718 15.7587C18.5386 15.4562 18.9987 15.305 19.5521 15.305C20.9936 15.305 21.7143 16.2767 21.7143 18.2201V25.112H26V17.7181C26 15.8134 25.5496 14.3687 24.6486 13.3842C23.7477 12.3996 22.5573 11.9073 21.0772 11.9073C19.417 11.9073 18.1236 12.6216 17.1969 14.0502V14.0888H17.1776L17.1969 14.0502V12.2162H12.9112C12.9369 12.628 12.9498 13.9086 12.9498 16.0579C12.9498 18.2072 12.9369 21.2252 12.9112 25.112Z"
                      fill="#CCCDD7"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1038_740">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1038_743)">
                    <path
                      d="M12.6672 16C12.6672 14.1591 14.1591 12.6664 16 12.6664C17.8409 12.6664 19.3336 14.1591 19.3336 16C19.3336 17.8409 17.8409 19.3336 16 19.3336C14.1591 19.3336 12.6672 17.8409 12.6672 16ZM10.8651 16C10.8651 18.836 13.164 21.1349 16 21.1349C18.836 21.1349 21.1349 18.836 21.1349 16C21.1349 13.164 18.836 10.8651 16 10.8651C13.164 10.8651 10.8651 13.164 10.8651 16ZM20.1381 10.6616C20.1381 11.3239 20.6753 11.8619 21.3384 11.8619C22.0008 11.8619 22.5388 11.3239 22.5388 10.6616C22.5388 9.99919 22.0016 9.46204 21.3384 9.46204C20.6753 9.46204 20.1381 9.99919 20.1381 10.6616ZM11.9596 24.1397C10.9847 24.0953 10.4548 23.933 10.1026 23.7956C9.6357 23.6139 9.30291 23.3974 8.95234 23.0477C8.60258 22.6979 8.3853 22.3651 8.20436 21.8982C8.06704 21.546 7.90468 21.0162 7.86026 20.0412C7.81179 18.9871 7.8021 18.6704 7.8021 16C7.8021 13.3296 7.8126 13.0137 7.86026 11.9588C7.90468 10.9838 8.06785 10.4548 8.20436 10.1018C8.38611 9.63489 8.60258 9.3021 8.95234 8.95153C9.3021 8.60178 9.63489 8.38449 10.1026 8.20355C10.4548 8.06624 10.9847 7.90388 11.9596 7.85945C13.0137 7.81099 13.3304 7.80129 16 7.80129C18.6704 7.80129 18.9863 7.81179 20.0412 7.85945C21.0162 7.90388 21.5452 8.06704 21.8982 8.20355C22.3651 8.38449 22.6979 8.60178 23.0485 8.95153C23.3982 9.30129 23.6147 9.63489 23.7964 10.1018C23.9338 10.454 24.0961 10.9838 24.1405 11.9588C24.189 13.0137 24.1987 13.3296 24.1987 16C24.1987 18.6696 24.189 18.9863 24.1405 20.0412C24.0961 21.0162 23.933 21.546 23.7964 21.8982C23.6147 22.3651 23.3982 22.6979 23.0485 23.0477C22.6987 23.3974 22.3651 23.6139 21.8982 23.7956C21.546 23.933 21.0162 24.0953 20.0412 24.1397C18.9871 24.1882 18.6704 24.1979 16 24.1979C13.3304 24.1979 13.0137 24.1882 11.9596 24.1397ZM11.8772 6.06058C10.8126 6.10905 10.0856 6.27787 9.44992 6.52504C8.79241 6.78029 8.23506 7.12278 7.67851 7.67851C7.12278 8.23425 6.78029 8.7916 6.52504 9.44992C6.27787 10.0856 6.10905 10.8126 6.06058 11.8772C6.01131 12.9435 6 13.2843 6 16C6 18.7157 6.01131 19.0565 6.06058 20.1228C6.10905 21.1874 6.27787 21.9144 6.52504 22.5501C6.78029 23.2076 7.12197 23.7658 7.67851 24.3215C8.23425 24.8772 8.7916 25.2189 9.44992 25.475C10.0864 25.7221 10.8126 25.891 11.8772 25.9394C12.9443 25.9879 13.2843 26 16 26C18.7165 26 19.0565 25.9887 20.1228 25.9394C21.1874 25.891 21.9144 25.7221 22.5501 25.475C23.2076 25.2189 23.7649 24.8772 24.3215 24.3215C24.8772 23.7658 25.2189 23.2076 25.475 22.5501C25.7221 21.9144 25.8918 21.1874 25.9394 20.1228C25.9879 19.0557 25.9992 18.7157 25.9992 16C25.9992 13.2843 25.9879 12.9435 25.9394 11.8772C25.891 10.8126 25.7221 10.0856 25.475 9.44992C25.2189 8.79241 24.8772 8.23506 24.3215 7.67851C23.7658 7.12278 23.2076 6.78029 22.5509 6.52504C21.9144 6.27787 21.1874 6.10824 20.1236 6.06058C19.0574 6.01212 18.7165 6 16.0008 6C13.2843 6 12.9443 6.01131 11.8772 6.06058Z"
                      fill="#CCCDD7"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1038_743">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1038_746)">
                    <path
                      d="M16.5318 24.5799L11.608 24.4899C10.0137 24.4585 8.41551 24.5211 6.85253 24.196C4.47488 23.7103 4.30643 21.3287 4.13018 19.3309C3.88731 16.5224 3.98133 13.6629 4.43965 10.8778C4.69838 9.31501 5.7166 8.38251 7.29125 8.28104C12.6068 7.91278 17.9577 7.95642 23.2615 8.12823C23.8217 8.14398 24.3857 8.23006 24.938 8.32805C27.6645 8.80596 27.7309 11.5049 27.9077 13.7768C28.0839 16.0723 28.0095 18.3795 27.6726 20.6592C27.4024 22.5468 26.8853 24.1298 24.703 24.2826C21.9687 24.4824 19.2972 24.6433 16.5553 24.5921C16.5554 24.5799 16.5396 24.5799 16.5318 24.5799ZM13.6371 19.801C15.6976 18.618 17.7187 17.4547 19.7674 16.2795C17.7031 15.0965 15.6858 13.9331 13.6371 12.758V19.801Z"
                      fill="#CCCDD7"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1038_746">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <p className="lg:hidden text-[#CCCDD750] text-center">
              Made by Magneto IT Solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
