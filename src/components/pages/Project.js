import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import styles from './Project.module.css'



function Project(){

    const { id } = useParams()
    const [project, setProject] = useState([])


    useEffect(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: "GET",
        headers: {
            'Contant-Type': 'application/json'
        },
      }).then(resp => resp.json())
      .then(data => {
        setProject(data)
      }).catch(err => console.log(err))
    }, [id])



    return (<p>{project.name}</p>)
}




export default Project;