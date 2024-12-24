import Table from 'react-bootstrap/Table';

function TaskCard({id, description, isDone}) {
    return (  <Table striped bordered hover variant="dark">
            <thead>
          <tr>
            
            <th>Id</th>
            <th>Description</th>
            <th>isDone</th>
          </tr>
        </thead>
        <tbody>
        
          <tr>
            
            <td>{id}</td>
            <td>{description}</td>
            <th>{isDone}</th>
          </tr>
          </tbody>
      </Table> );
}

export default TaskCard;