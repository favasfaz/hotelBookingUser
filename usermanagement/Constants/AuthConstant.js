import React from "react";
import {
  Avatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import { signIn } from "next-auth/react";

function AuthConstant() {
  return (
    <div className="flex flex-col mt-6 justify-center  items-center">
      <div className="m-1">
        <ListItemButton onClick={() => signIn()} className="cursor-pointer">
          <ListItemIcon>
            <Avatar>
              <GitHubIcon />
            </Avatar>
          </ListItemIcon>
          <ListItemText primary="Sign In with GitHub" />
        </ListItemButton>
      </div>
      <div className="m-1">
        <ListItemButton onClick={() => signIn()} className="cursor-pointer">
          <ListItemIcon>
            <Avatar>
              <GoogleIcon />
            </Avatar>
          </ListItemIcon>
          <ListItemText primary="Sign In with GitHub" />
        </ListItemButton>
      </div>
    </div>
  );
}

export default AuthConstant;
