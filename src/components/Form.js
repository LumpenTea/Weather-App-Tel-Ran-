import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeatherAction } from '../units/fetchWeatherAction';

const Form = () => {

    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    return (
        <div>
            <input onChange={e => setCity(e.target.value)}
                type='text'
                placeholder='City'
                value={city}
            />
            <button onClick={() => { dispatch(fetchWeatherAction(city)); setCity('') }}>Get weather</button>
        </div>
    )
}

export default Form