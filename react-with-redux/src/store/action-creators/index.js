export const depositMoney = (amount) => { // *** Action creator for desposit money
    return {
        type: 'deposit',
        payload: amount
    }
};

export const withdrawMoney = amount => { // *** Action creator for withdraw money
    return {
        type: 'withdraw',
        payload: amount
    }
};