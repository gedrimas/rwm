const projects = (state = [], action) => {
  switch(action.type) {
    case 'ADD_PROJECT':
      return [
        ...state,
        {
          id: action.id,
          project_title: action.project_title,
          description: action.description,
          link: action.link,
        }
      ]
    case 'FETCH_ALL':
      return [
        ...state, ...action.data
      ]  
    default: state  
  }
}

export default projects