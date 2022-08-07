//mui
import { Divider, Drawer, Link, Stack, Typography } from "@mui/material";

import PropTypes from "prop-types";
//form
import UserForm from "./UserForm";

UserModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  user: PropTypes.object,
};

export default function UserModal({ isOpen, onClose, user = {} }) {
  return (
    <Drawer
      open={isOpen}
      onClose={onClose}
      anchor="right"
      PaperProps={{ sx: { width: { xs: 1, sm: 480, md: 640 } } }}
    >
      <Stack spacing={2}>
        {user?.id ? (
          <>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ px: 3, pt: 3 }}
            >
              <Typography sx={{ fontWeight: "bold" }}>Update User</Typography>
            </Stack>
            <Divider />
          </>
        ) : (
          <>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ px: 3, pt: 3 }}
            >
              <Typography sx={{ fontWeight: "bold" }}>Create User</Typography>
            </Stack>
            <Divider />
          </>
        )}
        <UserForm user={user} onClose={onClose} />
      </Stack>
    </Drawer>
  );
}
