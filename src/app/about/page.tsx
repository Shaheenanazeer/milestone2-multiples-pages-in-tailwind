import React from "react";

const About = () => {
  return (
    <div>
      <section
        className="about bg-cover bg-center h-screen p-5 text-white relative"
        style={{ backgroundImage: "url(car3.jpeg)" }}
      >
        <div className="about-content absolute top-5 right-5 max-w-xs p-2 overflow-auto h-44">
          <h2 className="text-lg">About Us</h2>
          <p className="text-xs">
            Welcome to Car website where passion meets performance. We
            specialize in offering a curated selection of high-performance
            vehicles that cater to enthusiasts and everyday drivers alike. Our
            commitment to quality and customer satisfaction ensures that every
            car we offer meets the highest standards. Whether you&apos;re
            seeking the thrill of a sports car or the luxury of a premium sedan,
            our knowledgeable team is here to assist you in finding the perfect
            match.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
