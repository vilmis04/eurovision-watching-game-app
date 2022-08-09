import { Grid, useTheme } from "@mui/material";
import useStyles from "./VotingTable.styles";

const VotingTable = () => {
  const classes = useStyles(useTheme());
  return (
    <Grid container sx={classes.myGrid}>
      My Grid Begins Here
    </Grid>
  );
};

export default VotingTable;
