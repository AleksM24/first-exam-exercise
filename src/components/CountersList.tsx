import { Grid, Typography } from "@mui/material";
import CountersItem from "./CountersItem";
import "./CountersList.css";
import countersArray from "../utils/countersArray";

type Props = {};

const CountersList = (props: Props) => {
  return (
    <>
      <Typography variant="h4" align="center" component="h2">
        <p className="exercise-title">Перше завдання:</p>
      </Typography>
      <Grid container justifyContent="center">
        {countersArray.map(({ id }) => (
          <Grid item key={id}>
            <CountersItem />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CountersList;
