let projectId = 0

export const addProject = ({ project, disc, link, file }) => {
  return {
    type: 'ADD_PROJECT',
    id: projectId++,
    project,
    disc,
    link,
    file,
  }
} 