
import { shallow } from 'enzyme';
import React from 'react';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../components/hooks/useFetchGifs';

jest.mock('../../components/hooks/useFetchGifs')
describe('Prueba en el <GifGrid/>', () => {

 
    const category = 'One Punch'
    test('debe de mostrar correctamente', () => {
        useFetchGifs.mockReturnValue({ data: [], loading: true })
        const wrapper = shallow(<GifGrid />)
        expect(wrapper).toMatchSnapshot()
    })

    test('debe de mostrar item cuando se cargan imagenes', () => {
        const gifs = [{
            id: 'adv',
            url: 'jlkasdlkjdslkajjlkdas',
            title: 'sdffdssf'
        }];
        useFetchGifs.mockReturnValue({ data: gifs, loading: false })
        const wrapper = shallow(<GifGrid />)
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);


    })

})
