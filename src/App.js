import React from 'react';
import Data from './BooksData'
import Books from './Books'
function App() {
  return (
    <div className='container'>
      <h1>Best Books</h1>
      <div className='bookcontainer'>
        {
          Data.map((val)=>{
            return(
              <Books key={val.id} {...val}/>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
