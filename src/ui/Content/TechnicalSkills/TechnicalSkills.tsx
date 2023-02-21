import React from "react";
import classes from "src/ui/Content/TechnicalSkills/TechnicalSkills.module.scss"
import {TechnicalSkillsData} from "src/store/store.types";
import cn from "classnames";
import RecordsList from "../../common/RecordsList/RecordsList";
import ArrayView from "../../common/ArrayView/ArrayView";
import SimpleList from "../../common/SimpleList/SimpleList";

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
        <RecordsList items={listItems}/>
      </div>
      <div className={classes.TechnicalSkills__LanguagesData}>
        <label className={cn(classes.TechnicalSkills__Title, classes.TechnicalSkills__Title_withTopMargin, 'Title')}>{'Languages:'}</label>
        <ArrayView items={languages}/>
      </div>
      <div className={classes.TechnicalSkills__ListsBlock}>
        <div className={classes.TechnicalSkills__OperatingSystemsData}>
          <label className={cn(classes.TechnicalSkills__Title, classes.TechnicalSkills__Title_withTopMargin, 'Title')}>{'Operating systems:'}</label>
          <SimpleList items={operatingSystems}/>
        </div>
        <div className={classes.TechnicalSkills__NetworkingData}>
          <label className={cn(classes.TechnicalSkills__Title, classes.TechnicalSkills__Title_withTopMargin, 'Title')}>{'Networking:'}</label>
          <SimpleList items={networking}/>
        </div>
      </div>
    </div>
  )
}

export default TechnicalSkills;
