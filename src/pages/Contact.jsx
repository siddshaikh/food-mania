import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Divider, Typography } from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';

const Contact = () => {
  return <Layout>
    <Box sx={{my:15,mx:15,"& h4":{margin:"10px"},"& p":{margin:"10px"},}}>
      <Typography variant="h4">Contact Our Restaurant</Typography>
      <p style={{alignContent:"center"}}><LocalPhoneIcon/>1800-000-00-0</p>
      <p>35  Himalaya Street  Th Rd Santacruz, Mumbai,Mumbai,400055,India</p>
      <p style={{alignItems:"center"}}><MailIcon/>  foodmania@demo.com</p>
      <Divider/>
    </Box>
  </Layout>;
};

export default Contact;
