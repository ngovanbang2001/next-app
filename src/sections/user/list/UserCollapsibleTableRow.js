import { useState } from "react";

// @mui
import {
  Collapse,
  IconButton,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";

import PropTypes from "prop-types";

// components
import Iconify from "@/components/Iconify";
import { IconButtonAnimate } from "@/components/animate";
//config
import { FORM_FIELD } from "./config";

UserCollapsibleTableRow.propTypes = {
  row: PropTypes.object,
  handleEditUser: PropTypes.func,
  handleDeleteUser: PropTypes.func,
};

export default function UserCollapsibleTableRow({
  row,
  handleEditUser,
  handleDeleteUser,
}) {
  const {
    username = "",
    email = "",
    firstName = "",
    lastName = "",
  } = row?.attributes;

  const [open, setOpen] = useState(true);

  return (
    <>
      <TableRow>
        <TableCell sx={{ display: "flex" }}>
          <IconButton
            size="small"
            color={open ? "primary" : "default"}
            onClick={() => setOpen(!open)}
          >
            <Iconify
              icon={
                open
                  ? "eva:arrow-ios-upward-fill"
                  : "eva:arrow-ios-downward-fill"
              }
            />
          </IconButton>
          <Typography
            variant="subtitle2"
            sx={{ cursor: "pointer", fontWeight: "bold" }}
          >
            {username}
          </Typography>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell sx={{ py: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Paper
              sx={{
                px: 1,
                py: 2,
                borderRadius: 1.5,
              }}
            >
              <Table size="small" aria-label="purchases">
                <TableBody>
                  <TableRow>
                    <TableCell>{FORM_FIELD.EMAIL}</TableCell>
                    <TableCell>{email}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>{FORM_FIELD.FIRSTNAME}</TableCell>
                    <TableCell>{firstName}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>{FORM_FIELD.LASTNAME}</TableCell>
                    <TableCell>{lastName}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Action</TableCell>
                    <TableCell>
                      <>
                        <Tooltip title="Edit" onClick={handleEditUser}>
                          <IconButtonAnimate
                            sx={{
                              p: 1,
                              ml: 0.5,
                              border: (theme) =>
                                `dashed 1px ${theme.palette.divider}`,
                            }}
                          >
                            <Iconify
                              icon={"eva:edit-fill"}
                              width={20}
                              height={20}
                            />
                          </IconButtonAnimate>
                        </Tooltip>
                        <Tooltip title="Delete" onClick={handleDeleteUser}>
                          <IconButtonAnimate
                            sx={{
                              p: 1,
                              ml: 0.5,
                              border: (theme) =>
                                `dashed 1px ${theme.palette.divider}`,
                            }}
                          >
                            <Iconify
                              icon={"eva:trash-fill"}
                              width={20}
                              height={20}
                            />
                          </IconButtonAnimate>
                        </Tooltip>
                      </>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
