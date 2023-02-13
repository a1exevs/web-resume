import React from "react";
import classes from "./Header.module.scss"
import cn from "classnames";
import {HeaderData} from "../../store/store.types";

type Props = {
  data: HeaderData
}

const Header: React.FC<Props> = (props) => {
  return (
    <header className={classes.header}>
      <label className={classes.header__mainLabel}>Resume of Alexander Olegovich Evstafiadi</label>
      <div className={classes.header__lastUpdateDate}>
        <label className={cn(classes.header__lastUpdateDateLabel, "label")}>Last update:</label>
        <div className={cn(classes.header__lastUpdateDateValue, "text")}
             title={props.data.lastUpdateDate}>
          {props.data.lastUpdateDate}
        </div>
      </div>
    </header>
  )
}

export default Header;
