import React from "react";
import Layout from "../components/Layout/Layout";
import { menu,nonVeg } from "../Data/Data";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";

const Menu = () => {
  return (
    <Layout>
      <Typography variant="h4" sx={{my:4,textAlign:'center'}}>Pure-Veg</Typography>
      <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
        {menu.map((currentElement) => {
          return (
            <Card sx={{maxWidth:"390px",m:2}}>
              <CardActionArea>
                <CardMedia
                  sx={{ minHeight: "400px" }}
                  src={currentElement.image}
                  component={"img"}
                  alt={currentElement.name}
                />
                <CardContent>
                 <Typography variant="h5">{currentElement.name}</Typography>
                 <Typography component={'p'}>{currentElement.description}</Typography>
                 <Typography variant="h6">Price : {currentElement.price}₹</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
        </Box>
          <Typography variant="h4" sx={{my:4,textAlign:'center'}}>Non-Veg</Typography>
        <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center",my:2}}>
        {
          nonVeg.map((currentElement)=>{
            return(
              <Card sx={{maxWidth:"390px",m:2}}>
                <CardActionArea>
                  <CardMedia
                    sx={{ minHeight: "400px" }}
                    src={currentElement.image}
                    component={"img"}
                    alt={currentElement.name}
                  />
                  <CardContent>
                 <Typography variant="h5">{currentElement.name}</Typography>
                 <Typography component={'p'}>{currentElement.description}</Typography>
                 <Typography variant="h6">Price : {currentElement.price}₹</Typography>
                </CardContent>
                </CardActionArea>
              </Card>
            )
          })
        }
        
      </Box>
    </Layout>
  );
};

export default Menu;
