import { Carousel, Typography } from "antd";

export function CarouselBox() {
  return (
    <section className="bg-black rounded-xl lg:grid hidden col-span-2 overflow-hidden">
      <Carousel autoplay className="max-w-[462px] h-[400px]">
        <div className="w-full h-[400px] relative">
          <img
            className="z-[-1] block w-full h-full object-cover opacity-70"
            src="img/dashboard/carousel/carousel-img-1.svg"
            alt=""
          />
          <div className="absolute text-white bottom-10 left-10 max-w-[300px]">
            <Typography.Title style={{ color: '#fff' }} level={3}>Get started with Argon</Typography.Title>
            <p className="text-lg mt-[-10px]">There’s nothing I really wanted to do in life that I wasn’t able to get
              good at.</p>
          </div>
        </div>

        <div className="w-full h-[400px] relative">
          <img
            className="block w-full h-full object-cover opacity-70"
            src="img/dashboard/carousel/carousel-img-2.svg"
            alt=""
          />
          <div className="absolute text-white bottom-10 left-10 max-w-[300px]">
            <Typography.Title style={{ color: '#fff' }} level={3}>Faster way to create web pages</Typography.Title>
            <p className="text-lg mt-[-10px]">That’s my skill. I’m not really specifically talented at anything except
              for the ability to learn.</p>
          </div>
        </div>

        <div className="w-full h-[400px] relative">
          <img
            className="block w-full h-full object-cover opacity-70"
            src="img/dashboard/carousel/carousel-img-3.svg"
            alt=""
          />
          <div className="absolute text-white bottom-10 left-10 max-w-[300px]">
            <Typography.Title style={{ color: '#fff' }} level={3}>Share with us your design tips!</Typography.Title>
            <p className="text-lg mt-[-10px]">Don’t be afraid to be wrong because you can’t learn anything from a
              compliment.</p>
          </div>
        </div>
      </Carousel>
    </section>
  )
}