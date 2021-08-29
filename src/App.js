import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {

  const allCategory = ['all', ...new Set(items.map((item)=>item.category))] 

  const [menuItems, setMenuItems] = useState(items)
  const [categories, setcategories] = useState(allCategory)


  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter(item => item.category === category)
    setMenuItems(newItems)

  }

  return (
    <main>
       <section className='menu section'>
    <div className='title'>
      <h2>Our Menu</h2>
       <div className='underline'></div>
    </div>
     <Categories categories={categories} filterItems={filterItems} />
     <Menu items={menuItems} key={menuItems.id}/>
       </section>
    </main>
  )
}

export default App;
