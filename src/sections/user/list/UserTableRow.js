// @mui
import { Link, TableCell, TableRow, Tooltip, Typography } from "@mui/material";

import PropTypes from "prop-types";

// components
import Iconify from "@/components/Iconify";
import { IconButtonAnimate } from "@/components/animate";

ClientTableRow.propTypes = {
  row: PropTypes.object,
  handleEditUser: PropTypes.func,
  handleDeleteUser: PropTypes.func,
};

export default function ClientTableRow({
  row = {},
  handleEditUser,
  handleDeleteUser,
}) {
  const {
    attributes: { username = "", email = "", firstName = "", lastName = "" },
  } = row || {};

  return (
    <TableRow>
      <TableCell align="left">
        <Typography variant="subtitle2">{username}</Typography>
      </TableCell>
      <TableCell align="left">{email}</TableCell>
      <TableCell align="left">{firstName}</TableCell>
      <TableCell align="left">{lastName}</TableCell>
      <TableCell align="left">
        <Tooltip title="Edit" onClick={handleEditUser}>
          <IconButtonAnimate
            sx={{
              p: 1,
              ml: 0.5,
              border: (theme) => `dashed 1px ${theme.palette.divider}`,
            }}
          >
            <Iconify icon={"eva:edit-fill"} width={20} height={20} />
          </IconButtonAnimate>
        </Tooltip>
        <Tooltip title="Delete" onClick={handleDeleteUser}>
          <IconButtonAnimate
            sx={{
              p: 1,
              ml: 0.5,
              border: (theme) => `dashed 1px ${theme.palette.divider}`,
            }}
          >
            <Iconify icon={"eva:trash-fill"} width={20} height={20} />
          </IconButtonAnimate>
        </Tooltip>
      </TableCell>
    </TableRow>
  );
}
