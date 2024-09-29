import { useEffect, useState } from "react";
import axios from "axios";
import MainLayout from "../layouts/Main_layout";
import Slider from "../components/slider/Slider";
import Render from "../components/card/Card";

function Home() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMovies();
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
