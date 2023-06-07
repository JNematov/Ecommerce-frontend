import { Box } from "@mui/system";
import { useEffect } from "react";
import { useContext } from "react";
import CarouselSlide from "../components/CarouselSlide";
import { ItemsContext } from "../context/ItemsContext";

const Home = () => {
  const { items, dispatch: dispatchItems } = useContext(ItemsContext);

  const fetchItems = async () => {
    const response = await fetch("http://localhost:8000/items/");
    const json = await response.json();
    if (response.ok) {
      dispatchItems({ type: "GET_ITEMS", payload: json });
    } else {
      console.log("error fetching");
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <Box className="Home" sx={{ mx: "auto" }}>
      {items && <CarouselSlide items={items} />}
    </Box>
  );
};

export default Home;
