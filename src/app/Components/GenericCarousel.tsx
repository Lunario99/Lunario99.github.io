"use client";
import { Carousel } from "react-bootstrap";

export default function GenericCarousel({ gallery }: { gallery: string[] }) {
  return (
    <Carousel className="md:w-[40%] pb-3" controls={false}>
      {gallery.map((img, index) => (
        <Carousel.Item key={index}>
          <img src={img} className="rounded w-100" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
