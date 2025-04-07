import React, { useState } from 'react'
import Card from './components/Card'
import Button from './components/button';

const App = () => {

  const [count,setCount]= useState(0);

     function handleClick(){
      setCount(count+1);
       }

  return (
   <div>
    <Button   handleClick={handleClick}  
    text="click me"     
    >
      <h1>{count}</h1>
    </Button>
    {/* <Card name="anshika">
      <h2>i am content</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nam aliquid dolorem voluptate provident tempora hic fugiat, sunt porro ea, libero ratione aspernatur facere fugit harum animi cumque excepturi id.</p>
    </Card> */}
   </div>
  )
}

export default App