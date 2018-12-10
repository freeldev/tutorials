export const views = {value === 0 && (
    <TabContainer dir={theme.direction}>
      <Grid
        container
        style={{
          backgroundColor: "red"
        }}
      >
        <Grid
          item
          style={{
            flexGrow: 1,
            display: "flex"
          }}
        >
          <Paper className={classes.paper} elevation={4} />
        </Grid>
        <Grid item style={{}}>
          <Paper className={classes.paper} elevation={4} />
        </Grid>
        <Grid item>
          <Paper className={classes.paper} elevation={4} />
        </Grid>
        <Grid item>
          <Paper className={classes.paper} elevation={4} />
        </Grid>
      </Grid>
    </TabContainer>
  )}
  {value === 1 && (
    <TabContainer dir={theme.direction}>
      <Grid container>
        <Grid direction="column" align="center" item>
          <Paper className={classes.paper} elevation={4} />
        </Grid>
      </Grid>
    </TabContainer>
  )}
  {value === 2 && (
    <TabContainer dir={theme.direction}>
      <Grid container>
        <Grid item>
          <Paper className={classes.paper} elevation={4} />
        </Grid>
      </Grid>
    </TabContainer>
  )}