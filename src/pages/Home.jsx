import  { useEffect, useState } from "react";
import MainLayout from "../layouts/Main_layout";
import Slider from "../components/slider/Slider";
import Render from "../components/card/Card";

function Home() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, []);

  return (
    <div className="max-w-[1360px] w-full mx-auto">
      <MainLayout>
        <Slider />
        <Render data={movie} />
      </MainLayout>
    </div>
  );
}

export default Home;
