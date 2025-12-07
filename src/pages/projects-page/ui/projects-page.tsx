import React from 'react';

import ProjectCard from 'src/pages/projects-page/ui/project-card/project-card';
import { PROJECTS_PAGE_TYPE_WRITER_DELAY } from 'src/pages/projects-page/ui/projects-page.consts';
import classes from 'src/pages/projects-page/ui/projects-page.module.scss';
import { TypeWriter } from 'src/shared';
import { LanguageConstants } from 'src/shared/model/lang/lang.types';
import { ProjectsData } from 'src/store/store.types';

type Props = {
  currentLang: LanguageConstants;
  projectsData: ProjectsData;
};

const ProjectsPage: React.FC<Props> = ({ currentLang, projectsData }) => {
  return (
    <div className={classes.ProjectsPage}>
      <TypeWriter
        text={currentLang.labels.PROJECTS}
        delay={PROJECTS_PAGE_TYPE_WRITER_DELAY}
        variant="h2"
        className={classes.ProjectsPage__Title}
      />
      <div className={classes.ProjectsPage__Items}>
        {projectsData.projects.map((project, idx) => (
          <ProjectCard key={project.title + idx} project={project} currentLang={currentLang} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
