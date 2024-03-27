export const convertDateIntoFormat = () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const currentDate = new Date();
    const date = currentDate.getDate();
    const dayIndex = currentDate.getDay();
    const day = days[dayIndex];
    const monthIndex = currentDate.getMonth();
    const month = months[monthIndex];

    return `${date} ${month} . ${day}`;
}