import MuiPhoneNumber from "material-ui-phone-number-2";
import React from "react";

function PhoneNumberField({ value, onChange }) {
  return (
    <MuiPhoneNumber
      sx={{ "& svg": { height: "16px" } }}
      // slot={{}}
      label="Phone Number"
      value={value}
      autoFormat={true}
      fullWidth
      required
      variant="outlined"
      defaultCountry="us"
      onChange={onChange}
    />
  );
}

export default PhoneNumberField;
