const projects = (state = [], action) => {
  switch(action.type) {
    case 'ADD_PROJECT':
      return [
        ...state,
        {
          id: action.id,
          project: action.project,
          disc: action.disc,
          link: action.link,
          file: action.file,
        }
      ]
    default: state  
  }
}

export default projects