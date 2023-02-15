import { render, screen, cleanup } from "@testing-library/react"
import renderer from 'react-test-renderer'
import Jest from './jest'

afterEach(()=>{
    cleanup()
})

test('should render jest component', ()=>{
    const data = {id:1, title:"wash dishes", completed: true}
    render(<Jest data={data}/>);
    //test 1
    const jestElement = screen.getByRole('role-1'); //mengambil role
    expect(jestElement).toBeInTheDocument();
    expect(jestElement).toHaveTextContent('Hello World!'); //cek isi content
})

test('should render jest component', ()=>{
    const data = {id:1, title:"wash dishes", completed: false}
    render(<Jest data={data}/>);

    const jestElement2 = screen.getByRole('todo-1');
    expect(jestElement2).toHaveTextContent('wash dishes')
    expect(jestElement2).not.toContainHTML('<strike>')
})

test('should render jest component', ()=>{
    const data = {id:2, title:"wash car", completed: true}
    render(<Jest data={data}/>);

    const jestElement2 = screen.getByRole('todo-2');
    expect(jestElement2).toHaveTextContent('wash car');
    expect(jestElement2).not.toContainHTML('<strike>')
})

test('maches snapshoot', ()=>{
    const data = {id:2, title:"wash car", completed: true}
    const tree = renderer.create(<Jest data={data}/>).toJSON
    expect(tree).toMatchSnapshot();
})