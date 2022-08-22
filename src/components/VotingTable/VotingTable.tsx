import { Grid, useTheme } from "@mui/material";
import TableEntryRow from "../TableEntryRow/TableEntryRow";
import useStyles from "./VotingTable.styles";
import data from "../../mockData/db.json";

const VotingTable = () => {
  const classes = useStyles(useTheme());

  return (
    <Grid container sx={classes.tableContainer}>
      {data.EV22.map((row) => (
        <TableEntryRow {...row} key={row.country} />
      ))}
    </Grid>
  );
};

export default VotingTable;
