"use client"
import { useState } from "react";

export default function Project({title, type, role, engine, description, image, gallery = []}: {
title: string,
    type: string,
    role: string,
    engine: string,
    description?: string,
    image: string,
    gallery?: string[];
}) {

    const [isExpanded, setIsExpanded] = useState(false);

    return(
        <div className="card mb-3 border-dark rounded-t-lg shadow transition ease-in-out 
                    delay-150 hover:-translate-y-1 hover:scale-102 duration-300">
            <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full text-left"
                aria-expanded={isExpanded}>
                <div className="card-body row bg-dark text-white m-0">
                    <div className="col-7">
                        <h2 className="mb-3">{title}</h2>
                        <ul>
                            <li>Type: {type}</li>
                            <li>Role: {role} </li>
                            <li>Engine: {engine}</li>
                        </ul>
                        <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                            isExpanded ? "max-h-[500px]" : "max-h-0"}`}>
                            {isExpanded && (
                            <div className=" flex-wrap p-3 bg-dark text-white">
                                {description && <p className="mt-3 text-gray-300">{description}</p>}
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
                            )}
                        </div>
                    </div>
                    <div className="col-5">
                        <img src={image} alt="" style={{maxHeight: '320px'}} className="w-100 img-fluid rounded"/>
                    </div>                
                </div>
            </button>
        </div>
  );
}
