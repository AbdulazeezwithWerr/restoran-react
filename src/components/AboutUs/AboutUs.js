import { Button, LinearProgress, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./aboutus.css";

export default function WhoAreU() {
  function HandleClick() {
    <Stack sx={{ width: "100%", color: "grey.500" }} spacing={5}>
      <LinearProgress color="success" />
    </Stack>;
  }
  return (
    <>
      <div className="glavni-who">
        <div className="left-who">
          <div className="glavni-second">
            <p className="p-text-who">BY THE MALERS OFTAILWIND CSS</p>
            <h1 className="h1-first-text">TICO BAR</h1>
            <h1 className="h1-second-text">Milliy Taomlar</h1>

            <div className="span-div">
              <span className="span-text">
                Over 500+ professionally designed, fully responsive, expertly
              </span>
              <span className="span-text-1">
                component examples you can drop into your Tailwind projects
              </span>
              <span className="span-text-2">
                and customize to your heart’s content. Get started by checking
                out our
              </span>
              <span className="span-text-3">
                free preview components, or browsing all of the examples in the
                categories you're most curious about.
              </span>
            </div>
          </div>
          <br />
          <div className="button-class">
            <Link
              sx={{ textDecoration: "none" }}
              to="/"
              // to='/types'
            >
              <Link to="/afitsant">
                <Button
                  onClick={HandleClick}
                  className="try-btn"
                  sx={{
                    marginLeft: "10vw",
                    textDecoration: "none",
                    backgroundColor: "rgb(60, 107, 90)"
                  }}
                  variant="contained"
                >
                  Try it Out
                </Button>
              </Link>
            </Link>
            <Link to="/blyudo">
              <Button
                variant="outlined"
                className="tico-btn"
                sx={{ color: "rgb(60, 107, 90)" }}
              >
                Our TIco menu
              </Button>
            </Link>
          </div>
        </div>
        <div className="right-who"></div>
      </div>
    </>
  );
}
