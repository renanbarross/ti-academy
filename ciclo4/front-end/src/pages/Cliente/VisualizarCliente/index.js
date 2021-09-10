import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Container, Table } from "reactstrap";
import { api } from '../../../config';

export const VisualizarCliente = () => {
    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        massage: ''
    });

    const getClientes = async () => {
        await axios.get(api + "/listaclientes")
            .then((response) => {
                console.log(response.data.clientes);
                setData(response.data.clientes);
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: Não foi possível conectar a API.'
                })
            });
    }

    useEffect(() => {
        getClientes();
    }, []);

    return (
        <div className="p-3">
            <Container>
                {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
                <Table striped>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome do cliente</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td className="text-center">
                                    <Link to={"/cliente/" + item.id}
                                        className="btn btn-outline-primary btn-sm">Consultar</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}