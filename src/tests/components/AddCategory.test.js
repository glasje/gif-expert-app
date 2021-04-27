import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"
import  '@testing-library/jest-dom'
describe('pruebas en el componente <AddCategory/>', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />)
    
    beforeEach( ()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />)

    } )

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo'
        input.simulate('change', { target: { value } });
      
        expect(  wrapper.find('p').text()).toBe(value)

    })

    test('No debe de postear el submit', () => {
        wrapper.find('form').simulate('submit',{ preventDefault(){} });

        expect(setCategories).not.toHaveBeenCalled()
    })

    test('debe llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'Hola mundo'
        const input = wrapper.find('input');
        input.simulate('change', { target: { value } });
        
        wrapper.find('form').simulate('submit',{ preventDefault(){} });
        expect(setCategories).toHaveBeenCalled()
        //expect(setCategories).toBeCalledTimes(2)
        //expect(setCategories).toHaveBeenCalledWith(expect.any(Function))

        expect(input.prop('value')).toBe('')
    })
    
    
})
