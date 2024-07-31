import Image from "next/image";
import styles from "./page.module.css";
import {Box, Stack} from "@mui/material"


export default function Home() {
  return (
   
      <Box height="100vh" sx={{backgroundColor: "#F0FFFF"}}>
        <Box p={5}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Box  height="100vh" width="100%" sx={{backgroundColor: "#F0FFFF"}}>
          
           </Box>
            <Box  
              ml={5}
              height="100vh" 
              width="100%" 
              sx={{
              backgroundColor: "#F5F5DC",
              borderRadius: 10,
              }}>
            
            </Box>
          </Stack>
        </Box>
      </Box>

  );
}
