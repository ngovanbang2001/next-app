// @mui
import { Box } from "@mui/material";
import PropTypes from "prop-types";

import HomeHeader from "./header";

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function HomeLayout({ children }) {
  return (
    <>
      <HomeHeader />
      <Box component="main">{children}</Box>
    </>
  );
}
