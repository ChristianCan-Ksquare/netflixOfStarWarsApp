import axios from "axios";
import { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import MovieCard from "./MovieCard";
import Header from "./Header";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 20,
    paddingBottom: 20,
  },
});

export default function ListOfMovies() {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/films")
      .then((res) => {
        setData(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Box>
      <Header />
      <Grid container spacing={2} className={classes.gridContainer}>
        {data.map((element, index) => (
          <Grid key={element.episode_id} item xs={12} sm={8} md={4}>
            <MovieCard
              key={element.episode_id}
              episodeId={element.episode_id}
              title={element.title}
              director={element.director}
              releaseDate={element.release_date}
              openingCrawl={element.opening_crawl}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
