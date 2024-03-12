import "./index.css";

function Card(props) {
  const { author, country, language, pages, title, year } = props.book;
  return (
    <>
      <div className="card-wrapper">
        <h3>{author}</h3>
        <h3>{country}</h3>
        <h3>{language}</h3>
        <h3>{pages}</h3>
        <h3>{title}</h3>
        <h3
          style={{
            backgroundColor: year > 1940 ? "green" : "orange",
            color: "white",
            width: "50px",
          }}
        >
          {year}
        </h3>
      </div>
    </>
  );
}

export default Card;
