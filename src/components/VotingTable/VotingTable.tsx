import { Grid, useTheme } from "@mui/material";
import TableEntryRow from "../TableEntryRow/TableEntryRow";
import { useSx } from "./VotingTable.styles";
import CountryCard from "components/CountryCard/CountryCard";
import { useEffect, useState } from "react";
import { setEnvironmentData } from "worker_threads";
import { Box } from "@mui/system";

interface ICountry {
  country: string;
  artist: string;
  song: string;
}

const VotingTable = () => {
  const styles = useSx(useTheme());
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(countries.length === 0);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3004/EV22")
      .then((res) => res.json())
      .then((res) => setCountries(res))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return isLoading ? (
    <Box>Loading</Box>
  ) : (
    <Grid container spacing={1} sx={styles.tableContainer}>
      {countries.map((entry: ICountry) => (
        <Grid
          // lg={3}
          md={4}
          sm={6}
          xs={12}
          key={entry.country}
          sx={styles.card}
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
