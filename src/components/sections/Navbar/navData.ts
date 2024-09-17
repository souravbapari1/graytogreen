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

const supportMenu: ServicesMenuItems[] = [
  {
    title: "YOU",
    list: [
      {
        href: "/membership",
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
        href: "/sustainable-events",
        icon: "🎤",
        id: "sustainable-events",
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
    title: "Services",
    href: "/services",
    isSubmenu: false,
  },
  {
    title: "Projects",
    href: "/projects",
    isSubmenu: false,
  },
  {
    title: "Academies & Labs ",
    href: "/academies",
    isSubmenu: false,
  },

  {
    title: "Tools & initiatives",
    href: "/platform",
    isSubmenu: false,
  },
  {
    title: "⁠Researchs",
    href: "/research",
    isSubmenu: false,
  },

  {
    title: "Impact With Us",
    href: "#",
    isSubmenu: true,
    image:
      "https://www.plant-for-the-planet.org/wp-content/uploads/2022/10/20191015_ac_curitiba_rethoricalpractice_3.jpg",
    submenu: supportMenu,
    className: "gap-1",
  },
];
