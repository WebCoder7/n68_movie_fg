import { useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../../layouts/Main_layout/index";
import Bileti from "../../components/bileti/Bileti";
import About_film from "../../components/film/About_film";
import useFetchData from "../../hook/Fetch";
import "./Detail.css"; 

const DetailPage = () => {
  const { id } = useParams();
  const [tab, setTab] = useState(1);

  const { data: movie, isLoading } = useFetchData(`/movies/${id}`);

  if (isLoading) {
    return (
      <div className="loader-wrapper">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <MainLayout>
      <div className="movie-image-section">
        <img src={movie.img} alt="" className="movie-image" />
        <div className="image-overlay"></div>
        <h1 className="movie-title">{movie.title}</h1>
      </div>

      <div className="tab-buttons-container">
        <button
          onClick={() => setTab(1)}
          className={`tab-button ${tab === 1 ? "active-tab" : ""}`}
        >
          Билеты
        </button>
        <button
          onClick={() => setTab(2)}
          className={`tab-button ${tab === 2 ? "active-tab" : ""}`}
        >
          О фильме
        </button>
      </div>
      {tab === 1 ? <Bileti /> : <About_film set={setTab} />}
    </MainLayout>
  );
};

export default DetailPage;
