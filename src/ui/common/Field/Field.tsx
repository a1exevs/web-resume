import React from "react";
import cn from "classnames"
import classes from "./Field.module.scss"

type Props = {
  label: string,
  value: string,
  type?: 'inline' | 'block'
}

const Field: React.FC<Props> = ({label, value, type = 'inline'}) => {
  return (
    <div className={cn(classes.Field, {[classes.Field_block]: type === 'block'})}>
      <label className={cn(
        classes.Field__Label, "Label",
        {
          [classes.Field__Label_tinyRightPadding]: type === 'inline',
          [classes.Field__Label_tinyBottomPadding]: type === 'block'
        }
      )}>
        {label + ':'}
      </label>
      <span className={cn(classes.Field__Value, "Text")}
            title={value}>
        {value}
      </span>
    </div>
  )
}

export default Field;
