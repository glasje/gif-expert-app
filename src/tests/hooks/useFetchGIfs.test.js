import { shallow } from 'enzyme';
import React from 'react';
import { useFetchGifs } from '../../components/hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks'
describe('Pruebas en <GitExpertApp/>', () => {

    test('debe de retornar el estado inicial', async () => {
        const {result,waitForNextUpdate}= renderHook(()=>useFetchGifs("One Punch"))
        const {data:images,loading}= result.current;
        await waitForNextUpdate()
     
        expect(images).toEqual([]) 
        expect(loading).toBe(true) 
    
    })

    test('debe retornar un arreglo de imagenes ', async () => {
        const {result,waitForNextUpdate}= renderHook(()=>useFetchGifs("One Punch"))
        await waitForNextUpdate()
        const {data:images,loading}= result.current;
     
        expect(images.length).toBe(10) 
        expect(loading).toBe(false) 
        
    })
    
  
    
})