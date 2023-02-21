import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
        <div className="linkedAccounts">
            <LinkedInIcon />
            <GithubIcon />
        </div>
        <p>austinthrash.com - 2023</p>
    </div>
  )
}

export default Footer