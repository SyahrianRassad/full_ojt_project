import { render, screen, cleanup } from "@testing-library/react"
import {BrowserRouter as Router} from 'react-router-dom';
import Login from "../component2/login";

import store from "../Store/store"
import { Provider} from 'react-redux';

afterEach(()=>{
    cleanup()
})

test('should render jest component', async ()=>{
    render(
        <Provider store={store}>
            <Router>
                <Login />
            </Router>,
        </Provider>
        );
    //test 1
    expect(screen.getByRole('owner')).toHaveTextContent('firegamma')
})

test('should render jest component', async ()=>{
    render(
        <Provider store={store}>
            <Router>
                <Login />
            </Router>,
        </Provider>
        );
    //test 1
    const jestElement = screen.getByRole('go-beranda'); //mengambil role
    expect(jestElement).not.toBeDisabled()
    // expect(jestElement).toHaveAttribute('to', '/beranda')
})

test('should render jest component', async ()=>{
    render(
        <Provider store={store}>
            <Router>
                <Login />
            </Router>,
        </Provider>
        );
    //test 1
    const jestElement = screen.getByRole('check-input'); //mengambil role
    expect(jestElement).not.toBeDisabled()
    expect(jestElement).toHaveAttribute('placeholder')
    expect(jestElement).toHaveAttribute('class', 'form-control')
})


