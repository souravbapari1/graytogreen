import { PopupContent } from "@/components/GMapBox/Parts/PopupContent";
import Footer from "@/components/sections/Footer/Footer";
import FooterTop from "@/components/sections/Footer/FooterTop";
import Navbar from "@/components/sections/Navbar/Navbar";
import { montserrat } from "@/fonts/font";
import React from "react";
import FilterTab, { MobFilterTab } from "./FilterTab";
import { ProjectType } from "@/interface/project";
function getBackgroundColor(percentage: number): string {
  if (percentage >= 80) {
    return "bg-green-500"; // Green for >= 80%
  } else if (percentage >= 50) {
    return "bg-orange-500"; // Orange for >= 50%
  } else {
    return "bg-red-500"; // Red for < 50%
  }
}

const projects: ProjectType[] = [
  {
    image:
      "https://assets.newatlas.com/dims4/default/5eb1316/2147483647/strip/true/crop/1919x1080+0+0/resize/1919x1080!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fplant-brain-2.jpg",
    type: "Carbon Project",
    count: 100,
    country: "India",
    price: 123,
    status: "active",
  },
  {
    image:
      "https://assets.newatlas.com/dims4/default/5eb1316/2147483647/strip/true/crop/1919x1080+0+0/resize/1919x1080!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fplant-brain-2.jpg",
    type: "Carbon Project",
    count: 200,
    country: "Brazil",
    price: 150,
    status: "completed",
  },
  {
    image:
      "https://assets.newatlas.com/dims4/default/5eb1316/2147483647/strip/true/crop/1919x1080+0+0/resize/1919x1080!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fplant-brain-2.jpg",
    type: "Plastic Project",
    count: 500,
    country: "Kenya",
    price: 230,
    status: "top",
  },
  {
    image:
      "https://assets.newatlas.com/dims4/default/5eb1316/2147483647/strip/true/crop/1919x1080+0+0/resize/1919x1080!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fplant-brain-2.jpg",
    type: "Carbon Project",
    count: 350,
    country: "Australia",
    price: 180,
    status: "active",
  },
  {
    image:
      "https://assets.newatlas.com/dims4/default/5eb1316/2147483647/strip/true/crop/1919x1080+0+0/resize/1919x1080!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fplant-brain-2.jpg",
    type: "Plastic Project",
    count: 600,
    country: "South Africa",
    price: 210,
    status: "completed",
  },
  {
    image:
      "https://assets.newatlas.com/dims4/default/5eb1316/2147483647/strip/true/crop/1919x1080+0+0/resize/1919x1080!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fplant-brain-2.jpg",
    type: "Plastic Project",
    count: 450,
    country: "Indonesia",
    price: 195,
    status: "active",
  },
  {
    image:
      "https://assets.newatlas.com/dims4/default/5eb1316/2147483647/strip/true/crop/1919x1080+0+0/resize/1919x1080!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fplant-brain-2.jpg",
    type: "Carbon Project",
    count: 120,
    country: "Canada",
    price: 170,
    status: "top",
  },
  {
    image:
      "https://assets.newatlas.com/dims4/default/5eb1316/2147483647/strip/true/crop/1919x1080+0+0/resize/1919x1080!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fplant-brain-2.jpg",
    type: "Plastic Project",
    count: 300,
    country: "Germany",
    price: 130,
    status: "completed",
  },
  {
    image:
      "https://assets.newatlas.com/dims4/default/5eb1316/2147483647/strip/true/crop/1919x1080+0+0/resize/1919x1080!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fplant-brain-2.jpg",
    type: "Tree Project",
    count: 800,
    country: "Norway",
    price: 250,
    status: "active",
  },
  {
    image:
      "https://assets.newatlas.com/dims4/default/5eb1316/2147483647/strip/true/crop/1919x1080+0+0/resize/1919x1080!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fplant-brain-2.jpg",
    type: "Tree Project",
    count: 900,
    country: "Finland",
    price: 300,
    status: "completed",
  },
];

function Projects() {
  return (
    <div className="relative">
      <Navbar />
      <MobFilterTab />
      <div className={`${montserrat.className} container`}>
        <div className=" grid lg:grid-cols-12  gap-10  py-5 relative">
          <div className="xl:col-span-3 lg:col-span-4 mt-5 lg:block hidden">
            <FilterTab />
          </div>
          <div className="xl:col-span-9 lg:col-span-8">
            <div className="flex justify-end items-end">
              <h1 className="font-bold text-xl">Project : 30</h1>
            </div>
            <div className=" grid xl:grid-cols-3   md:grid-cols-2  gap-6">
              {projects.map((e, i) => {
                return (
                  <PopupContent
                    className="w-full mt-3 text-sm"
                    key={"project_" + i}
                    data={e}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <FooterTop />
      <Footer />
    </div>
  );
}

export default Projects;
