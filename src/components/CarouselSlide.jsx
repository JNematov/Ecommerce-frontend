import ItemDetails from "./ItemDetails";

const CarouselSlide = ({ items }) => {
  return (
    <div>
      <h2> Trending items </h2>
      <div style={{ display: "flex", width: "100%", overflowX: "scroll" }}>
        {items.map((item) => (
          <ItemDetails style={{ marginRight: "0.8rem" }} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CarouselSlide;
