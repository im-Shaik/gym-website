import React, { useRef, useEffect, useState } from "react";

function Banner() {
  const [words, setWords] = useState([]);
  const [isHover, setHoveredIndex] = useState(null);
  const paraRef = useRef();

  useEffect(() => {
    if (paraRef.current) {
      const paragraphText = paraRef.current.innerText;
      const newWords = paragraphText.split(" ");
      setWords(newWords);
    }
  }, [paraRef]);

  return (
    <section
      style={{
        height: "100vh",
        backgroundColor: "white",
        padding: "20px",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "70px",
          }}
        >
          Welcome to Our{" "}
          <span
            style={{
              color: "purple",
            }}
          >
            GyM.
          </span>
        </h1>
        <p
          style={{
            display: "none",
          }}
          ref={paraRef}
        >
          Welcome to our gym, where your fitness goals come to life! Whether
          you're a seasoned athlete or a beginner taking your first step towards
          a healthier lifestyle, our gym is the perfect place to achieve your
          goals. We provide a welcoming and motivating environment with
          top-of-the-line equipment, a wide variety of classes, and expert
          trainers ready to support you every step of the way. From
          high-intensity interval training and strength training to yoga and
          Pilates, our diverse range of group classes caters to all fitness
          levels. If you prefer a personalized approach, our certified personal
          trainers will design a custom workout plan to help you reach your
          specific targets. More than just a gym, we are a community committed
          to helping you feel your best. Join us today to experience a place
          where fitness meets fun, and every workout brings you closer to a
          healthier, stronger, and more confident version of yourself. Your
          journey starts here—let’s make it amazing!
        </p>
        <p>
          {words.map((word, index) => (
            <span
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                fontSize: "20px",

                display: "inline-block",
                marginRight: "5px",
                color: isHover === index ? "purple" : "gray",
                transform: isHover === index ? "scale(1.3)" : "",
                cursor: "pointer",
                transition: "all 0.4s",
              }}
            >
              {word}{" "}
            </span>
          ))}
        </p>
      </div>
      <hr />
    </section>
  );
}

export default Banner;
