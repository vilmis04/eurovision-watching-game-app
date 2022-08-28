import { Theme } from "@mui/material";

export default ({ spacing, breakpoints }: Theme) => ({
  tableContainer: {
    display: "flex",
    flexDirection: "columns",
    alignItems: "center",
    padding: spacing(3, 3, 0),
    maxWidth: 1200,
    margin: "auto",
  },
  card: {
    padding: spacing(1),
    height: "100%",
  },
});
