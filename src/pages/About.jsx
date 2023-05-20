import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Divider, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box sx={{my:15,textAlign:"center",p:2} }>
        <Typography variant="h4">Welcome to My Restaurant</Typography>
        <Divider/>
        <p>
          As far back as I can remember, I have always liked going out to eat.
          Two of my favorite restaurants are Jake’s and McDonald’s. Though both
          are places to dine they have their differences in their ambiance,
          waiting, and expense. When deciding where to go to eat, I have three
          things to think about. I must consider the atmosphere or where I want
          to go. The amount of time I have is another consideration. The amount
          of money that I am able to spend is a big influence.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
