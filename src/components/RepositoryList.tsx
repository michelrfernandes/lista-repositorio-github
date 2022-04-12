import { useEffect, useState } from "react";

import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

interface IRepositoryList {
    name: string;
    description: String;
    html_url: string;
}

export function RepositoryList(){
    const [repositories, setRepositories] = useState<IRepositoryList[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response =>  response.json())
        .then(data => setRepositories(data))
    },[] );
        
  
    return (
        <section className="repository-list">
            <header>
                <img src="https://avatars.githubusercontent.com/u/28929274?v=4" alt=""/>
                <h1>Lista de Repositórios</h1>
            </header>
            
            <ul>
                {repositories.map(repository => <RepositoryItem key={repository.name} repository={repository}/>)}                       
            </ul>
        </section>
    )
}