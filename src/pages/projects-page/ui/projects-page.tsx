import React from 'react';

import ProjectCard from 'src/pages/projects-page/ui/project-card/project-card';
import classes from 'src/pages/projects-page/ui/projects-page.module.scss';
import { ProjectsData } from 'src/store/store.types';

type Props = ProjectsData;

const ProjectsPage: React.FC<Props> = ({ projects }) => {
  return (
    <div className={classes.ProjectsPage}>
      <h2 className={classes.ProjectsPage__Title + ' glitch'}>Projects</h2>
      <div className={classes.ProjectsPage__Items}>
        {projects.map((project, idx) => (
          <ProjectCard key={project.title + idx} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
