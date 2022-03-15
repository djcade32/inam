import React, { useEffect, useState } from "react";
import styles from "./ScrollToTopButton.module.css";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  toTop: {
    zIndex: 2,
    position: "fixed",
    bottom: "10vh",
    backgroundColor: "#DCDCDC",
    color: "black",
    "&:hover, &.Mui-focusVisible": {
      transition: "0.3s",
      color: "#397BA6",
      backgroundColor: "#DCDCDC",
    },
    [theme.breakpoints.up("xs")]: {
      right: "5%",
      backgroundColor: "rgb(220,220,220,0.7)",
    },
    [theme.breakpoints.up("lg")]: {
      right: "6.5%",
    },
  },
}));

export default function ScrollToTopButton(props) {
  const classes = useStyles();
  const [show, setShow] = useState(props.showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > props.showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  useEffect(() => {
    if (props.showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  return (
    <div>
      {show && (
        <IconButton
          onClick={handleClick}
          className={classes.toTop}
          aria-label="to top"
          component="span"
        >
          <ExpandLessIcon />
        </IconButton>
      )}
    </div>
  );
}
