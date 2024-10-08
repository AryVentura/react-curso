import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One' ]);


    const onAddCategory = ( newCategory ) => {
      if( categories.includes(newCategory)) return;  //una opcion

      
      setCategories([newCategory, ...categories]);
    }

  return (
    <>
      <h1>Gif expert app</h1>

      <AddCategory 
          onNewCategory = { onAddCategory }
      />
      
      { 
        categories.map( (category) => (
            <GifGrid key={category} 
                      category={category}
            />
          )) 
      }


    </>
  )
}

