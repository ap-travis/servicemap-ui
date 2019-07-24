export default theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    padding: theme.spacing.unit,
    position: 'relative',
  },
  title: {
    textAlign: 'left',
  },
  margin: {
    marginLeft: '8px',
    marginRight: '8px',
  },
  text: {
    textAlign: 'left',
  },
  noMargin: {
    margin: 0,
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingTop: theme.spacing.unitDouble,
    paddingBottom: theme.spacing.unitDouble,
  },
});
