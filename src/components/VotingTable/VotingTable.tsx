import { Grid, useTheme } from "@mui/material";
import TableEntryRow from "../TableEntryRow/TableEntryRow";
import useStyles from "./VotingTable.styles";
import data from "../../mockData/db.json";
import CountryCard from "components/CountryCard/CountryCard";

const VotingTable = () => {
  const classes = useStyles(useTheme());

  return (
    <Grid container spacing={1} sx={classes.tableContainer}>
      {data.EV22.map((entry) => (
        <Grid
          // lg={3}
          md={4}
          sm={6}
          xs={12}
          key={entry.country}
          sx={classes.card}
        >
          <CountryCard
            country={entry.country}
            artist={entry.artist}
            song={entry.song}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default VotingTable;
