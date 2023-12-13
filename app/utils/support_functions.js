export const shortenName = (fullName)=>{
    const nameArray = fullName.split(' ');
    const firstName = nameArray[0];
    const lastName = nameArray.length > 1 ? nameArray[nameArray.length - 1] : '';

    return `${firstName} ${lastName.charAt(0)}.`;
}
