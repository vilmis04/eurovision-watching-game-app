import { Card, Grid, Typography, useTheme } from "@mui/material";
import VoteButton from "components/VoteButton/VoteButton";
import useStyles from "./CountryCard.styles";

interface ICountryCardProps {
  country: string;
  artist: string;
  song: string;
}

const CountryCard: React.FC<ICountryCardProps> = ({
  country,
  artist,
  song,
}) => {
  const classes = useStyles(useTheme());
  return (
    <Card variant="outlined" sx={classes.card}>
      <Grid container direction="column">
        <Grid item>
          <Typography variant="overline">{country}</Typography>
        </Grid>
        <Grid container item>
          <Grid item>
            <Typography variant="subtitle1">{artist}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">{song}</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <VoteButton country={country} />
        </Grid>
      </Grid>
    </Card>
  );
};

export default CountryCard;
