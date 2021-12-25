import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

export default function Help() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Card>
        <CardContent>
          <Typography variant="h5">
            Help
          </Typography>
          <Typography
            align="center"
            variant="subtitle1"
          >
            Counter Help
          </Typography>
        </CardContent>
        <CardActions>
          <Button color="primary" variant="contained">
            Increment
          </Button>
          <Button
            color="secondary"
            variant="contained"
          >
            Decrement Help
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};