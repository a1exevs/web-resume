import React from "react";
import classes from "src/ui/Content/TechnicalSkills/TechnicalSkills.module.scss"
import {TechnicalSkillsData} from "src/store/store.types";
import cn from "classnames";
import List from "../../common/List/List";

type Props = TechnicalSkillsData

const TechnicalSkills: React.FC<Props> = ({technicalAreas}) => {
  const getYearsInAreaLabel = (yearsCount: number): string => {
    return `${yearsCount} ${(yearsCount === 1) ? 'year' : 'years'}`
  }

  const listItems = technicalAreas.map((area) => ({ name: area.name, value: getYearsInAreaLabel(area.yearsCount) }))

  return (
    <div className={classes.TechnicalSkills}>
      <div className={classes.TechnicalSkills__AreasData}>
        <label className={cn(classes.TechnicalSkills__AreasDataTitle, 'Title')}>{'Extensive experience in following areas:'}</label>
        <div className={classes.TechnicalSkills__AreasDataWrapper}>
          <List items={listItems}/>
        </div>
      </div>
    </div>
  )
}

export default TechnicalSkills;
