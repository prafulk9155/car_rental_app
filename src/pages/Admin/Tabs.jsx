"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Tabs } from "../../components/ui/tabs.jsx";
import tabsData from '../../../public/json/tabs.json'; 
import { CarDetailsStickyScroll } from "../Cars/Details.jsx";
import Feedback from "../User/Feedback.jsx";


export function TabsComponent() {
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    // Check if tabsData is valid
    if (tabsData && Array.isArray(tabsData)) {
      const formattedTabs = tabsData.map((tab) => ({
        ...tab,
        content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
            <p>{tab.content}</p>
            <Feedback  />
          </div>
        ),
      }));
      setTabs(formattedTabs);
    }
  }, []); 


  if (!tabs.length) {
    return <div>Loading tabs...</div>; // Optionally, you can show a loading message or spinner
  }

  return (
    <div className=" h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full mt-5 items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8cn4jJMtRrCSMb2QI7HSowmxfVeEmRbZBlg&s"
      alt="dummy image"
      width={1000}
      height={1000}
      className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
