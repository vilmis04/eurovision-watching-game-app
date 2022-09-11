import { Card, Grid, Typography, useTheme } from "@mui/material";
import VoteButton from "components/VoteButton/VoteButton";
import { styles } from "./CountryCard.styles";

interface ICountryCardProps {
  country: string;
  artist: string;
  song: string;
}

const CountryCard: React.FC<ICountryCardProps> = ({
  country,
  artist,
  song,
}) => (
  <Card variant="outlined" sx={styles.card}>
    <Grid container direction="column">
      <Grid item>
        <Typography variant="overline">{country}</Typography>
      </Grid>
      <Grid container item>
        <Grid item>
          <Typography variant="subtitle1">{artist}</Typography>
        </Grid>
        <Grid item sx={styles.gap}>
          <Typography variant="subtitle1" sx={styles.song}>
            {song}
          </Typography>
        </Grid>
      </Grid>
      <Grid item sx={styles.button}>
        <VoteButton country={country} />
      </Grid>
    </Grid>
  </Card>
);

export default CountryCard;
