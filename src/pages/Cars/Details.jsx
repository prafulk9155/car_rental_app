"use client";

import React from "react";
import { StickyScroll } from "../../components/ui/sticky-scroll-reveal.jsx";
import Image from "next/image";
// import img from '../../../public/images/carDetails/front.png'

const content = [
  {
    title: "Front Part",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    image: "../../../public/images/carDetails/front.png", // Replace with actual image path
  },
  {
    title: "Right Part",
    description:
      "See changes as they happen. With our platform, you can track every modification in real-time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    image: "../../../public/images/carDetails/right.png"
  },
  {
    title: "Back Part ",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates.",
    image: "../../../public/images/carDetails/back.png", // Replace with actual image path
  },
  {
    title: "Left Part",
    description:
      "Stay in the loop, keep your team aligned. Maintain the flow of your work without any interruptions with our platform's features.",
    image: "../../../public/images/carDetails/left.png", // Replace with actual image path
  },
];

export function CarDetailsStickyScroll() {
  return (
    <div className="p-10">
      <StickyScroll
        content={content.map((item) => ({
          title: item.title, // Leaving title blank since we're not using it
          description: item.description,
          content: (
            <div className="h-full w-full flex items-center justify-center">
              <img
                src={item.image}
                width={600} // Adjust width as needed
                height={400} // Adjust height as needed
                className="h-full w-full object-cover"
                alt="Descriptive alt text" // Update with proper alt text
              />
            </div>
          ),
        }))}
      />
    </div>
  );
}
