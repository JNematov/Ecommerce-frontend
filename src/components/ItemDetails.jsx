import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StyledEngineProvider, CssVarsProvider } from "@mui/joy/styles";
import useFetchCart from "../hooks/useFetchCart";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function ItemDetails({ item }) {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const { cart, dispatch: dispatchCart } = useContext(CartContext);

  const incrementCart = async () => {
    item.count++;
    await fetch("http://localhost:8000/items/cart/" + item._id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        name: item.name,
        price: item.price,
        image: item.image,
        count: item.count,
      }),
    });
  };

  const createItem = async () => {
    const response = await fetch("http://localhost:8000/items/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        name: item.name,
        price: item.price,
        image: item.image,
        count: item.count + 1,
      }),
    });
    const json = await response.json();
    if (response.ok) {
      dispatchCart({ type: "ADD_CART", payload: json });
    }
  };

  const handleAddToCart = async (e, item) => {
    e.preventDefault();
    if (!user) {
      navigate("/login");
      console.log("user not found");
    } else {
      if (cart == null) {
        console.log("creating new item");
        createItem();
      } else {
        console.log("existing item");
        incrementCart();
      }
    }
  };

  return (
    <StyledEngineProvider injectFirst>
      <CssVarsProvider>
        <div style={{ marginRight: "0.7rem" }}>
          <Card variant="outlined" sx={{ width: 200 }}>
            <IconButton
              aria-label="bookmark Bahamas Islands"
              variant="plain"
              color="neutral"
              size="sm"
              sx={{
                position: "absolute",
                top: "0.5rem",
                right: "0.5rem",
                mb: 1,
              }}
            ></IconButton>
            <AspectRatio sx={{ mb: 2 }} objectFit="contain">
              <img
                src={item.image}
                srcSet={item.image}
                alt="A beautiful landscape."
              />
            </AspectRatio>
            <Typography level="h2" fontSize="md" sx={{ mb: 1 }}>
              {item.name}
            </Typography>
            <Box sx={{ display: "flex" }}>
              <div>
                <Typography fontSize="lg" fontWeight="lg">
                  ${item.price}
                </Typography>
              </div>
              <IconButton
                sx={{ ml: "auto", fontWeight: 600 }}
                color="primary"
                aria-label="add to shopping cart"
                onClick={(e) => handleAddToCart(e, item)}
              >
                <AddShoppingCartIcon />
              </IconButton>
            </Box>
          </Card>
        </div>
      </CssVarsProvider>
    </StyledEngineProvider>
  );
}
