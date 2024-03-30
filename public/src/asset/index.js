import geminiIcon from "./gemini_sparkle_blue_33c17e77c4ebbdd9490b683b9812247e257b6f70.svg";
import advanceGeminiIcon from "./gemini_sparkle_red_4ed1cbfcbc6c9e84c31b987da73fc4168aec8445.svg";
import avatarIcon from "./avater-icon.png";
import chatGeminiIcon from "./bard_sparkle_v2.svg";
import geminiLaoder from "./bard_sparkle_processing_v2_loader.gif";
import googleLogo from "./icons8-google-48.png";
import ytIcon from "./icons8-youtube-48.png";
import flightIcon from "./icons8-flight-64.png";
import mapIcon from "./icons8-google-maps-48.png";
import hotelIcon from "./icons8-hotel-48.png";
import sportsIcon from "./icons8-man-winner-48.png";
import googleBigIcon from "./icons8-google-144.png";

import { darkIcon } from "./darkIcon/darkIcon";
import { lightIcon } from "./lightIcon/lightIcon";

export const commonIcon = {
  geminiIcon,
  advanceGeminiIcon,
  avatarIcon,
  chatGeminiIcon,
  geminiLaoder,
  googleLogo,
  ytIcon,
  flightIcon,
  mapIcon,
  hotelIcon,
  googleBigIcon,
};

export const themeIcon = () => {
  const localTheme = localStorage.getItem("theme") || "dark";
  const icon = localTheme === "dark" ? darkIcon : lightIcon;

  return icon;
};

