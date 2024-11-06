import CustomMenuItem from '../components/MenuItem';
import React from 'react';
import { Data } from '../helpers/Data';
import '../styles/Menu.css';

export const Menu = () => {
    return (
        <div className='menu'>
            <h1 className='menuTitle'>Burgelerimiz</h1>
            <div className='menuList'>
                {Data.map((item, key) => {
                    return (
                        <CustomMenuItem
                            key={key}
                            image={item.image}
                            name={item.name}
                            content={item.content}
                            price={item.price}
                        />
                    );
                })}
            </div>
        </div>
    );
};
