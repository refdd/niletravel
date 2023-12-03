import React from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
function ArrivalDate({ value, onChange }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        value={value}
        onChange={onChange}
        slotProps={{
          textField: {
            variant: "outlined",
            required: true,
            fullWidth: true,
            label: "Arrival Date",
          },
        }}
      />
    </LocalizationProvider>
  );
}

export default ArrivalDate;
