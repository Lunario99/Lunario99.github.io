"use client";
import { useState } from "react";
import GenericCarousel from "./GenericCarousel";

export default function Project({
  title,
  type,
  role,
  engine,
  description,
  gallery,
}: {
  title: string;
  type: string;
  role: string;
  engine: string;
  description: string;
  gallery: string[];
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div
      className="mb-3 border-dark bg-dark rounded shadow transition ease-in-out 
                    delay-150 hover:-translate-y-1 hover:scale-102 duration-300"
    >
      <div className="row text-white m-0">
        <div className="col-12">
          <h2 className="mt-2 mb-2">{title}</h2>
        </div>
        <GenericCarousel gallery={gallery} />
        <ul className="col-12 col-md-7 pb-2">
          <li>
            <span className="text-blue-300 fw-bold">Type</span> - {type}
          </li>
          <li>
            <span className="text-blue-300 fw-bold">Role</span> - {role}
          </li>
          <li>
            <span className="text-blue-300 fw-bold">Engine</span> - {engine}
          </li>
          <li className="pt-2 text-gray-300">{description}</li>
        </ul>
      </div>
    </div>
  );
}
