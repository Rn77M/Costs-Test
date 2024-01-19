import { useHistory } from 'react-router-dom';

import ProjectForm from '../project/ProjectForm';

import styles from './Newprojects.module.css'

function Newprojects(){

    const history = useHistory()

    function createPost(project){
        //inicialmente costs e serviços

        project.costs = 0;
        project.services = [];

        fetch("http://localhost:5000/projects", {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body:JSON.stringify(project),
        }).then((resp) => {resp.json()})
        .then((data) => {
            console.log(data)
            history.push('/projects', {message: 'Projeto Criado com Sucesso'})
        })
        // redirect
        .catch(err => console.log(err))
    }




    return (
        <div className={styles.newprojects_container}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
    )
}

export default Newprojects;