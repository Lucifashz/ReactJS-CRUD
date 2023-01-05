import React, {useState, useEffect} from 'react';
import {Button, Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Mahasiswa from './Mahasiswa';
import {v4 as uuid} from "uuid";
import {Link, useNavigate} from 'react-router-dom'

function Edit(){
    const[npm, setNPM] = useState("");
    const[name, setName] = useState("");
    const[age, setAge] = useState("");
    const[alamat, setAlamat] = useState("");
    const[id, setId] = useState("");

    let history = useNavigate();

    var index = Mahasiswa.map(function(e){
        return e.id
    }).indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();

        let a = Mahasiswa[index];
        a.NPM = npm;
        a.Name = name;
        a.Age = age;
        a.Alamat = alamat;

        history("/");
    }

    useEffect(() =>{
        setNPM(localStorage.getItem('NPM'))
        setName(localStorage.getItem('Name'))
        setAge(localStorage.getItem('Age'))
        setAlamat(localStorage.getItem('Alamat'))
        setId(localStorage.getItem('Id'))
    },[])

    return ( 
        <div>
            <Form className="d-grid gap-2" style={{margin:"15rem"}}>
            <div style={{width: "100%", display: "flex", alignItems: "center"}}>
            <div style={{width: "100%", display: "flex", justifyContent: "flex-start"}}>
            <h1>Mengubah Data Mahasiswa</h1>
            </div>
            </div>
            <Form.Group className="mb-3" controlId="forNPM">
                <Form.Control type="text" placeholder="Masukkan NPM" value={npm} required onChange={(e) => setNPM(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="forName">
                <Form.Control type="text" placeholder="Masukkan Nama" value={name} required onChange={(e) => setName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="forAge">
                <Form.Control type="text" placeholder="Masukkan Umur" value={age} required onChange={(e) => setAge(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="forAlamat">
                <Form.Control type="text" placeholder="Masukkan Alamat" value={alamat} required onChange={(e) => setAlamat(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Link className='d-grid gap-2' to={'/'}>
            <Button >Kembali</Button>
            </Link>
            <Button onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
        </Form>
        </div>
        )
    

}

export default Edit;