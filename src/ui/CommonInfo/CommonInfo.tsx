import React from "react";
import classes from "./CommonInfo.module.scss"

type Props = {
  photo: string
}

const CommonInfo: React.FC<Props> = (props) => {
  return (
    <div className={classes.commonInfo}>
      <img className={classes.commonInfo__Photo} src={props.photo}/>
      <div>Common info</div>
    </div>
  )
}

export default CommonInfo;
