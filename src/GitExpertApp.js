import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GitExpertApp =({defaultCategories = [ ]})=> {
    
    //const categories = ['One Punch','Samurai X','Dragon Ball Z'];
    const [categories, setCategories] = useState(defaultCategories);
    
    return (
        <div>
            <h1>GitExpertApp</h1> 
           
            <AddCategory
                setCategories={setCategories}
            />
           <hr/>
            <ol>
                {categories.map((category,i) =>(
                    <GifGrid 
                    key={i}
                    category={category}/>
                ))}
            </ol>
        </div>
    )
}

GitExpertApp.propTypes = {

}

export default GitExpertApp;

