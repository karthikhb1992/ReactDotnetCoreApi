import { LoadingButton } from "@mui/lab";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import agent from "../../app/api/agent";
import { useStoreContext } from "../../app/context/StoreContext";
import { Product } from "../../app/models/product";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { currencyFormat } from "../../app/util/util";
import { addBasketItemAsync, setBasket } from "../basket/basketSlice";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const {status} = useAppSelector(state => state.basket);
  const dispatch = useAppDispatch();

  
  return (
    <Card>
      <CardHeader
        avatar={<Avatar sx= {{bgcolor:'secondary.main'}}>
          {product.name.charAt(0).toUpperCase()}
          </Avatar>}
        title={product.name}
        titleTypographyProps = {{
          sx: {fontWeight : 'bold' , color:'primary.main'}
        }}
      />
      <CardMedia
        sx ={{height: 140 , backgroundSize: 'contain' , bgcolor:'primary.light' }}
        component="img"
        height="140"
        image={product.pictureUrl}
        title = {product.name}
      />
      <CardContent>
        <Typography gutterBottom color='secondary' variant="h5">
          {currencyFormat(product.price)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {product.brand} / {product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <LoadingButton
            loading = {status.includes('pendingAddItem' + product.id)} 
            onClick={() => dispatch(addBasketItemAsync({productId:product.id}))} 
            size="small">Add to cart</LoadingButton>
        <Button component={Link} to={`/catalog/${product.id}`} size="small">View</Button>
      </CardActions>
    </Card>
  );
}
