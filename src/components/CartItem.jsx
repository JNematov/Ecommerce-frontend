import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { UserContext } from "../context/UserContext";
import { CartContext } from "../context/CartContext";
import AspectRatio from "@mui/joy/AspectRatio";

export default function CartItem({ cartItem }) {
  const { user } = useContext(UserContext);
  const { dispatch } = useContext(CartContext);

  const handleRemove = () => {
    cartItem.count > 1 ? decrementItem() : deleteItem();
  };

  const decrementItem = async () => {
    cartItem.count--;
    const { name, price, image, count } = cartItem;
    await fetch("http://localhost:8000/items/cart/" + cartItem._id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ name, price, image, count }),
    });
  };

  const handleAddToCart = async () => {
    cartItem.count++;
    const { name, price, image } = cartItem;
    await fetch("http://localhost:8000/items/cart/" + cartItem._id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ name, price, image, count: cartItem.count }),
    });
  };

  const deleteItem = async () => {
    const response = await fetch(
      "http://localhost:8000/items/cart/" + cartItem._id,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    if (response.ok) {
      dispatch({ type: "DELETE_ITEM", payload: cartItem });
    }
  };

  return (
    <Card sx={{ display: "flex", maxWidth: 500, mb: 3 }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            component="div"
            sx={{ width: 225, whiteSpace: "normal" }}
            variant="h6"
          >
            {cartItem.name}
          </Typography>
          <Typography
            sx={{ ml: "auto" }}
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            ${cartItem.price}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton aria-label="previous" onClick={handleRemove}>
            <RemoveIcon />
          </IconButton>
          <Box>
            <h1>{cartItem.count}</h1>
          </Box>
          <IconButton aria-label="next" onClick={handleAddToCart}>
            <AddIcon />
          </IconButton>
        </Box>
      </Box>
      <AspectRatio sx={{ width: 200, my: "auto" }} objectFit="contain">
        <img
          src={cartItem.image}
          srcSet={cartItem.image}
          alt="A beautiful landscape."
        />
      </AspectRatio>
    </Card>
  );
}
