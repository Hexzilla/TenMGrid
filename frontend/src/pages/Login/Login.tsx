import React, { useRef, useState } from "react";
import { Button, TextField } from "@mui/material";
import { indigo, red } from "@mui/material/colors";
import './style.css'

export default function Login() {
  return (
    <div className="login">
      <form className="form">
        <TextField
          className="form-control"
          fullWidth
          id="email"
          label="Email"
          variant="outlined"/>
        <TextField
          className="form-control"
          fullWidth
          id="password"
          label="Password"
          variant="outlined" />
        <Button
          className="form-control"
          fullWidth
          color="primary"
          variant="contained">
          Login
        </Button>
      </form>
      <div>
          <Button
            onClick={() => console.log("Forgot Password")}
            style={{
              textTransform: "initial",
              marginTop: "16px",
              color: indigo[500]
            }}
          >
            Forgot Password?
          </Button>
        </div>
        <div>
          <Button
            onClick={() => console.log("Signup")}
            style={{
              textTransform: "initial",
              color: indigo[500]
            }}
          >
            Don't have an account?
          </Button>
        </div>
    </div>
  );
}