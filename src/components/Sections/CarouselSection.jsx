import Carousel from "../Carousel";

function CarouselSection() {
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <Carousel>
        <div className="gallery-item">
          <img
            src="https://i.pinimg.com/564x/ab/c8/26/abc826248b7209e612dcdb41d17e539a.jpg"
            alt="Imagen 1"
          />
        </div>
        <div className="gallery-item">
          <img
            src="https://i.pinimg.com/564x/af/79/53/af79533dada471cac66d6f497358dc8f.jpg"
            alt="Imagen 2"
          />
        </div>

        <div className="gallery-item">
          <img
            src="https://i.pinimg.com/564x/a9/7b/57/a97b5704d70a903cc6ee69aeff3764ad.jpg"
            alt="Imagen 3"
          />
        </div>

        <div className="gallery-item">
          <img
            src="https://i.pinimg.com/564x/9b/83/8e/9b838e1fb2e4295b5b209857eacdfbe2.jpg"
            alt="Imagen 4"
          />
        </div>

        <div className="gallery-item">
          <img
            src="https://i.pinimg.com/564x/b7/1c/92/b71c92aa57ab63ae05ffb24d74c46416.jpg"
            alt="Imagen 5"
          />
        </div>

        <div className="gallery-item">
          <img
            src="https://i.pinimg.com/736x/6c/74/36/6c74369dd0a7edf973ee2a27b4b4e10b.jpg"
            alt="Imagen 5"
          />
        </div>
      </Carousel>
    </section>
  );
}

export default CarouselSection;
