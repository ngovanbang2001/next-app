// @mui
import { Box, Stack, Toolbar, Typography } from "@mui/material";

// components

import Link from "next/link";

export default function HomeHeader() {
  return (
    <Toolbar
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#5cc197",
        padding: "10px 15px",
        color: "#fff",
        marginBottom: "2rem",
        justifyContent: "space-between",
      }}
    >
      <Link href="/">
        <h1>My Next App</h1>
      </Link>
      <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
        <Link href="/users">
          <Typography sx={{ minWidth: 100 }}>Manage user</Typography>
        </Link>
      </Stack>
    </Toolbar>
  );
}
