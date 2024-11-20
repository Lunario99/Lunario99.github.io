"use client";
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
  return (
    <div
      className="mb-3 border-dark bg-dark rounded shadow transition ease-in-out 
                    delay-150 hover:-translate-y-1 hover:scale-102 duration-300"
    >
      <div className="row mb-2 text-white m-0">
        <div>
          <h2 className="mt-2 mb-2">{title}</h2>
        </div>
        <GenericCarousel gallery={gallery} />
        <ul className="col-12 col-md-7 pb-2">
          <li className=" text-gray-300">
            <span className="text-blue-300 fw-bold">Type</span> - {type}
          </li>
          <li className=" text-gray-300">
            <span className="text-blue-300 fw-bold">Role</span> - {role}
          </li>
          <li className=" text-gray-300">
            <span className="text-blue-300 fw-bold">Engine</span> - {engine}
          </li>
          <li className="pt-2 text-gray-300">{description}</li>
        </ul>
      </div>
    </div>
  );
}
