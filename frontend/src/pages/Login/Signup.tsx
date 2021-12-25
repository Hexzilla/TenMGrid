import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";
import "./style.css";

export default function Signup() {
  return (
    <div className="login">
      <Typography variant="h4">Create Your Account</Typography>
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
      <Link to="/login" style={{ textDecoration: "none" }}>
        <Button
          style={{
            textTransform: "initial",
            color: "white",
          }}
        >
          You have already account? Login
        </Button>
      </Link>
    </div>
  );
}
