import PropTypes from "prop-types";

import HomeLayout from "@/layouts/home";

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Layout({ children }) {
  return <HomeLayout> {children} </HomeLayout>;
}
