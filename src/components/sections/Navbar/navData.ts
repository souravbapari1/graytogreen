export type ServicesMenuItems = {
  title: string;
  list: {
    id: string;
    icon: string;
    title: string;
    href: string;
    subtitle?: string;
  }[];
};
export type NavDataSet =
  | {
      title: string;
      href: string;
      isSubmenu: boolean;
      image?: undefined;
      submenu?: undefined;
      className?: string;
    }
  | {
      title: string;
      href: string;
      isSubmenu: boolean;
      image: string;
      submenu: ServicesMenuItems[];
      className?: string;
    };

const servicesMenuItems: ServicesMenuItems[] = [
  {
    title: "Restoration Orgs",
    list: [
      {
        id: "restoration-01",
        icon: "📐",
        title: "TreeMapper",
        href: "#", // Add appropriate link here
      },
      {
        id: "restoration-02",
        icon: "🔥",
        title: "FireAlert",
        href: "#", // Add appropriate link here
      },
      {
        id: "restoration-03",
        icon: "📜",
        title: "Restoration Standards",
        href: "#", // Add appropriate link here
      },
      {
        id: "restoration-04",
        icon: "💡",
        title: "Restoration Advice",
        href: "#", // Add appropriate link here
      },
    ],
  },
  {
    title: "Users",
    list: [
      {
        id: "users-01",
        icon: "🌱",
        title: "Donate Trees",
        href: "#", // Add appropriate link here
      },
      {
        id: "users-02",
        icon: "🎁",
        title: "Gift Trees",
        href: "#", // Add appropriate link here
      },
      {
        id: "users-03",
        icon: "📖",
        title: "Redeem/Check Tree Status",
        href: "#", // Add appropriate link here
      },
      {
        id: "users-04",
        icon: "💸",
        title: "Start fundraiser",
        href: "#", // Add appropriate link here
      },
      {
        id: "users-05",
        icon: "⚙️",
        title: "Embed Tree Counter Widgets",
        href: "#", // Add appropriate link here
      },
    ],
  },
  {
    title: "Open Platform",
    list: [
      {
        id: "open-platform-01",
        icon: "💻",
        title: "Partner Dashboard",
        href: "#", // Add appropriate link here
      },
      {
        id: "open-platform-02",
        icon: "💰",
        title: "PlanetCash",
        href: "#", // Add appropriate link here
      },
      {
        id: "open-platform-03",
        icon: "🌳",
        title: "MyForest",
        href: "#", // Add appropriate link here
      },
      {
        id: "open-platform-04",
        icon: "🚜",
        title: "EUDR Tracer",
        href: "#", // Add appropriate link here
      },
    ],
  },
  {
    title: "Companies & Institutions",
    list: [
      {
        id: "companies-01",
        icon: "💻", // Added a generic icon; replace if necessary
        title: "Partner Dashboard",
        href: "#", // Add appropriate link here
      },
      {
        id: "companies-02",
        icon: "💰", // Added a generic icon; replace if necessary
        title: "PlanetCash",
        href: "#", // Add appropriate link here
      },
      {
        id: "companies-03",
        icon: "🌳", // Added a generic icon; replace if necessary
        title: "MyForest",
        href: "#", // Add appropriate link here
      },
      {
        id: "companies-04",
        icon: "🚜", // Added a generic icon; replace if necessary
        title: "EUDR Tracer",
        href: "#", // Add appropriate link here
      },
    ],
  },
];

const supportMenu: ServicesMenuItems[] = [
  {
    title: "YOU",
    list: [
      {
        href: "#",
        icon: "🧩",
        id: "Become_a_member",
        title: "Become a member",
      },
      {
        href: "#",
        icon: "💚",
        id: "Donate",
        title: "Donate",
      },
      {
        href: "#",
        icon: "🌱",
        id: "Donate_Trees",
        title: "Donate Trees",
      },
      {
        href: "#",
        icon: "🎁",
        id: "Gift_Trees",
        title: "Gift Trees",
      },
      {
        href: "#",
        icon: "🪴",
        id: "Endowment",
        title: "Endowment",
      },
      {
        href: "#",
        icon: "💙",
        id: "Inheritance",
        title: "Inheritance",
      },
    ],
  },
  {
    title: "Companies & Organizations",
    list: [
      {
        title: "Partner with us",
        href: "/partners",
        icon: "🤝",
        id: "Partner_with_us",
        subtitle:
          "Join a generation-spanning movement for a climate-just future with your company, your employees, and your customers",
      },
      {
        title: "Sustainable Events",
        href: "#",
        icon: "🎤",
        id: "Partner_with_us",
        subtitle:
          "Reduce and compensate emissions and invite young speakers to talk about the climate crisis.",
      },
    ],
  },
];

export const navData: NavDataSet[] = [
  {
    title: "Home",
    href: "/",
    isSubmenu: false,
  },
  {
    title: "About",
    href: "/about-us",
    isSubmenu: false,
  },
  {
    title: "Academies & Labs ",
    href: "/academies",
    isSubmenu: false,
  },
  {
    title: "Platform & Tools",
    href: "#",
    isSubmenu: true,
    image:
      "https://www.plant-for-the-planet.org/wp-content/uploads/2023/07/Plant-for-the-Planet-Platform-Illustration.webp",
    submenu: servicesMenuItems,
  },
  {
    title: "Research",
    href: "/research",
    isSubmenu: false,
  },
  {
    title: "Support Us",
    href: "#",
    isSubmenu: true,
    image:
      "https://www.plant-for-the-planet.org/wp-content/uploads/2022/10/20191015_ac_curitiba_rethoricalpractice_3.jpg",
    submenu: supportMenu,
    className: "gap-1",
  },
  {
    title: "Blog",
    href: "/blogs",
    isSubmenu: false,
  },
];
