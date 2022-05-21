import React from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { increment, dcrement} from '../Action/Index'
export default function Plusminus() {
  const dispatch=useDispatch();
  const count=useSelector((state)=>state.changecount)
  console.log(count);
  return (
    <div>
<button onClick={()=>{ dispatch(increment())}}>+</button>
{count}
<button onClick={()=>{ dispatch(dcrement())}}>-</button>

    </div>
  )
}
