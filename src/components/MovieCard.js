import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import posterImages from "../assets/poster-images";
import MovieCrawlModal from "./MovieCrawlModal";
import Modal from "@material-ui/core/Modal";
import funcs from "../utils/functions";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
  },
  media: {
    height: 240,
  },
  poster: {
    height: "100%",
  },

  button: {
    justifyContent: "center",
  },
});

const posters = [
  "https://mypostercollection.com/wp-content/uploads/2018/06/Star-Wars-Episode-1-1999-Printable-Poster-MyPosterCollection.com-9.jpg",
  "https://mypostercollection.com/wp-content/uploads/2018/06/Star-Wars-Episode-2-2002-Printable-Poster-MyPosterCollection.com-5.png",
  "https://mypostercollection.com/wp-content/uploads/2018/06/Star-Wars-Episode-3-2005-Printable-Poster-MyPosterCollection.com-3.jpg",
  "https://mypostercollection.com/wp-content/uploads/2018/06/Star-Wars-Episode-4-1977-Printable-Poster-MyPosterCollection.com-official-poster.jpg",
  "https://mypostercollection.com/wp-content/uploads/2018/06/Star-Wars-Episdoe-5-1980-Printable-Poster-MyPosterCollection.com-9.jpg",
  "https://mypostercollection.com/wp-content/uploads/2018/06/Star-Wars-Episode-6-1983-Printable-Poster-MyPosterCollection.com-8.jpg",
];

function MovieCards(props) {
  const classes = useStyles();
  const { episodeId, title, director, releaseDate, openingCrawl } = props;

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [openPoster, setOpenPoster] = React.useState(false);

  const handleOpenPoster = () => {
    setOpenPoster(true);
  };

  const handleClosePoster = () => {
    setOpenPoster(false);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          onClick={handleOpenPoster}
          className={classes.media}
          image={posterImages[episodeId]}
          title="Movie Poster"
        />
        <CardContent>
          <Typography variant="h6" component="h6">
            {`Episode ${funcs.integerToRoman(episodeId)}`}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            {`Director: ${director}`}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            {`Release Date: ${releaseDate}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions classes={{ root: classes.button }}>
        <Button size="medium" variant="outlined" onClick={handleOpen}>
          See opening
        </Button>
      </CardActions>
      <div>
        {open ? (
          <MovieCrawlModal
            open={true}
            close={handleClose}
            openingCrawl={openingCrawl}
            episodeId={episodeId}
          />
        ) : (
          false
        )}
      </div>
      <Modal
        open={openPoster}
        onClose={handleClosePoster}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {
          <img
            src={posterImages[episodeId]}
            className={classes.poster}
            alt="MoviePoster"
          />
        }
      </Modal>
    </Card>
  );
}

MovieCards.propTypes = {
  episodeId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  openingCrawl: PropTypes.string.isRequired,
};

export default MovieCards;
