import React from "react";
import classes from "./Header.module.scss"

type Props = {
  photo: string
}

const Header: React.FC<Props> = (props) => {
  return (
    <header className={classes.header}>
      <img className={classes.headerPhoto} src={props.photo}/>
      <div>Common info</div>
    </header>
  )
}

export default Header;
