export function formatISODate(date) {
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-'+date.getDate();
}

export function formatISODateTime(date) {
    return formatISODate(date) + ' ' 
            + date.getHours() + ':' + date.getMinutes();
}