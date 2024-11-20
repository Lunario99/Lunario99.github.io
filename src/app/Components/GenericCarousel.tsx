import { Carousel } from "react-bootstrap";

export default function GenericCarousel({ gallery }: { gallery: string[] }) {
  return (
    <Carousel className="md:w-[40%] pb-2" controls={false}>
      {gallery.map((img, index) => (
        <Carousel.Item key={index}>
          <img src={img} className="w-100 rounded md:h-96" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
