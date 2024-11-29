import { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Card from "../UI/Card/Card";

export default function Gallery() {
  const cards = [
    {
      date: "date",
      time: "time",
      img: "src/assets/free-icon-sun-365237.png",
      temp: "temp",
    },
    {
      date: "date",
      time: "time",
      img: "src/assets/free-icon-sun-365237.png",
      temp: "temp",
    },
    {
      date: "date",
      time: "time",
      img: "src/assets/free-icon-sun-365237.png",
      temp: "temp",
    },
    {
      date: "date",
      time: "time",
      img: "src/assets/free-icon-sun-365237.png",
      temp: "temp",
    },
    {
      date: "date",
      time: "time",
      img: "src/assets/free-icon-sun-365237.png",
      temp: "temp",
    },
    {
      date: "date",
      time: "time",
      img: "src/assets/free-icon-sun-365237.png",
      temp: "temp",
    },
    {
      date: "date",
      time: "time",
      img: "src/assets/free-icon-sun-365237.png",
      temp: "temp",
    },
    {
      date: "date",
      time: "time",
      img: "src/assets/free-icon-sun-365237.png",
      temp: "temp",
    },
    {
      date: "date",
      time: "time",
      img: "src/assets/free-icon-sun-365237.png",
      temp: "temp",
    },
    {
      date: "date",
      time: "time",
      img: "src/assets/free-icon-sun-365237.png",
      temp: "temp",
    },
    {
      date: "date",
      time: "time",
      img: "src/assets/free-icon-sun-365237.png",
      temp: "temp",
    },
    {
      date: "date",
      time: "time",
      img: "src/assets/free-icon-sun-365237.png",
      temp: "temp",
    },
    {
      date: "date",
      time: "time",
      img: "src/assets/free-icon-sun-365237.png",
      temp: "temp",
    },
    {
      date: "date",
      time: "time",
      img: "src/assets/free-icon-sun-365237.png",
      temp: "temp",
    },
  ];

  let userScreenWidth;
  const scrollRef = useRef();
  const [isVisibleLeft, setIsVisibleLeft] = useState(false);
  const [isVisibleRight, setIsVisibleRight] = useState(true);

  function scroll(direction) {
    direction === "left"
      ? scrollRef.current.scrollBy({ left: -500, behavior: "smooth" })
      : scrollRef.current.scrollBy({ left: 500, behavior: "smooth" });
  }

  window.onload = () => {
    userScreenWidth = window.innerWidth;
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      updateArrowsVisibility();
    });
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", updateArrowsVisibility);
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", updateArrowsVisibility);
      }
    };
  }, []);

  function updateArrowsVisibility() {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const scrollWidth = scrollRef.current.scrollWidth;
      const clientWidth = scrollRef.current.clientWidth;

      setIsVisibleLeft(scrollLeft > 0);
      setIsVisibleRight(scrollLeft + clientWidth < scrollWidth);
    }
  }

  return (
    <div className="wrapper">
      {isVisibleLeft && (
        <div className="left-arrow-holder" onClick={() => scroll("left")}>
          <IoIosArrowBack className="left-arrow" />
        </div>
      )}
      <div className="gallery" ref={scrollRef}>
        {cards.map((card, idx) => {
          return (
            <Card
              key={idx}
              date={card.date}
              time={card.time}
              img={card.img}
              temp={card.temp}
            />
          );
        })}
      </div>
      {isVisibleRight && (
        <div className="right-arrow-holder" onClick={() => scroll("right")}>
          <IoIosArrowForward className="right-arrow" />
        </div>
      )}
    </div>
  );
}
