import React, { useContext, useEffect, useState } from 'react'
import {HistoryGlobalContext} from '../context/history context/HistoryGlobalState'

const Tracker = () => {
    const context = useContext(HistoryGlobalContext)
    const {AddHistory} = context
    const [state, setstate] = useState({balance:Number(localStorage.getItem('balance')),added:null,removed:null})
    useEffect(() => {
            // console.table(localStorage.getItem('historyList'))
            localStorage.setItem("balance", state.balance);
            setstate({ ...state, balance: localStorage.getItem("balance") })
        
            
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.balance])
    const OnChangedHandler = (e) => {
        setstate({...state,[e.target.name]:e.target.value})
    }
    const Clear = (e) => {
        setstate({...state,[e.target.name]:null})
    }

    const AddBalance = () => {
        var added = document.getElementById('addedBalance').value
        setstate({ ...state, balance: Number(localStorage.getItem("balance")) + Number(added) })
        var obj = `+ ${added}`
        AddHistory(obj)
    }
    const RemoveBalance = () => {
        var removed = document.getElementById('removedBalance').value
        setstate({ ...state, balance: Number(localStorage.getItem("balance")) - Number(removed) })
        var obj = `- ${removed}`;
        AddHistory(obj)
    }
    return (
        <div className='main-container'>
            <h1>Total Balance</h1>
            {state.balance>0?(<div className="balance plus"><h3> {state.balance} $</h3> </div>):(<div className="balance minus"><h3> {state.balance} $</h3> </div>)}
            
            
            <h2>Operators</h2>
            <div className="operators">
                <div className='operator-container'>
                    <h3>Add Balance</h3>
                    <div className="form-control">
                    <input type="number" name="added" id="addedBalance" value={state.added} onChange={OnChangedHandler} placeholder=" Added Balance..." />
                        <span onClick={Clear} className="clear">&times;</span>
                    </div>
                    <button  className="plus" onClick={AddBalance}>Add +</button>
                </div>

                <div className='operator-container'>
                    <h3>Remove Balance</h3>
                    <div className="form-control">
                        <input type="number" name="removed" id="removedBalance" value={state.removed} onChange={OnChangedHandler} placeholder=" Removed Balance..." />
                        <span onClick={Clear} className="clear">&times;</span>
                    </div>
                    <button className="minus" onClick={RemoveBalance}>Remove -</button>
                </div>
            </div>
        </div>
    )
}

export default Tracker
