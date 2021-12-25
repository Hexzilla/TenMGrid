import React, { useRef, useState } from "react";
import { Button, TextField } from "@mui/material";
import { indigo, red } from "@mui/material/colors";
import "./style.css";

export default function Signup() {
  return (
    <div className="login">
      <form className="form">
        <TextField
          className="form-control"
          fullWidth
          id="username"
          label="Username"
          variant="outlined"
        />
        <TextField
          className="form-control"
          fullWidth
          id="email"
          label="Email"
          variant="outlined"
        />
        <TextField
          className="form-control"
          fullWidth
          id="password"
          label="Password"
          variant="outlined"
        />
        <TextField
          className="form-control"
          fullWidth
          id="password_confirm"
          label="Confirm Password"
          variant="outlined"
        />
        <Button
          className="form-control"
          fullWidth
          color="primary"
          variant="contained"
        >
          SIGN UP
        </Button>
      </form>
      <div>
        <Button
          onClick={() => console.log("Signup")}
          style={{
            textTransform: "initial",
            color: indigo[500],
          }}
        >
          Don't have an account?
        </Button>
      </div>
    </div>
  );
}
