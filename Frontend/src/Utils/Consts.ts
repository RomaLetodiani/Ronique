import {
  facebook,
  gmail,
  googleMaps,
  linkedIn,
  phone,
  twitter,
} from "../Components/Shared/Assets/icons";

const navBarText = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Courses",
    path: "/courses",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "FAQ",
    path: "/faq",
  },
];

const FooterTextLeft = [
  {
    text: "Ronique@Gmail.com",
    alt: "Gmail",
    icon: gmail,
  },
  {
    text: "+1 234 567 890",
    alt: "Phone Number",
    icon: phone,
  },
  {
    text: "Somewhere in the world",
    alt: "Google Maps",
    icon: googleMaps,
  },
];

const FooterTextRight = {
  firstHalf: navBarText,
  secondHalf: [
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Company",
      path: "/about",
    },
    {
      name: "Achievements",
      path: "/about",
    },
    {
      name: "Our Goals",
      path: "/about",
    },
  ],
};

const Socials = [
  {
    alt: "Facebook",
    icon: facebook,
    href: "https://www.facebook.com",
  },
  {
    alt: "Twitter",
    icon: twitter,
    href: "https://www.facebook.com",
  },
  {
    alt: "LinkedIn",
    icon: linkedIn,
    href: "https://www.facebook.com",
  },
];

const ProfileSideBarTexts = [
  {
    name: "OverView",
    path: "overView",
  },
  {
    name: "Dashboard",
    path: "dashboard",
  },
  {
    name: "Inbox",
    path: "inbox",
  },
  {
    name: "Task",
    path: "task",
  },
  {
    name: "Admin Panel",
    path: "admin/courses",
    children: [
      {
        name: "Courses",
        path: "admin/courses",
      },
      {
        name: "Category",
        path: "admin/category",
      },
    ],
  },
];

const allRightsReserved = "2024 Ronique. All Rights Reserved";

export {
  navBarText,
  FooterTextLeft,
  FooterTextRight,
  Socials,
  allRightsReserved,
  ProfileSideBarTexts,
};
