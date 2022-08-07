import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

// @mui
import { Card, CardHeader } from "@mui/material";

// components
import BasicTable from "@/components/BasicTable";

import useResponsive from "@/hooks/useResponsive";
// hooks

import UserConfirmDialog from "@/sections/user/UserConfirmDialog";
import UserModal from "@/sections/user/UserModal";
import { useGetUserListQuery } from "@/sections/user/userSlice";

import UserCollapsibleTableRow from "./UserCollapsibleTableRow";
import UserTableRow from "./UserTableRow";
import { TABLE_DESKTOP_HEAD, TABLE_MOBILE_HEAD } from "./config";

function UserList(props, ref) {
  const confirmDialogRef = useRef();
  const isMobileScreen = useResponsive("down", "md");

  const [isOpen, setIsOpen] = useState(false);

  const [chosenUser, setChosenUser] = useState({});

  const { data, isLoading, isFetching } = useGetUserListQuery({});

  const { data: listUser = [] } = data || {};
  const columns = isMobileScreen ? TABLE_MOBILE_HEAD : TABLE_DESKTOP_HEAD;

  useImperativeHandle(ref, () => ({
    handleAddNewUser: () => {
      setIsOpen(true);
      setChosenUser({});
    },
  }));

  const tableRowComp = useCallback(
    (row, index) => {
      if (isMobileScreen)
        return (
          <UserCollapsibleTableRow
            key={row?.id || index}
            row={row}
            handleEditUser={handleEditUser(row)}
            handleDeleteUser={handleDeleteUser(row)}
          />
        );
      return (
        <UserTableRow
          key={row?.id || index}
          row={row}
          handleEditUser={handleEditUser(row)}
          handleDeleteUser={handleDeleteUser(row)}
        />
      );
    },
    [isMobileScreen]
  );

  const handleEditUser = useCallback(
    (row) => () => {
      setIsOpen(true);
      setChosenUser(row);
    },
    []
  );

  const handleDeleteUser = useCallback(
    (row) => () => {
      confirmDialogRef.current.handleToggleConfirmDialog(row);
    },
    []
  );

  const handleCloseUserForm = useCallback(() => {
    setIsOpen(false);
    setChosenUser({});
  }, []);

  return (
    <Card>
      <CardHeader />

      <BasicTable
        columns={columns}
        dataSource={listUser}
        isLoading={isLoading || isFetching}
        TableRowComp={tableRowComp}
      />

      <UserModal
        isOpen={isOpen}
        user={chosenUser}
        onClose={handleCloseUserForm}
      />

      <UserConfirmDialog ref={confirmDialogRef} />
    </Card>
  );
}

export default forwardRef(UserList);
