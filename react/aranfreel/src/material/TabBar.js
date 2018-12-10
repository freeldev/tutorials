import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Tabs, { Tab } from "material-ui/Tabs";
import Paper from "material-ui/Paper";
import SwipeableViews from "react-swipeable-views";
import Grid from "material-ui/Grid";

function TabContainer({ children, dir }) {
  return (
    <div dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 3,
    height: 700,
    width: 575
  }
});

var divStyle = {
  display: "grid",
  backgroundColor: "#f5f5f5",
  height: "100vh",
  width: "100wh"
};

class BasicTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;
    const { value } = this.state;

    return (
      <div style={divStyle}>
        <Tabs
          indicatorColor="#B0BEC5"
          centered
          value={value}
          onChange={this.handleChange}
        >
          <Tab disableRipple label="About" />
          <Tab disableRipple label="Resume" />
          <Tab disableRipple label="Contact" />
        </Tabs>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          {value === 0 && (
            <TabContainer dir={theme.direction}>
              <Grid
                container
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Grid
                  item
                  style={{
                    maxWidth: "50%",
                    maxHeight: "50%",
                    display: "flex"
                  }}
                >
                  <Paper
                    elevation={24}
                    className={classes.paper}
                    elevation={4}
                  />
                </Grid>
              </Grid>
            </TabContainer>
          )}
          {value === 1 && (
            <TabContainer dir={theme.direction}>
              <Grid
                container
                style={{
                  display: "flex",
                  flexFlow: "row wrap",
                  justifyContent: "space-around"
                }}
              >
                <Grid
                  item
                  style={{
                    maxWidth: "50%",
                    maxHeight: "50%",
                    display: "flex"
                  }}
                >
                  <Paper className={classes.paper} elevation={4} />
                </Grid>
              </Grid>
            </TabContainer>
          )}
          {value === 2 && (
            <TabContainer dir={theme.direction}>
              <Grid
                container
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  flexFlow: "row wrap"
                }}
              >
                <Grid
                  item
                  style={{
                    maxWidth: "50%",
                    maxHeight: "50%",
                    display: "flex"
                  }}
                >
                  <Paper className={classes.paper} elevation={4} />
                </Grid>
              </Grid>
            </TabContainer>
          )}
        </SwipeableViews>
      </div>
    );
  }
}

BasicTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(BasicTabs);
