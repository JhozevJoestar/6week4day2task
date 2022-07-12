import React from 'react';
import './index.css';
import img from './img/ECH.jpg'
import { useState } from 'react';

const App = () => {
    const [description, setDescripton] = useState(true);
    const [windowDescription, setWindowDescription] = useState(false);
    const [toBasket, setToBasket] = useState(false);
    const [deleteBasket, setDeleteBasket] = useState(false)
    const [deleteBasket1, setDeleteBasket1] = useState(false)
    const [deleteBasket2, setDeleteBasket2] = useState(false)
    const [deleteBasket3, setDeleteBasket3] = useState(false)
    const [deleteBasket4, setDeleteBasket4] = useState(false)


    const handleDescription = () => {
        setDescripton(false)
        setWindowDescription(true)
    }

    const handleRemoveDescription = () => {
        setDescripton(true)
        setWindowDescription(false)
    }




    const handleBasket = () => {
        setToBasket(true)
        setDeleteBasket(true)
    }

    const deletedBasket = () => {
        setDeleteBasket(false)
        setDeleteBasket1(true)
    }

    const deletedBasket1 = () => {
        setDeleteBasket1(false)
        setDeleteBasket2(true)
    }

    const deletedBasket2 = () => {
        setDeleteBasket2(false)
        setDeleteBasket3(true)
    }

    const deletedBasket3 = () => {
        setDeleteBasket3(false)
        setDeleteBasket4(true)
    }

    const deletedBasket4 = () => {
        setDeleteBasket4(false)
        setToBasket(false)
    }
    return (
<div className='container'>        
        <div>
            <img src={img} alt="abc" />
        </div>
        <div className='containerBody'>
            <div className='containerBody1'>
                <div className='productName'>
                  Эчпочмак
                </div>
                <div className='productName'>
                  1200$
                </div>
            </div>
            <div className='containerBody2'>
                <div>
                { description ? <button className='productBtn' onClick={handleDescription}>Детали</button>  : <button className='productBtn'>Детали</button>}
                { windowDescription ? <div className="window">
                Lorem ipsum dolor sit amet,
                 consectetur adipisicing elit. Animi, dignissimos.
              <button className="btnWindow" onClick={handleRemoveDescription}>
                x
              </button>
            </div>  : null}
                </div>
            </div>
        </div> 
        <hr />
        <div className='footerText'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, dignissimos.
        </div>
        { toBasket ? <button className='disableButton' disabled>Уже в корзине</button>  : <button className='footerButton' onClick={handleBasket}>Добавить в корзину</button>} <br></br>
        { deleteBasket ? <button className='deleteButton' onClick={deletedBasket}>Удалить Эчпочмак</button>  : null}
        { deleteBasket1 ? <button className='deleteButton' onClick={deletedBasket1}>Серьезно?</button>  : null}
        { deleteBasket2 ? <button className='deleteButton' onClick={deletedBasket2}>Зачем?</button>  : null}
        { deleteBasket3 ? <button className='deleteButton' onClick={deletedBasket3}>Это же эчпочмак!</button>  : null}
        { deleteBasket4 ? <button className='deleteButton' onClick={deletedBasket4}>Последний шанс одуматься</button>  : null}
</div> 
    );
};

export default App;