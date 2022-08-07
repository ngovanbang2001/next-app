import { forwardRef, useCallback, useImperativeHandle, useState } from "react";
//mui
import { Button, Typography } from "@mui/material";

//components
import ConfirmDialog from "@/components/ConfirmDialog";

import { useSnackbar } from "notistack";
import { useDeleteUserMutation } from "./userSlice";

function UserConfirmDialog(props, ref) {
  const [deleteUser] = useDeleteUserMutation();
  const { enqueueSnackbar } = useSnackbar();

  const [isOpen, setIsOpen] = useState(false);
  const [chosenUser, setChosenUser] = useState({});
  const { username = "", id } = chosenUser || {};

  useImperativeHandle(ref, () => ({
    handleToggleConfirmDialog: (chosenUser) => {
      setIsOpen(true);
      setChosenUser(chosenUser);
    },
  }));

  const onCloseConfirm = useCallback(() => {
    setIsOpen(false);
    setChosenUser({});
  }, [setChosenUser, setIsOpen]);

  const handleDeleteUser = async () => {
    try {
      const res = await deleteUser(id).unwrap();
      res?.data
        ? enqueueSnackbar("Delete user success!")
        : enqueueSnackbar("Delete user failed!", {
            variant: "error",
          });
      setIsOpen(false);
    } catch (error) {
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };
  return (
    <ConfirmDialog
      open={isOpen}
      onClose={onCloseConfirm}
      title={
        <Typography>
          Are you sure you want to delete user <strong>{username}</strong>?
        </Typography>
      }
      actions={
        <>
          <Button variant="outlined" color="inherit" onClick={onCloseConfirm}>
            Cancel
          </Button>
          <Button variant="contained" color="error" onClick={handleDeleteUser}>
            Delete
          </Button>
        </>
      }
    />
  );
}

export default forwardRef(UserConfirmDialog);
