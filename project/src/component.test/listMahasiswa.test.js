import { render, screen, cleanup } from "@testing-library/react"
import List from '../component2/listMahasiswa'
import {BrowserRouter as Router} from 'react-router-dom';

afterEach(()=>{
    cleanup()
})

test('should render jest component', async ()=>{
    const data = {nama: "Syahrian", alamat:"Bendo", jurusan: "RPL", gender: "Laki-laki"}
    render(
        <Router>
            <List maha={data} />
        </Router>,
        );
    //test 1
    const jestElement = await screen.getByRole('m-nama'); //mengambil role
    expect(jestElement).toHaveTextContent('Syahrian'); //cek isi content
})

test('should render jest component', async ()=>{
    const data = {nama: "Syahrian", alamat:"Bendo", jurusan: "RPL", gender: "Laki-laki"}
    render(
        <Router>
            <List maha={data} />
        </Router>,
        );
    //test 1
    const jestElement = screen.getByRole('m-nama'); //mengambil role
    expect(jestElement).toHaveTextContent('Syahrian'); //cek isi content
})

test('should render jest component', async ()=>{
    const data = {nama: "Syahrian", alamat:"Bendo", jurusan: "RPL", gender: "Laki-laki"}
    render(
        <Router>
            <List maha={data} />
        </Router>,
        );
    //test 1
    const jestElement = await screen.getByRole('m-alamat'); //mengambil role
    expect(jestElement).toHaveTextContent('Bendo'); //cek isi content
})

test('should render jest component', async ()=>{
    const data = {nama: "Syahrian", alamat:"Bendo", jurusan: "RPL", gender: "Laki-laki"}
    render(
        <Router>
            <List maha={data} />
        </Router>,
        );
    //test 1
    
    const jestElement = await screen.getByRole('m-gender'); //mengambil role
    expect(jestElement).toHaveTextContent('Laki-laki'); //cek isi content
})