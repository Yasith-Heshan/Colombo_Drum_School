export const shortenName = (fullName)=>{
    const nameArray = fullName.split(' ');
    const firstName = nameArray[0];
    const lastName = nameArray.length > 1 ? nameArray[nameArray.length - 1] : '';

    return `${firstName} ${lastName.charAt(0)}.`;
}

export const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
};

export const getItem = (id) => {
    let temp = null;
    pricesList.forEach((item) => {
        if (item.id === id) {
            temp = item;
        }
    });
    return temp;
};