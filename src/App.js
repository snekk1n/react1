import React from 'react';
import Button from './Components/Button';
import Title from './Components/Title'
import Price from './Components/Price'
import Description from './Components/Description'
import Stars from './Components/Stars'
import Name from './Components/Name'
import img from './Components/Assets/rectangle-39.png'
import img1 from './Components/Assets/image.png'


const App = () => {
    return (
        <div>
            <div className={'wrapper'}>
                <img src={img} alt=""/>
                <Button/>
                <div>
                    <Title/>
                    <Description/>
                    <Price/>
                    <Stars/>
                </div>
            </div>
            <div className={'card'}>
                <img src={img1} alt=""/>
                <Price/>
                <Name/>
                <Description/>
                <Stars/>
            </div>
        </div>
    );
};

export default App;