import React from "react";
import { Stack, Typography } from "@mui/material";

const Result = ({ day, month, year }) => {
  return (
    <Stack sx={{ margin: "1rem 0 0 -3rem", height: "15rem" }}>
      <Typography className="result-text">
        <span style={{ color: "hsl(259, 100%, 65%)" }}>
          {year === "" ? "--" : year}
        </span>
        years
      </Typography>
      <Typography className="result-text">
        <span style={{ color: "hsl(259, 100%, 65%)" }}>
          {month === "" ? "--" : month}
        </span>
        month
      </Typography>
      <Typography className="result-text">
        <span style={{ color: "hsl(259, 100%, 65%)" }}>
          {day === "" ? "--" : day}
        </span>
        days
      </Typography>
    </Stack>
  );
};

export default Result;
