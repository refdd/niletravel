import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
const TourTypeOptions = [
  { label: "Nile Cruise", value: 2 },
  { label: "Travel Package", value: 1 },
];
function TourTypeSlected({ value, onChange }) {
  return (
    <Autocomplete
      disablePortal
      id="TourTypeSlected"
      options={TourTypeOptions}
      sx={{}}
      renderInput={(params) => (
        <TextField {...params} label="TourType" variant="outlined" />
      )}
      value={value}
      onChange={(_, newValue) => onChange(newValue)}
    />
  );
}

export default TourTypeSlected;
