"use client";
import { useState } from "react";

export default function Project({
  title,
  type,
  role,
  engine,
  description,
  image,
  gallery = [],
}: {
  title: string;
  type: string;
  role: string;
  engine: string;
  description?: string;
  image: string;
  gallery?: string[];
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="mb-3 border-dark bg-dark rounded shadow transition ease-in-out 
                    delay-150 hover:-translate-y-1 hover:scale-102 duration-300"
    >
      <div className="row text-white m-0">
        <div className="col-7">
          <h2 className="mt-2 mb-2">{title}</h2>
          <ul>
            <li>Type: {type}</li>
            <li>Role: {role} </li>
            <li>Engine: {engine}</li>
          </ul>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isExpanded
                ? "max-h-auto opacity-100 sm:"
                : "max-h-0 opacity-0 delay-75"
            }`}
          >
            {isExpanded && (
              <div className=" flex-wrap bg-dark text-white">
                {description && (
                  <p className="mt-3 text-gray-300">{description}</p>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="p-2 col-4">
          <img
            src={image}
            alt=""
            style={{ maxHeight: "320px" }}
            className="w-100 img-fluid rounded"
          />
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out
            ${
              isExpanded
                ? "max-h-[500px] opacity-100 scale-100 delay-75"
                : "max-h-0 opacity-0 scale-0"
            }`}
        >
          {gallery.length > 0 && (
            <div className="row mt-3">
              {gallery.map((img, index) => (
                <div key={index} className="col-4 mb-3">
                  <img
                    src={img}
                    alt={`Additional image ${index + 1} for project: ${title}`}
                    className="img-fluid rounded"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full text-left"
          aria-expanded={isExpanded}
        >
          <p className="flex flex-col col-3 p-1 hover:bg-slate-500">
            Show more...
          </p>
        </button>
      </div>
    </div>
  );
}
