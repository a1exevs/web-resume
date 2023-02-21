import React from "react";
import classes from "src/ui/Content/TechnicalSkills/TechnicalSkills.module.scss"
import {TechnicalSkillsData} from "src/store/store.types";
import cn from "classnames";
import List from "../../common/List/List";
import ArrayView from "../../common/ArrayView/ArrayView";

type Props = TechnicalSkillsData

const TechnicalSkills: React.FC<Props> = ({technicalAreas, languages, operatingSystems, networking}) => {
  const getYearsInAreaLabel = (yearsCount: number): string => {
    return `${yearsCount} ${(yearsCount === 1) ? 'year' : 'years'}`
  }

  const listItems = technicalAreas.map((area) => ({ name: area.name, value: getYearsInAreaLabel(area.yearsCount) }))

  return (
    <div className={classes.TechnicalSkills}>
      <div className={classes.TechnicalSkills__AreasData}>
        <label className={cn(classes.TechnicalSkills__Title, 'Title')}>{'Extensive experience in following areas:'}</label>
        <List items={listItems}/>
      </div>
      <div className={classes.TechnicalSkills__LanguagesData}>
        <label className={cn(classes.TechnicalSkills__Title, classes.TechnicalSkills__Title_withTopMargin, 'Title')}>{'Languages:'}</label>
        <ArrayView items={languages}/>
      </div>
    </div>
  )
}

export default TechnicalSkills;
