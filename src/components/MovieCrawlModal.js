import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import funcs from "../utils/functions";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #000",
    borderRadius: "10px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  title: {
    textAlign: "center",
  },
}));

export default function MovieCrawlModal(props) {
  const { open, close, openingCrawl, episodeId } = props;
  const classes = useStyles();

  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(funcs.getModalStyle);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Typography
        variant="body2"
        color="textPrimary"
        component="div"
        align="justify"
      >
        <h2
          id="simple-modal-title"
          className={classes.title}
        >{`Episode ${funcs.integerToRoman(episodeId)}`}</h2>
        <p id="simple-modal-description">{openingCrawl}</p>
      </Typography>
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

MovieCrawlModal.propTypes = {
  episodeId: PropTypes.number.isRequired,
  openingCrawl: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};
