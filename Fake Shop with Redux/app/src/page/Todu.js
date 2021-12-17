import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import TuduItem from '../components/TuduItem';
import {setTudus} from '../redux/action'


function Todu() {

    const [tudu,setTudu] =useState('');
    

    const TudusSelect = useSelector((state) => state.allTudu.tudus);

    const dispatch = useDispatch();



    const Addtudu=(e)=>{
            e.preventDefault();

            const tuduObject= {
                tudu:tudu,
                id:Date.now(),
                done:false
            }

            dispatch(setTudus(tuduObject,))
            setTudu('');

    }



    return (
        <div className="todu">
            
            <div className="tudu__area">
                <TuduItem key={TudusSelect?.id} done={TudusSelect?.done} text={TudusSelect?.tudu} id={TudusSelect?.id} />

                <form className="add__area">
                    <input type="text" value={tudu} onChange={(e) => setTudu(e.target.value)} />

                    <button onClick={Addtudu} disabled={!tudu} type="submit">Add</button>
                </form>
            </div>
            
        </div>
    )
}

export default Todu
