'use client'
import ImageCarousel from "@/components/ImageCarousel";
import './page.css'




const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = [
  {
    id: 1,
    alt: "Bubbla",
    url: '/Banner.jpg',
  },
  {
    id: 2,
    alt: 'Bubbla o Biggie',
    url: '/Banner_1.jpg'
  }
]

export default function Home() {

  return (
    <main>
      <h1 className="header">BRF Röda Briljant</h1>
      <ImageCarousel slides={SLIDES} options={OPTIONS} />
      <div className="text-center mt-4 col-md-6 mx-auto">
        <h1 className="">Lorem ipsum dolor sit</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis perspiciatis sint quo, optio adipisci blanditiis molestiae quae porro veritatis voluptas, incidunt animi numquam molestias aut? Reiciendis tempora modi nemo deserunt!</p>

      </div>

    </main>
  );
}
