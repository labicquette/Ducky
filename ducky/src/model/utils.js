export function dateDifference(date1, date2) {
    if (!date2) date2 = new Date();
    let diff = 0;

    diff = date2.getFullYear() - date1.getFullYear();
    if (diff != 0) return {diff: diff, timeUnit: 'a'};
    
    diff = date2.getMonth() - date1.getMonth();
    if (diff != 0) return {diff: diff, timeUnit: 'mo'};

    diff = date2.getDay() - date1.getDay();
    if (diff != 0) return {diff: diff, timeUnit: 'j'};
    
    diff = date2.getHours() - date1.getHours();
    if (diff != 0) return {diff: diff, timeUnit: 'h'};

    diff = date2.getMinutes() - date1.getMinutes();
    if (diff != 0) return {diff: diff, timeUnit: 'mi'};

    diff = date2.getSeconds() - date1.getSeconds();
    return {diff: diff, timeUnit: 's'};
}