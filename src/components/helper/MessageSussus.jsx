import * as React from "react";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import { tr } from "date-fns/locale";
import Alert from "@mui/material/Alert";

export default function PositionedSnackbar({ messagestate, setMessagestate }) {
  const { vertical, horizontal, open } = messagestate;

  const handleClose = () => {
    setMessagestate({ ...messagestate, open: false });
  };

  return (
    <div className=" w-full md:w-[500px]">
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        severity="success"
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          subscribe Done.
        </Alert>
      </Snackbar>
    </div>
  );
}
