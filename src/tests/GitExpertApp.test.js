import { shallow } from 'enzyme';
import React from 'react';
import {GitExpertApp} from '../GitExpertApp'
describe('Pruebas en <GitExpertApp/>', () => {
    test('debe de mostrar correctamente', () => {
        const wrapper = shallow(<GitExpertApp />)
        expect(wrapper).toMatchSnapshot()
    })

    test('debe de mostrar una categoria de elementos', () => {
        const categories = ['One Punch','Dragon Ball Z'];
        const wrapper = shallow(<GitExpertApp defaultCategories={categories} />)
        expect(wrapper.find('GifGrid').length).toBe(categories.length)

    })
    
})
