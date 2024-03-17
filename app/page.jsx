import ImageCarousel from "@/components/ImageCarousel";
import Image from "next/image";

const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Home() {
  return (
    <div>
      <ImageCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
}
