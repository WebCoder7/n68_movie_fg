import MainLayout from "../layouts/Main_layout/index";
import Slider from "../components/slider/Slider";
import Render from "../components/card/Card";
import useFetchData from "../hook/Fetch";

function Home() {
  const { data: movieData, isLoading, error } = useFetchData("/movies");
  

  if (isLoading)
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    );

  if (error) return <div>Error loading movies...</div>;

  return (
    <div className="main-container">
      <MainLayout>
        <Slider />
        <Render data={movieData} />
      </MainLayout>
    </div>
  );
}

export default Home;
