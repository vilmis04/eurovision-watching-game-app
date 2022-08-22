import { Theme } from "@mui/material";

export default (theme: Theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: 1200,
    margin: "auto",
    padding: `${theme.spacing(3)} ${theme.spacing(3)} 0`,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
    "& div": {
      width: "100%",
    },
  },
});
