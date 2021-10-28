import React from 'react';
import { useSelector } from 'react-redux';

const Account = (props) => {
    const amount = useSelector((amt) => amt.account);
    console.log(amount);
    return (
        <div>
            <h3>{amount}</h3>
        </div>
    );
};

export default Account;