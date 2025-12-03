import cn from 'classnames';
import React from 'react';

import classes from 'src/pages/projects-page/ui/project-card/project-card.module.scss';
import { currentLang, Icon } from 'src/shared';
import { IconName } from 'src/shared/ui/icon/icon.names';
import { ProjectItemData } from 'src/store/store.types';

type Props = {
  project: ProjectItemData;
};

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div
      className={classes.ProjectCard}
      role="button"
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === 'Enter' && project.links?.live) {
          window.open(project.links.live, '_blank', 'noopener,noreferrer');
        }
      }}
    >
      <div className={classes.ProjectCard__ImageWrapper}>
        <img alt={project.title} src={project.logo} className={classes.ProjectCard__Image} />
        <div className={classes.ProjectCard__Overlay} />
      </div>
      <div className={classes.ProjectCard__Content}>
        <h3 className={classes.ProjectCard__Title}>{project.title}</h3>
        <p className={classes.ProjectCard__Description}>{project.description}</p>
        <div className={classes.ProjectCard__Stack}>
          <h4 className={classes.ProjectCard__StackTitle}>STACK:</h4>
          <div className={classes.ProjectCard__StackList}>
            {project.stack.map(item => (
              <span key={item} className={classes.ProjectCard__StackItem}>
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className={classes.ProjectCard__Footer}>
          {project.links?.live && (
            <a
              className={classes.ProjectCard__Link}
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={IconName.LINK} width="2em" height="2em" />
              <span className={cn(classes.ProjectCard__LinkLabel, classes.ProjectCard__LinkLabel_capitalize)}>
                {currentLang.labels.LIVE_DEMO}
              </span>
            </a>
          )}
          {project.links?.repo && (
            <a
              className={classes.ProjectCard__Link}
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={IconName.CODE} width="2em" height="2em" />
              <span className={cn(classes.ProjectCard__LinkLabel, classes.ProjectCard__LinkLabel_capitalize)}>
                {currentLang.labels.REPOSITORY}
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
