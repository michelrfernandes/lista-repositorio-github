interface RepositoryItemProps {
    repository: {
        name: string;
        description: String;
        html_url: string;
    }
}

export function RepositoryItem(props:RepositoryItemProps){
    return (
        <li>
            <div className="text-1">
                <strong>{props.repository.name}</strong>
                <p>{props.repository.description}</p>
            </div>
            
            <a href={props.repository.html_url} target="_blank">
                <button>Acessa Repositório</button>
            </a>
        </li>
    )
}