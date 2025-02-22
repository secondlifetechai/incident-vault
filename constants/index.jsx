import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

export const navItems = [
  { label: "Features", href: "/#features" },
  { label: "Workflow", href: "/#workflow" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Send Report", href: "/send-report" },
  { label: "Track Report", href: "/track-report" },
];

export const testimonials = [
  {
    user: "Sarah Thompson",
    company: "HR Manager",
    image: '/profile-pictures/user1.jpg',
    text: "This platform has completely transformed how we handle incident reports. The anonymity feature ensures employees feel safe reporting issues.",
  },
  {
    user: "James Carter",
    company: "Security Analyst",
    image: '/profile-pictures/user2.jpg',
    text: "The AI-powered reporting is a game changer! Uploading a photo and getting an instant report saves so much time.",
  },
  {
    user: "Lisa Rodriguez",
    company: "Community Organizer",
    image: '/profile-pictures/user3.jpg',
    text: "Finally, a tool that allows people to report incidents without fear. It's simple, effective, and truly makes a difference.",
  },
  {
    user: "Michael Lee",
    company: "Corporate Compliance Officer",
    image: '/profile-pictures/user4.jpg',
    text: "Risk analysis and priority detection have helped our organization take immediate action on critical incidents. Highly recommended!",
  },
  {
    user: "Emily Watson",
    company: "NGO Director",
    image: '/profile-pictures/user5.jpg',
    text: "We needed a secure and anonymous way to receive reports, and this app delivers perfectly. It’s an essential tool for our work.",
  },
  {
    user: "David Miller",
    company: "Law Enforcement Consultant",
    image: '/profile-pictures/user6.jpg',
    text: "This app bridges the gap between the public and authorities, ensuring important incidents don’t go unnoticed. Brilliant innovation!",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Effortless Incident Reporting",
    description:
      "Upload a photo of the incident, and our advanced AI instantly identifies key details, filling out the report form for you. No hassle, no delays—just instant results.",
  },
  {
    icon: <Fingerprint />,
    text: "Total Anonymity",
    description:
      "Your identity remains completely hidden. We guarantee that no one can trace the report back to you.",
  },
  {
    icon: <ShieldHalf />,
    text: "Smart Event Recognition",
    description:
      "Our app can recognize the type of incident from the uploaded photo and categorize it for quicker responses.",
  },
  {
    icon: <BatteryCharging />,
    text: "Intelligent Risk Analysis",
    description:
      "Admins receive detailed reports with priority levels and risk ratings, ensuring swift action for critical issues.",
  },
  {
    icon: <PlugZap />,
    text: "Save Time & Stay Safe",
    description:
      "AI handles the reporting for you. Your privacy is our top priority.",
  },
  {
    icon: <GlobeLock />,
    text: "Drive Change & Feel Empowered",
    description:
      "Ensure incidents get the attention they deserve. Report freely without fear or exposure.",
  },
];

export const checklistItems = [
  {
    title: "Capture and Upload",
    description:
      "Take a photo of the incident or event and upload it to the app.",
  },
  {
    title: "Automated Form Filling",
    description:
      "Let our smart system identify the details and fill out the report for you.",
  },
  {
    title: "Anonymity Ensured",
    description:
      "Your identity is encrypted and kept safe. Only the report reaches the admin.",
  },
  {
    title: "Admin Action",
    description:
      "The admin reviews the report, prioritizes it, and takes necessary action",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "AI-powered incident detection",
      "Basic incident reporting",
      "Anonymous reporting",
      "Basic risk analysis",
      "Limited admin access",
    ],
  },
  {
    title: "Pro",
    price: "$15",
    features: [
      "All Free features",
      "Priority risk assessment",
      "Advanced incident categorization",
      "24/7 customer support",
      "Enhanced admin tools",
    ],
  },
  {
    title: "Enterprise",
    price: "$99",
    features: [
      "All Pro features",
      "Custom risk scoring",
      "Dedicated admin panel",
      "API integration for organizations",
      "Unlimited reporting and storage",
    ],
  },
];

export const resourcesLinks = [
  { href: "/send-report", text: "Send Report" },
  { href: "/track-report", text: "Track Report" },
];

export const platformLinks = [
  { href: "/#features", text: "Features" },
  { href: "/#workflow", text: "Work Flow" },
  { href: "/#pricing", text: "Pricing" },
  { href: "/#testimonials", text: "Testimonials" },
];

export const communityLinks = [
  { href: "/auth/signin", text: "Sign In" },
  { href: "/auth/signup", text: "Sign Up" },
];
