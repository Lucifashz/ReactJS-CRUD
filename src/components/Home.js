import React, { Fragment } from 'react';
import {Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Mahasiswa from './Mahasiswa';
import {Link, useNavigate} from 'react-router-dom';


function Home(){

    let history = useNavigate();

    const handleEdit = (id, npm, name, age, alamat) => {
        localStorage.setItem('NPM',npm);
        localStorage.setItem('Name',name);
        localStorage.setItem('Age',age);
        localStorage.setItem('Alamat',alamat);
        localStorage.setItem('Id',id);
    }

    const handleDelete = (id) => {
        var index = Mahasiswa.map(function(e){
            return e.id
        }).indexOf(id);

        Mahasiswa.splice(index,1);

        history('/');
    }

    return(
        <Fragment>
            <div style={{margin:"10rem"}}>
            <div style={{width: "100%", display: "flex", alignItems: "center"}}>
            <div style={{width: "100%", display: "flex", justifyContent: "flex-start"}}>
            <h1>Data Mahasiswa Universitas Gunadarma</h1>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end"}}>
            <Link style={{width: "100px"}} to="/create">
                <Button style={{width: "100px"  }} size="1g">Create</Button>
            </Link>
            </div>
            </div>
            <br>
            </br>
            
                <Table striped borederd hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                NPM
                            </th>
                            <th>
                                Nama 
                            </th>
                            <th>
                                Umur
                            </th>
                            <th>
                                Alamat
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Mahasiswa && Mahasiswa.length > 0
                            ?
                            Mahasiswa.map((item) => {
                                return(
                                    <tr>
                                        <td>
                                            {item.NPM}
                                        </td>
                                        <td>
                                            {item.Name}
                                        </td>
                                        <td>
                                            {item.Age}
                                        </td>
                                        <td>
                                            {item.Alamat}
                                        </td>
                                        <td>
                                            <Link to={'/edit'}>
                                            <Button onClick={() => handleEdit(item.id, item.NPM, item.Name, item.Age, item.Alamat)}>EDIT</Button>
                                            </Link>
                                            &nbsp;
                                            <Button style={{background: "red", border: "red" }} onClick={() => handleDelete(item.id)}>DELETE</Button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No data avaible"
                        }
                    </tbody>

                </Table>
            </div>
        </Fragment>
    )
}

export default Home;