export const suggestPrompt = [
  {
    id: 1,
    sort: "Recommend healthy meal plans for managing diabetes",
    long: "I'm looking for healthy meal plans that can help me manage my diabetes. What are some nutritious and balanced options?",
    icon: "ideaIcon",
  },
  {
    id: 2,
    sort: "Understand the side effects of a specific medication",
    long: "I've been prescribed [medication name]. Can you explain the potential side effects and how I can manage them?",
    icon: "ideaIcon",
  },
  {
    id: 3,
    sort: "Learn about alternative treatments for chronic pain management",
    long: "I'm exploring alternative treatments for managing my chronic pain. What are some options I can consider?",
    icon: "ideaIcon",
  },
  {
    id: 4,
    sort: "Find support groups for individuals with [specific condition]",
    long: "I've recently been diagnosed with [specific condition]. Can you help me find support groups or online communities where I can connect with others going through similar experiences?",
    icon: "ideaIcon",
  },
  {
    id: 5,
    sort: "Explore exercises for improving mobility after surgery",
    long: "I'm recovering from [type of surgery] and looking for exercises to improve my mobility and strength. What exercises do you recommend?",
    icon: "ideaIcon",
  },
  {
    id: 6,
    sort: "Understand the basics of managing stress and anxiety",
    long: "I've been feeling overwhelmed and anxious lately. Can you provide some tips for managing stress and anxiety?",
    icon: "ideaIcon",
  },
  {
    id: 7,
    sort: "Learn about the benefits of regular physical activity",
    long: "I want to start incorporating more physical activity into my daily routine. What are the benefits of regular exercise for overall health?",
    icon: "ideaIcon",
  },
  {
    id: 8,
    sort: "Understand the importance of preventive screenings",
    long: "I've heard about preventive screenings but I'm not sure why they're important. Can you explain their significance and which screenings I should consider?",
    icon: "ideaIcon",
  },
  {
    id: 9,
    sort: "Find tips for managing chronic conditions while traveling",
    long: "I have a chronic condition and I'm planning to travel. What are some tips for managing my condition while on the go?",
    icon: "ideaIcon",
  },
  {
    id: 10,
    sort: "Explore relaxation techniques for better sleep",
    long: "I have trouble sleeping at night. Can you suggest relaxation techniques or bedtime routines that may help me sleep better?",
    icon: "ideaIcon",
  },
  {
    id: 11,
    sort: "Understand the importance of vaccination for adults",
    long: "I'm unsure about the importance of vaccination as an adult. Can you explain why vaccines are recommended for adults and which ones I may need?",
    icon: "ideaIcon",
  },
  {
    id: 12,
    sort: "Learn about self-care practices for mental well-being",
    long: "I want to prioritize my mental well-being and practice self-care. What are some self-care practices I can incorporate into my daily life?",
    icon: "ideaIcon",
  },
  {
    id: 13,
    sort: "Find resources for quitting smoking",
    long: "I'm ready to quit smoking but I'm not sure where to start. Can you provide resources or tips to help me quit?",
    icon: "ideaIcon",
  },
  {
    id: 14,
    sort: "Explore dietary changes for managing high blood pressure",
    long: "I've been diagnosed with high blood pressure and I'm looking to make dietary changes. What foods should I focus on or avoid?",
    icon: "ideaIcon",
  },
  {
    id: 15,
    sort: "Understand the benefits of regular check-ups with a primary care physician",
    long: "I haven't been to a primary care physician in a while. Can you explain the benefits of regular check-ups and screenings?",
    icon: "ideaIcon",
  },
  {
    id: 16,
    sort: "Learn about home remedies for common ailments",
    long: "I prefer natural remedies for minor ailments. Can you suggest some effective home remedies for common health issues?",
    icon: "ideaIcon",
  },
  {
    id: 17,
    sort: "Understand the importance of mental health awareness",
    long: "I want to learn more about mental health awareness. Can you explain why it's important and how I can support mental health initiatives?",
    icon: "ideaIcon",
  },
  {
    id: 18,
    sort: "Find resources for managing chronic pain without medication",
    long: "I'm looking for non-medication approaches to manage my chronic pain. Can you recommend resources or techniques?",
    icon: "ideaIcon",
  },
  {
    id: 19,
    sort: "Learn about the benefits of regular exercise for mental health",
    long: "I'm interested in improving my mental health through exercise. Can you explain how physical activity can benefit mental well-being?",
    icon: "ideaIcon",
  },
  {
    id: 20,
    sort: "Explore mindfulness techniques for stress reduction",
    long: "I want to reduce stress and practice mindfulness. What techniques or exercises can help me incorporate mindfulness into my daily life?",
    icon: "ideaIcon",
  },
  {
    id: 21,
    sort: "Understand the importance of hydration for overall health",
    long: "I don't drink enough water and I want to understand why hydration is important for overall health. Can you explain?",
    icon: "ideaIcon",
  },
  {
    id: 22,
    sort: "Find resources for managing allergies",
    long: "I suffer from allergies and I'm looking for resources to help manage my symptoms. Can you recommend any?",
    icon: "ideaIcon",
  },
  {
    id: 23,
    sort: "Learn about the benefits of regular physical activity during pregnancy",
    long: "I'm pregnant and want to understand the benefits of staying physically active. Can you explain how exercise can benefit me during pregnancy?",
    icon: "ideaIcon",
  },
  {
    id: 24,
    sort: "Explore relaxation techniques for pain management",
    long: "I experience chronic pain and I'm looking for relaxation techniques to help manage it. Can you suggest any?",
    icon: "ideaIcon",
  },
  {
    id: 25,
    sort: "Understand the importance of sleep for overall health",
    long: "I struggle with sleep and I want to understand why it's important for overall health. Can you explain?",
    icon: "ideaIcon",
  },
  {
    id: 26,
    sort: "Find resources for managing stress-related headaches",
    long: "I frequently experience stress-related headaches and I'm looking for resources to help manage them. Can you recommend any?",
    icon: "ideaIcon",
  },
  {
    id: 27,
    sort: "Learn about the benefits of regular medical check-ups for preventive care",
    long: "I haven't been to the doctor for regular check-ups in a while. Can you explain the benefits of regular medical check-ups for preventive care?",
    icon: "ideaIcon",
  },
  {
    id: 28,
    sort: "Understand the importance of mental health support",
    long: "I want to learn more about mental health support services. Can you explain their importance and how they can help?",
    icon: "ideaIcon",
  },
  {
    id: 29,
    sort: "Find resources for managing chronic conditions through diet and lifestyle changes",
    long: "I have a chronic condition and I'm interested in managing it through diet and lifestyle changes. Can you recommend resources or strategies?",
    icon: "ideaIcon",
  },
  {
    id: 30,
    sort: "Learn about the benefits of physical therapy for injury recovery",
    long: "I've recently had an injury and I'm considering physical therapy for recovery. Can you explain the benefits of physical therapy and what to expect?",
    icon: "ideaIcon",
  },
];


