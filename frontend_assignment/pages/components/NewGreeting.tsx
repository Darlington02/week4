import { Box, TextField } from "@mui/material";
import React from "react";

export interface CustomTextBoxProp {
  value: string;
}

const NewGreeting = (prop: CustomTextBoxProp) => {
  return (
    <Box>
      <TextField
        id="outlined-multiline-static"
        multiline
        rows={4}
        disabled
        defaultValue={prop.value}
        sx={{
          "& .MuiInputBase-input.Mui-disabled": {
            WebkitTextFillColor: "white",
          },
          "& .MuiOutlinedInput-root.Mui-disabled": {
            "& fieldset": {
              borderColor: "blue",
            },
            "&:hover fieldset": {
              borderColor: "pink",
            },
          },
        }}
      />
    </Box>
  );
};

export default NewGreeting;