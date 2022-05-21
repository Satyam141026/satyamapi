
import React ,{forwardRef} from 'react';

function User2(Props,ref) {
  return (
    <div className="App">
   <h1>Forward in react</h1>
<input type="text" ref={ref}/>
    </div>
  );
}

export default forwardRef( User2);
