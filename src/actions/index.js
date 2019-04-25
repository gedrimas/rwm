
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
  return function (dispatch) {  
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