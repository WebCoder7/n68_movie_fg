import './Cinema_data.css'; 

function Cinema_data({ title = "Детали" }) {
  return (
    <div>
      <h5 className="title">{title}</h5>
      <div className="details-container">
        <div className="details-row">
          <p>Продолжительность</p>
          <p>1ч 34м / 94 минут</p>
        </div>
        <div className="details-row">
          <p>Премьера</p>
          <p>07 марта 2024</p>
        </div>
        <div className="details-row">
          <p>Производство</p>
          <p>США, Китай</p>
        </div>
        <div className="details-row">
          <p>Жанр</p>
          <p>Фэнтези, Комедия</p>
        </div>
        <div className="details-row">
          <p>Режиссер</p>
          <p>Майк Митчелл, Стефани Стайн</p>
        </div>
        <div className="details-row">
          <p>Возрастной рейтинг</p>
          <p>6+</p>
        </div>
      </div>
    </div>
  );
}

export default Cinema_data;
