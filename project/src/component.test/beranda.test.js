import { render, screen, cleanup } from "@testing-library/react"
import {BrowserRouter as Router} from 'react-router-dom';
import Beranda from "../component2/beranda";

import store from "../Store/store"
import { Provider, useSelector} from 'react-redux';

import c1 from "../asset/g1.jpg";
import c2 from "../asset/g2.jpeg"

afterEach(()=>{
    cleanup()
})

test('should render jest component', async ()=>{
    render(
        <Provider store={store}>
            <Router>
                <Beranda />
            </Router>,
        </Provider>
        );
    //test 1
    expect(screen.getByRole('brand')).toHaveTextContent('Selamat Siang ')
})

test('should render jest component', async ()=>{
    render(
        <Provider store={store}>
            <Router>
                <Beranda />
            </Router>,
        </Provider>
        );
    //test 1
    
    expect(screen.getByRole('button1')).toBeEnabled()
})

test('should render jest component', async ()=>{
    render(
        <Provider store={store}>
            <Router>
                <Beranda />
            </Router>,
        </Provider>
        );
    //test 1
    
    expect(screen.getByRole('button2')).toBeEnabled()
})
