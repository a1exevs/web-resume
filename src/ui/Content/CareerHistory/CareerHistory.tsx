import React from "react";
import classes from './CareerHistory.module.scss'
import Stepper from "../../common/Stepper/Stepper";
import Card from "../../common/Card/Card";
import {CareerHistoryData} from "../../../store/store.types";
import Field from "../../common/Field/Field";
import Block from "../../common/Block/Block";

type Props = CareerHistoryData

const CareerHistory: React.FC<Props> = ({companyExperiences}) => {
  return (
    <div className={classes.CareerHistory}>
      <Stepper>
        {companyExperiences.map((experience) =>
          <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
            <Block>
              <Field label={"Company"} value={experience.companyName}/>
              <Field label={"Period"} value={experience.workPeriod}/>
              <Field label={"Career"} value={experience.career}/>
            </Block>
            <label
              className={"IntermediateTitle IntermediateTitle_withCenterAlignment IntermediateTitle_withoutTopMargin"}>
              {"Project list (the most recent projects at the top)"}
            </label>
            {
              experience.projectList.map((project) =>
                <Card>
                  <Field label={"Project description"} value={project.projectDescription}/>
                  <Field label={"Environment"} value={project.environment.join(", ")}/>
                  <Field label={"Responsibilities"} value={project.responsibilities.join(", ")}/>
                </Card>
              )
            }
          </div>
        )}
      </Stepper>
    </div>
  )
}

export default CareerHistory;
