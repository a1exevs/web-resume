import React from "react";
import classes from "./ArrayView.module.scss";
import cn from "classnames";

type Props = {
  items: string[]
}

const ArrayView: React.FC<Props> = ({ items }) => {
  return (
    <div className={classes.ArrayView}>
      { items.map((item) =>
        <label className={cn(classes.ArrayView__Item, 'Title')}>{item}</label>) }
    </div>
  )
}

export default ArrayView;
