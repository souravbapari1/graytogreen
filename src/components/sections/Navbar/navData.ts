const servicesMenuItems = [
  {
    title: "Restoration Orgs",
    list: [
      {
        id: "restoration-01",
        icon: "📐",
        title: "TreeMapper",
        href: "#", // Add appropriate link here
        subtitle: "",
      },
      {
        id: "restoration-02",
        icon: "🔥",
        title: "FireAlert",
        href: "#", // Add appropriate link here
        subtitle: "",
      },
      {
        id: "restoration-03",
        icon: "📜",
        title: "Restoration Standards",
        href: "#", // Add appropriate link here
        subtitle: "",
      },
      {
        id: "restoration-04",
        icon: "💡",
        title: "Restoration Advice",
        href: "#", // Add appropriate link here
        subtitle: "",
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
        subtitle: "",
      },
      {
        id: "users-02",
        icon: "🎁",
        title: "Gift Trees",
        href: "#", // Add appropriate link here
        subtitle: "",
      },
      {
        id: "users-03",
        icon: "📖",
        title: "Redeem/Check Tree Status",
        href: "#", // Add appropriate link here
        subtitle: "",
      },
      {
        id: "users-04",
        icon: "💸",
        title: "Start fundraiser",
        href: "#", // Add appropriate link here
        subtitle: "",
      },
      {
        id: "users-05",
        icon: "⚙️",
        title: "Embed Tree Counter Widgets",
        href: "#", // Add appropriate link here
        subtitle: "",
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
        subtitle: "",
      },
      {
        id: "open-platform-02",
        icon: "💰",
        title: "PlanetCash",
        href: "#", // Add appropriate link here
        subtitle: "",
      },
      {
        id: "open-platform-03",
        icon: "🌳",
        title: "MyForest",
        href: "#", // Add appropriate link here
        subtitle: "",
      },
      {
        id: "open-platform-04",
        icon: "🚜",
        title: "EUDR Tracer",
        href: "#", // Add appropriate link here
        subtitle: "",
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
        subtitle: "",
      },
      {
        id: "companies-02",
        icon: "💰", // Added a generic icon; replace if necessary
        title: "PlanetCash",
        href: "#", // Add appropriate link here
        subtitle: "",
      },
      {
        id: "companies-03",
        icon: "🌳", // Added a generic icon; replace if necessary
        title: "MyForest",
        href: "#", // Add appropriate link here
        subtitle: "",
      },
      {
        id: "companies-04",
        icon: "🚜", // Added a generic icon; replace if necessary
        title: "EUDR Tracer",
        href: "#", // Add appropriate link here
        subtitle: "",
      },
    ],
  },
];

export type subMenuDataType = typeof servicesMenuItems;

export const navData = [
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
    title: "Academies",
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
    image:
      "https://www.plant-for-the-planet.org/wp-content/uploads/2022/10/20191015_ac_curitiba_rethoricalpractice_3.jpg",
  },
  {
    title: "Support Us",
    href: "/support",
    isSubmenu: false,
  },
  {
    title: "Blog",
    href: "/blogs",
    isSubmenu: false,
  },
];
