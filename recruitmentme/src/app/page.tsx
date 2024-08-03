'use client'

import {Box, Stack, TextField, Typography } from "@mui/material"
import React from "react";
import SignUpForm from "./Components/forms/SignUpForm";
import temporaryImage from './../../public/images/temporaryAppImage.jpg'


export default function Home() {
  return (
      <Box  height="100vh" sx={{backgroundColor: "#F0FFFF"}} position="relative">
        <Typography 
          position="absolute"
          fontSize={30}
          fontWeight={600}
          sx={{
            color: "blue",
            position: "absolute", 
            top: 20, // Adjust as needed
            left: 20, // Adjust as needed
             // Ensure it's above other elements
          }}
          >
          RealHire
        </Typography>
        <Box p={5} height="100%">
          <Stack height="100%" direction={"row"} justifyContent={"space-between"}>
            <Box  
              width="100%"
              sx={{
              backgroundColor: "#F0FFFF",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
              }}>
             
                <Box>
                  <SignUpForm/>
                </Box>
           </Box>
            <Box  
              ml={5}
              width="100%" 
              sx={{
              backgroundImage: 'url(/images/temporaryAppImage.jpg)',
              backgroundRepeat: 'no-repeat',
             backgroundPosition:'center',
             backgroundSize: 'cover',
              borderRadius: 10,
              }}>
            
            </Box>
          </Stack>
        </Box>
      </Box>
  );
}
