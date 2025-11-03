import React from 'react';

import ProjectCard from 'src/pages/projects-page/ui/project-card/project-card';
import { PROJECTS_PAGE_TYPE_WRITER_DELAY } from 'src/pages/projects-page/ui/projects-page.consts';
import classes from 'src/pages/projects-page/ui/projects-page.module.scss';
import { currentLang, TypeWriter } from 'src/shared';
import { ProjectsData } from 'src/store/store.types';

type Props = ProjectsData;

const ProjectsPage: React.FC<Props> = ({ projects }) => {
  return (
    <div className={classes.ProjectsPage}>
      <TypeWriter
        text={currentLang.labels.PROJECTS}
        delay={PROJECTS_PAGE_TYPE_WRITER_DELAY}
        variant="h2"
        className={classes.ProjectsPage__Title + ' glitch'}
      />
      <div className={classes.ProjectsPage__Items}>
        {projects.map((project, idx) => (
          <ProjectCard key={project.title + idx} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
