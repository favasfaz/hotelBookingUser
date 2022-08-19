import React from "react";
import {
  Avatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import { signIn } from "next-auth/react";

function AuthConstant() {
  return (
    <div className="flex flex-col mt-6 justify-center  items-center">
    <Paper  elevation={6}>
    <div >
        <ListItemButton onClick={() => signIn()} className="cursor-pointer">
          <ListItemIcon>
            <Avatar className="bg-white">
              <GitHubIcon style={{ color: "black" }} />
            </Avatar>
          </ListItemIcon>
          <ListItemText primary="Sign In with GitHub" />
        </ListItemButton>
      </div>
    </Paper>
    <Paper className="mt-2" elevation={6}>
      <div >
        <ListItemButton onClick={() => signIn()} className="cursor-pointer">
          <ListItemIcon>
            <Avatar className="bg-white">
              <GoogleIcon style={{ color: "black" }} />
            </Avatar>
          </ListItemIcon>
          <ListItemText primary="Sign In with Google" />
        </ListItemButton>
      </div>
      </Paper>
    </div>
  
  );
}

export default AuthConstant;
