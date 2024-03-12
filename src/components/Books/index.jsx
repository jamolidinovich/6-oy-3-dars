import Card from "../Card";
import "./index.css";
function Books(props) {
  const { books } = props;

  return (
    <>
      <div className="container">
        {books.map((v, i) => {
          return <Card key={i} book={v} />;
        })}
      </div>
    </>
  );
}

export default Books;
