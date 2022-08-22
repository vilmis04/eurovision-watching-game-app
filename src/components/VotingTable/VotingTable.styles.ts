import { Theme } from "@mui/material";

export default ({ spacing }: Theme) => ({
  tableContainer: {
    display: "flex",
    flexDirection: "columns",
    alignItems: "center",
    paddingTop: spacing(3),
  },
});
