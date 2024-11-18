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
      className="card mb-3 border-dark rounded-t-lg shadow transition ease-in-out 
                    delay-150 hover:-translate-y-1 hover:scale-102 duration-300"
    >
      <div className="card-body row bg-dark text-white m-0">
        <div className="col-7">
          <h2 className="mb-3">{title}</h2>
          <button className="flex flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0,0,256,256"
            >
              <g
                fill="#ffffff"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
              >
                <g transform="scale(5.33333,5.33333)">
                  <path d="M11.5,6c-3.01977,0 -5.5,2.48023 -5.5,5.5v25c0,3.01977 2.48023,5.5 5.5,5.5h25c3.01977,0 5.5,-2.48023 5.5,-5.5v-25c0,-3.01977 -2.48023,-5.5 -5.5,-5.5zM11.5,9h25c1.39823,0 2.5,1.10177 2.5,2.5v25c0,1.39823 -1.10177,2.5 -2.5,2.5h-25c-1.39823,0 -2.5,-1.10177 -2.5,-2.5v-25c0,-1.39823 1.10177,-2.5 2.5,-2.5zM15.5,13c-1.38071,0 -2.5,1.11929 -2.5,2.5c0,1.38071 1.11929,2.5 2.5,2.5c1.38071,0 2.5,-1.11929 2.5,-2.5c0,-1.38071 -1.11929,-2.5 -2.5,-2.5zM14,20c-0.553,0 -1,0.447 -1,1v13c0,0.553 0.447,1 1,1h3c0.553,0 1,-0.447 1,-1v-13c0,-0.553 -0.447,-1 -1,-1zM21,20c-0.553,0 -1,0.447 -1,1v13c0,0.553 0.447,1 1,1h3c0.553,0 1,-0.447 1,-1v-7.5c0,-1.379 1.121,-2.5 2.5,-2.5c1.379,0 2.5,1.121 2.5,2.5v7.5c0,0.553 0.447,1 1,1h3c0.553,0 1,-0.447 1,-1v-8c0,-3.309 -2.691,-6 -6,-6c-1.538,0 -2.937,0.58602 -4,1.54102v-0.54102c0,-0.553 -0.447,-1 -1,-1z"></path>
                </g>
              </g>
            </svg>
          </button>
          <ul>
            <li>Type: {type}</li>
            <li>Role: {role} </li>
            <li>Engine: {engine}</li>
          </ul>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isExpanded
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0 delay-75"
            }`}
          >
            {isExpanded && (
              <div className=" flex-wrap p-3 bg-dark text-white">
                {description && (
                  <p className="mt-3 text-gray-300">{description}</p>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="col-5">
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
