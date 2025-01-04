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

const toolsMenu: ServicesMenuItems[] = [
  {
    title: "Tools",
    list: [
      {
        icon: "📟",
        href: "/soon",
        id: "co2",
        title: "CO2 Calculator ",
      },
      {
        icon: "🧰",
        href: "/soon",
        id: "",
        title: "GCX Platform",
      },
      {
        icon: "🌳",
        href: "/soon",
        id: "",
        title: "GTG Nursery",
      },
      {
        icon: "🗂️",
        href: "/soon",
        id: "",
        title: "Sustainability Marketplace",
      },
    ],
  },

  {
    title: "‎ ",
    list: [
      {
        icon: "🔍",
        href: "/tracking",
        id: "",
        title: "Tracking Tool",
      },
      {
        icon: "👨🏻‍💻",
        href: "/platform",
        id: "",
        title: "Partener Platform",
      },
      {
        icon: "🌿",
        href: "/soon",
        id: "",
        title: "Trees restoration Tracking Tool",
      },
      {
        title: "Statistics And Records",
        href: "/statistics-and-records",
        icon: "📈",
        id: "sustainable-events",
      },
    ],
  },
  // {
  //   title: "Initiatives",
  //   list: [
  //     {
  //       icon: "🧩",
  //       href: "/rethink",
  //       id: "",
  //       title: "ReThink",
  //       subtitle:
  //         "Reduce and compensate emissions and invite young speakers to talk about the climate crisis.",
  //     },

  //     {
  //       icon: "🌱",
  //       href: "/soon",
  //       id: "",
  //       title: "Stop Talking , Start Planting",
  //       subtitle:
  //         "Reduce and compensate emissions and invite young speakers to talk about the climate crisis.",
  //     },
  //     {
  //       icon: "🤝🏻",
  //       href: "/soon",
  //       id: "",
  //       title: "Monthly Environmental Day",
  //       subtitle:
  //         "Reduce and compensate emissions and invite young speakers to talk about the climate crisis.",
  //     },
  //   ],
  // },
];

const InitiativesListMenu: ServicesMenuItems[] = [
  {
    title: "Initiatives",
    list: [
      {
        icon: "🧩",
        href: "/rethink",
        id: "",
        title: "ReThink",
        subtitle:
          "Reduce and compensate emissions and invite young speakers to talk about the climate crisis.",
      },

      {
        icon: "🌱",
        href: "/soon",
        id: "",
        title: "Stop Talking , Start Planting",
        subtitle:
          "Reduce and compensate emissions and invite young speakers to talk about the climate crisis.",
      },
      {
        icon: "🤝🏻",
        href: "/soon",
        id: "",
        title: "Monthly Environmental Day",
        subtitle:
          "Reduce and compensate emissions and invite young speakers to talk about the climate crisis.",
      },
    ],
  },
];

const supportMenu: ServicesMenuItems[] = [
  {
    title: "General",
    list: [
      {
        href: "/membership",
        icon: "🧩",
        id: "Become_a_member",
        title: "Become a member",
      },
      {
        href: "/act-with-us/plante-tree",
        icon: "💚",
        id: "Plante_Tree",
        title: "Planting Trees",
      },
      {
        href: "/act-with-us/acting-on-reducing-plastics-waste",
        icon: "📎",
        id: "Acting_on_Reducing_Plastics_Waste",
        title: "Acting on Reducing Plastics Waste",
      },
      {
        href: "/act-with-us/support-research-and-epirement",
        icon: "🌱",
        id: "Support_research_and_Expirement ",
        title: "Support Researches & Experiments",
      },
      {
        href: "/act-with-us/general-funding",
        icon: "🎁",
        id: "general_funding ",
        title: "General Funding",
      },
      {
        href: "/act-with-us/donate-for-land",
        icon: "🌲",
        id: "donate-for-land",
        title: "Donate for Land",
      },
      {
        href: "/act-with-us/endowment",
        icon: "💙",
        id: "Endowment",
        title: "Endowment",
      },
      {
        href: "/act-with-us/be-volunteer",
        icon: "🧑‍🎓",
        id: "Be_Volunteer",
        title: "Be Volunteer",
      },
    ],
  },
  {
    title: "Especial for Companies & Organizations",
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
        href: "/sustainable-events",
        icon: "🎤",
        id: "sustainable-events",
        subtitle:
          "Reduce and compensate emissions and invite young speakers to talk about the climate crisis.",
      },
      // {
      //   title: "Statistics And Records",
      //   href: "/statistics-and-records",
      //   icon: "📈",
      //   id: "sustainable-events",
      //   subtitle:
      //     "Reduce and compensate emissions and invite young speakers to talk about the climate crisis.",
      // },
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
    title: "Projects",
    href: "/projects",
    isSubmenu: false,
  },
  {
    title: "Clubs",
    href: "/soon",
    isSubmenu: false,
  },
  {
    title: "Academies & Labs ",
    href: "/academies",
    isSubmenu: false,
  },

  {
    title: "Services",
    href: "/services",
    isSubmenu: false,
  },

  {
    title: "Tools",
    href: "#",
    isSubmenu: true,
    image:
      "https://www.plant-for-the-planet.org/wp-content/uploads/2022/10/20191015_ac_curitiba_rethoricalpractice_3.jpg",
    submenu: toolsMenu,
    className: "gap-1",
  },
  {
    title: "Initiatives",
    href: "#",
    isSubmenu: true,
    image:
      "https://www.plant-for-the-planet.org/wp-content/uploads/2022/10/20191015_ac_curitiba_rethoricalpractice_3.jpg",
    submenu: InitiativesListMenu,
    className: "gap-1",
  },
  // {
  //   title: "⁠Researchs",
  //   href: "/research",
  //   isSubmenu: false,
  // },

  {
    title: "Act With Us",
    href: "#",
    isSubmenu: true,
    image:
      "https://www.plant-for-the-planet.org/wp-content/uploads/2022/10/20191015_ac_curitiba_rethoricalpractice_3.jpg",
    submenu: supportMenu,
    className: "gap-1",
  },
];
