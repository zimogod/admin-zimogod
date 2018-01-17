export const ADD = 'ADD';
export const ADD1 = 'ADD1';
export const ADD2 = 'ADD2';

export const add = (item) => {
    return {
        type:'ADD',
        payload:item
    }
};
export const add1 = (num) => {
    return {
        type:'ADD1',
        payload:num
    }
};
export const add2 = (str) => {
    return {
        type:'ADD2',
        payload:str
    }
};


