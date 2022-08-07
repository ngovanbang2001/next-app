function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS = "/";

export const PATH_PAGE = {
  page403: "/403",
  page404: "/404",
  page500: "/500",
};

export const PATH_HOME = {
  root: ROOTS,
  user: {
    root: path(ROOTS),
  },
};
