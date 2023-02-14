import React from "react";
import classes from "./CommonInfo.module.scss"
import {CommonInfoData} from "../../store/store.types";
import Field from "../common/Field/Field";

type Props = CommonInfoData;

const CommonInfo: React.FC<Props> = (props) => {
  return (
    <div className={classes.CommonInfo}>
      <img className={classes.CommonInfo__Photo} src={props.photoPath}/>
      <div className={classes.CommonInfo__Main}>
        <Field label={'Full name'} value={props.fullName}/>
        <Field label={'BirthDate'} value={props.birthday}/>
        <Field label={'City'} value={props.city}/>
        <Field label={'Work at'} value={props.workAt}/>
      </div>
      <div className={classes.CommonInfo__Summary}>
        <Field label={'Summary'} value={props.summary} type="block"/>
      </div>
    </div>
  )
}

export default CommonInfo;
