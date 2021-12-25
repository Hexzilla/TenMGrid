import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@mui/material";
import "./style.css";

export default function Login() {
  return (
    <div className="login">
      <Typography variant="h4">TenMGrid Account Login</Typography>
      <form className="form">
        {/* <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl> */}

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
        <Button
          className="form-control"
          fullWidth
          color="primary"
          variant="contained"
        >
          Login
        </Button>
      </form>
      <Link to="/register" style={{ textDecoration: "none" }}>
        <Button
          style={{
            textTransform: "initial",
            color: "white",
          }}
        >
          Forgot Password
        </Button>
      </Link>
      <Link to="/register" style={{ textDecoration: "none" }}>
        <Button
          style={{
            textTransform: "initial",
            color: "white",
          }}
        >
          Don't have an account?
        </Button>
      </Link>
    </div>
  );
}
