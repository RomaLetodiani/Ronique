import { gmail, googleMaps, phone } from "@/Assets/Icons";

export const allRightsReserved = "2024 Ronique. All Rights Reserved";

export const navBarText = [
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

export const FooterTextLeft = [
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

export const ProfileSideBarTexts = [
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
