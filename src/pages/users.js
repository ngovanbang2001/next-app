import React, { useCallback, useRef } from "react";
//mui
import { Button, Container } from "@mui/material";

// components
import HeaderBreadcrumbs from "@/components/HeaderBreadcrumbs";
import Iconify from "@/components/Iconify";
import Page from "@/components/Page";

//routes
import { PATH_HOME } from "@/routes/paths";

// layouts
import Layout from "@/layouts";

// sections
import UserList from "@/sections/user/list";

Users.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function Users() {
  const userListRef = useRef();

  const handleAddNewUser = useCallback(() => {
    userListRef.current.handleAddNewUser();
  }, []);

  return (
    <Page title="List User">
      <Container>
        <HeaderBreadcrumbs
          heading="List User"
          links={[
            {
              name: "Home",
              href: PATH_HOME.root,
            },
            { name: "List User " },
          ]}
          action={
            <Button
              variant="contained"
              startIcon={<Iconify icon={"eva:plus-fill"} />}
              onClick={handleAddNewUser}
            >
              New User
            </Button>
          }
        />
        <UserList ref={userListRef} />
      </Container>
    </Page>
  );
}
