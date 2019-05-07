
export const addProject = ({ project_title, description, link, id }) => {
  return {
    type: 'ADD_PROJECT',
    project_title,
    description,
    link,
    id,
  }
}

export const sendProject = (formData) => {
  return function () {  
    const JSheaders = new Headers();
    JSheaders.append("Content-Type", "application/json")
    fetch("http://localhost:3001/projects", {
      headers: JSheaders,
      method: "POST",
      body: formData
    }).then(response => {
      if(response.ok) {

      }
    })
  }  
}

export const editProject = (formData, id) => {
  return function () {  
    const JSheaders = new Headers();
    JSheaders.append("Content-Type", "application/json")
    fetch(`http://localhost:3001/projects/${id}`, {
      headers: JSheaders,
      method: "PUT",
      body: formData
    }).then(response => {
      if(response.ok) {
      }
    })
  }  
}

export const deleteProject = (id) => {
  return function () {  
    const JSheaders = new Headers();
    JSheaders.append("Content-Type", "application/json")
    fetch(`http://localhost:3001/projects/${id}`, {
      headers: JSheaders,
      method: "DELETE",
    }).then(response => {
      if(response.ok) {
      }
    })
  }  
}

export function generalFetch(){
  return function (dispatch){ 
    let url = "http://localhost:3001/projects"
      fetch(url)
        .then(resp => resp.json())
        .then(data => dispatch(getAllProjects(data)))
  }
}

export const getAllProjects = (data) => {
  return {
    type: 'FETCH_ALL',
    data,
  }  
}

export const formEdititng = (edit) => {
  return {
    type: 'FORM_EDITING',
    edit,
  }
}

export const formShow = (show) => {
  return {
    type: 'SHOW_MODAL',
    show,
  }
}

export const choseProject = (id) => {
  return {
    type: 'CURRENT_PROJECT',
    id,
  }
}

export const selectPage = (page) => {
  return {
    type: 'PAGINATION_PAGE',
    page,
  }
}