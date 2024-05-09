import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import {useState} from 'react'
export default function Counter() {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch()
    const [incAmount, setIncAmount] = useState(0)
    const addVal = Number(incAmount) || 0

    function resetAll() {
        setIncAmount(0)
        dispatch(reset());
    }
    return(
        <section>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
                
            </div>
            <input type="text" value={incAmount} onChange={(e) => setIncAmount(e.target.value)} />
            <div>
                <button onClick={() => dispatch(incrementByAmount(addVal))}>Add Amount</button>
                <button onClick={() => dispatch(resetAll)}>Reset</button>
            </div>
        </section>
    )
}