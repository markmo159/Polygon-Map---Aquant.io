import React, { useState } from "react";

import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Box,
  TextField,
  Button,
} from "@mui/material/";

const Form = ({addLocation}) => {
  const [value, setValue] = useState("cords");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onSubmit = () => {
    addLocation (latitude,longitude)
  };


  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Choose a Way</FormLabel>
        <RadioGroup
          aria-label="Choose a Way"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="cords" control={<Radio />} label="Cords" />
          <FormControlLabel value="place" control={<Radio />} label="Place" />
        </RadioGroup>
      </FormControl>

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          value={latitude}
          onChange={(e) => {
            setLatitude(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          value={longitude}
          onChange={(e) => {
            setLongitude(e.target.value);
          }}
        />
      </Box>
      <Button onClick={() => onSubmit()} variant="contained">
        Submit
      </Button>

    </div>
  );
};

export default Form;
