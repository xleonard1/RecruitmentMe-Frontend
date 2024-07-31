import {Box, Stack, Typography} from "@mui/material"


export default function Home() {
  
  return (
      <Box height="100vh" sx={{backgroundColor: "#F0FFFF"}}>
        <Box p={5}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Box  height="100vh" width="100%" sx={{backgroundColor: "#F0FFFF"}}>
              <Typography  variant="h1">
                RealHire
              </Typography>
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
