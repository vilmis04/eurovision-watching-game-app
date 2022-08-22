import { Grid, useTheme, Typography } from "@mui/material";
import VoteButton from "../VoteButton/VoteButton";
import useStyles from "./TableEntryRow.styles";

interface ITableEntryRowProps {
  country: string;
  artist: string;
  song: string;
  isHeader?: boolean;
}

const TableEntryRow = ({
  country,
  artist,
  song,
  isHeader = false,
}: ITableEntryRowProps) => {
  const classes = useStyles(useTheme());

  return (
    <Grid container item lg={12} md={6} sm={4} sx={classes.container}>
      <Grid item>
        <Typography variant="body1">{country}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">{artist}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">{song}</Typography>
      </Grid>
      <Grid item>
        <VoteButton country={country} vote={undefined} />
      </Grid>
    </Grid>
  );
};

export default TableEntryRow;
