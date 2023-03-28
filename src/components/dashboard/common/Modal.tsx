import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

type Props = {
  children: any;
  isOpen: boolean;
  close: () => void;
  title:string
};

export default function Modal({title, children, close, isOpen }: Props) {
  return (
    <Dialog open={isOpen} onClose={close} fullWidth={true}>
      <DialogTitle>{title}</DialogTitle>
      {children}

    </Dialog>
  );
}
