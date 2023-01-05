import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Mahasiswa from './Mahasiswa';
import {v4 as uuid} from "uuid";
import {Link, useNavigate} from 'react-router-dom'

function Add(){

    const[npm, setNPM] = useState("");
    const[name, setName] = useState("");
    const[age, setAge] = useState("");
    const[alamat, setAlamat] = useState("");
    

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a = npm,
        b = name,
        c = age,
        d = alamat;

        Mahasiswa.push({id: uniqueId, NPM : a, Name : b, Age : c, Alamat : d});

        history("/");
    }

    return <div>
        <Form className="d-grid gap-2" style={{margin:"15rem"}}>
            <div style={{width: "100%", display: "flex", alignItems: "center"}}>
            <div style={{width: "100%", display: "flex", justifyContent: "flex-start"}}>
            <h1>Membuat Data Mahasiswa</h1>
            </div>
            </div>
            <Form.Group className="mb-3" controlId="forNPM">
                <Form.Control type="text" placeholder="Masukkan NPM" required onChange={(e) => setNPM(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="forName">
                <Form.Control type="text" placeholder="Masukkan Nama" required onChange={(e) => setName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="forAge">
                <Form.Control type="text" placeholder="Masukkan Umur" required onChange={(e) => setAge(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="forAlamat">
                <Form.Control type="text" placeholder="Masukkan Alamat" required onChange={(e) => setAlamat(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Link className='d-grid gap-2' to={'/'}>
            <Button >Kembali</Button>
            </Link>
            <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
        </Form>
    </div>;
}

export default Add;