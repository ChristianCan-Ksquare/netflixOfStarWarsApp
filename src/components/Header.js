import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";
import { Switch } from "@material-ui/core";
import { ThemeContext } from "../App";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles(() => ({
  headerDark: {
    backgroundColor: "#F72331",
  },
  headerLight: {
    backgroundColor: "#2E67F8",
  },
  logo: {
    width: 144,
    height: 66,
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <ThemeContext.Consumer>
      {(context) => (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mb={2}
          className={context.dark ? classes.headerDark : classes.headerLight}
        >
          <Box>
            <Toolbar style={{ visibility: "hidden" }}>
              <Box>
                <FormControlLabel
                  control={
                    <Switch onChange={() => context.handleMode()}></Switch>
                  }
                  label="Enable Dark Mode"
                  labelPlacement="start"
                />
              </Box>
            </Toolbar>
          </Box>
          <Box>
            <img
              className={classes.logo}
              src="starwars_logo.png"
              alt="starwars_logo"
            />
          </Box>
          <Toolbar>
            <Box>
              <FormControlLabel
                control={
                  <Switch onChange={() => context.handleMode()}></Switch>
                }
                label="Enable Dark Mode"
                labelPlacement="start"
              />
            </Box>
          </Toolbar>
        </Box>
      )}
    </ThemeContext.Consumer>
  );
}

export default Header;
