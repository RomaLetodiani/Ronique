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

const FAQs: {
  question: string;
  answer: string;
}[] = [
  {
    question: "How do I enroll in a course?",
    answer:
      "To enroll in a course, log in to your account, search for the course you want, and click the 'Enroll Now' button. Follow the prompts to complete the payment process.",
  },
  {
    question: "Can I get a refund if I'm not satisfied with a course?",
    answer:
      "Yes, you can request a refund within 30 days of purchase if you are not satisfied with a course. Go to 'My Courses,' select the course, and click 'Request Refund.'",
  },
  {
    question: "How can I access my course after purchasing it?",
    answer:
      "After purchasing a course, you can access it by logging in to your account, navigating to 'My Courses,' and selecting the course you want to view.",
  },
  {
    question: "Are there any prerequisites for taking a course?",
    answer:
      "Some courses may have prerequisites, which will be listed in the course description. Make sure to review the requirements before enrolling.",
  },
  {
    question: "Can I download course materials for offline use?",
    answer:
      "Yes, you can download course materials for offline use where available. Look for the download option within the course content.",
  },
  {
    question: "How can I contact the instructor for help?",
    answer:
      "You can contact the instructor by using the messaging feature within the course. Go to the course page and click on 'Instructor' to send a message.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept various payment methods including credit/debit cards, PayPal, and sometimes local payment methods depending on your country.",
  },
  {
    question: "Can I get a certificate after completing a course?",
    answer:
      "Yes, upon successfully completing a course, you will receive a certificate of completion which you can download and share.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "To reset your password, click on 'Forgot Password' on the login page. Enter your email address, and follow the instructions sent to your email to reset your password.",
  },
  {
    question: "Is there a mobile app for accessing courses?",
    answer:
      "Yes, our platform has a mobile app available for both iOS and Android. You can download it from the App Store or Google Play Store to access your courses on the go.",
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
  FAQs,
};
