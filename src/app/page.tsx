import Circle from "@/components/animate/Circle";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    id: 3,
    name: "Tiktok Shop",
    link: " https://vt.tiktok.com/ZSMo66R3U/?page=Mall",
    // icon: <FaTiktok />
  },
  {
    id: 4,
    name: "Shoope",
    link: "https://id.shp.ee/TN4yWpb",
    // icon: <SiShopee />
  },
  {
    id: 5,
    name: "Tokopedia",
    link: "",
    // icon:
  },
  {
    id: 6,
    name: "Whatsapp",
    link: "https://wa.me/6282113442387",
    // icon:
  },
  {
    id: 1,
    name: "Instagram",
    link: "https://www.instagram.com/erve.indonesia/?hl=en",
    // icon: <RiInstagramFill />
  },
  {
    id: 2,
    name: "Tiktok",
    link: "https://www.tiktok.com/@erveindonesia?lang=en",
    // icon: <FaTiktok />
  },
]

const randomClasses = () => {
  const positions = [
    "left-0", "left-5", "left-10", "left-16", "left-24", "left-32", "left-40",
    "left-48", "left-56", "left-64", "left-72", "left-80", "left-96",
    "right-0", "right-5", "right-10", "right-16", "right-24", "right-32",
    "right-40", "right-48", "right-56", "right-64", "right-72", "right-80",
    "right-96",

    "left-1/2 -translate-x-1/2",
    "left-1/3 -translate-x-1/3",
    "left-2/3 -translate-x-2/3",
    "left-1/4 -translate-x-1/4",
    "left-3/4 -translate-x-3/4",

    "left-[500px]", "left-[600px]",
    "right-[450px]", "right-[550px]",

  ];

  const sizes = ["h-8", "h-12", "h-16", "h-24", "h-32"];

  const opacities = ["opacity-20", "opacity-30", "opacity-40", "opacity-50", "opacity-60", "opacity-70", "opacity-80"];

  const colors = [
    "text-pink-300",
    "text-black",
    "text-blue-600",
    "text-blue-200",
    "text-orange-200"
  ]

  return `${positions[Math.floor(Math.random() * positions.length)]} 
          ${sizes[Math.floor(Math.random() * sizes.length)]} 
          ${opacities[Math.floor(Math.random() * opacities.length)]} 
          ${colors[Math.floor(Math.random() * colors.length)]}`;

};

export default function Home() {

  return (
    <div className="min-h-screen
      bg-gradient-to-t from-cyan-100 to-white
      relative ">

      <div className="w-full flex flex-col justify-center items-center
      space-y-0">
        <div className="relative w-72 h-40 z-10">
          <Image
            src="/images/logo.png"
            alt="logo erve"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="w-full max-w-sm px-2 space-y-2.5 z-10 pb-5">
          {
            links.map((e) => (
              <Link className="flex items-center justify-center w-full
            gap-x-5 rounded-full p-5 backdrop-blur-sm bg-white/50 
            border border-solid border-neutral-600 border-r-[4px] border-b-[8px]
            cursor-pointer text-center font-semibold"
                href={e.link}
                key={e.id}
                target="_blank"
                rel="noopener noreferrer"
              >
                {e.name}
              </Link>
            ))
          }
        </div>
      </div>

      {[...Array(100)].map((_, index) => (
        <Circle
          x={Math.random() * 95}
          // y={Math.floor(Math.random() * 400 + 100)}
          key={index} classname={randomClasses()}
        />
      ))}
    </div>
  );
}
