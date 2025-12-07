// utils/navLinks.ts

export const AllLinks = [
  { name: "About", to: "/about", icon: false },
  {
    name: "Services",
    to: null,
    icon: true,
    links: [
      {
        name: "Training Programs",
        to: "/services/training-programs",
        rotate: -4.25
      },
      { name: "E learning", to: "/services/e-learning", rotate: 4.25 },
      {
        name: "Experiential Learning",
        to: "/services/experiential-learning",
        rotate: -4.25
      },
      { name: "Consultation", to: "/services/consultation", rotate: 4.25 },
      {
        name: "Learn & Explore Egypt",
        to: "/services/learn-explore-egypt",
        rotate: -4.25
      },
      {
        name: "Business Simulation",
        to: "/services/business-simulation",
        rotate: 4.25
      }
    ]
  },
  { name: "Training Calendar", to: "/training-calendar", icon: false },
  { name: "Hub Facilities", to: "/hub-facilities", icon: false },
  {
    name: "Media Center",
    to: null,
    icon: true,
    links: [
      { name: "Blog", to: "/media-center/blog", rotate: -4.25 },
      { name: "Gallery", to: "/media-center/gallery", rotate: 4.25 },
      { name: "Videos", to: "/media-center/videos", rotate: -4.25 }
    ]
  },
  { name: "Careers", to: "/careers", icon: false },
  { name: "FAQs", to: "/faqs", icon: false },
  { name: "Contact Us", to: "/contact-us", icon: false }
];
