import { Grid, useTheme, Typography } from "@mui/material";
import useStyles from "./TableEntryRow.styles";

interface ITableEntryRowProps {
  id?: string;
  country: string;
  countryCode: string;
  artist: string;
  song: string;
  flag?: string;
  picture?: string;
  order?: string;
  points?: string;
  rank?: string;
  isHeader?: boolean;
}

const TableEntryRow = (tableEntryRowProps: ITableEntryRowProps) => {
  const classes = useStyles(useTheme());

  return (
    <Grid container item sx={classes.container}>
      <Grid item>
        <Typography variant="body1">{tableEntryRowProps.order}</Typography>
      </Grid>
      <Grid item></Grid>
      <Grid item>
        <Typography variant="body1">{tableEntryRowProps.artist}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">{tableEntryRowProps.song}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">{tableEntryRowProps.country}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">{tableEntryRowProps.rank}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">{tableEntryRowProps.flag}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">{tableEntryRowProps.picture}</Typography>
      </Grid>
    </Grid>
  );
};

export default TableEntryRow;
