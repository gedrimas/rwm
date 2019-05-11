import { combineReducers } from 'redux'

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
         ...action.data
      ]    
    default: return state  
  }
}

const isEdit = (isEditstate = false, action) => {
  switch(action.type) {
    case 'FORM_EDITING':
    return isEditstate != action.edit

    default: return isEditstate 
  }
}

const isFormShown = (isShow = false, action) => {
  switch(action.type) {
    case 'SHOW_MODAL':
    return isShow != action.show
    
    default: return isShow
  }
}

const editingProjectId = (projectId = null, action) => {
  switch(action.type) {
    case 'CURRENT_PROJECT':
    return projectId = action.id

    default: return projectId
  }
}

const paginationPage = (page = 1, action) => {
  switch(action.type) {
    case 'PAGINATION_PAGE':
    return page = action.page

    default: return page
  }
}

const allProjects = combineReducers({
  projects,
  isEdit,
  isFormShown,
  editingProjectId,
  paginationPage,
})

export default allProjects