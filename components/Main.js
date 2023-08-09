import React from "react";
import { Stack } from "@mui/material";
import Logic from "../components/Logic";

const Main = () => {
  return (
    <div>
      <Stack
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        sx={{ fontFamily: '"Poppins", sans-serif' }}
      >
        <Logic sx={{ fontFamily: '"Poppins", sans-serif' }} />
      </Stack>
    </div>
  );
};

export default Main;
