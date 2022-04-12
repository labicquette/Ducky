export function dateDifference(date1, date2) {
    if (!date2) date2 = new Date();
    let diff = (date2.getTime() - date1.getTime()) / 1000;
    if (diff < 60) 
        return {diff: Math.floor(diff), timeUnit: 's'};
    diff /= 60; 
    if (diff < 60) 
        return {diff: Math.floor(diff), timeUnit: 'm'};
    diff /= 60; 
    if (diff < 24) 
        return {diff: Math.floor(diff), timeUnit: 'h'};
    diff /= 24; 
    if (diff < 7) 
        return {diff: Math.floor(diff), timeUnit:'j'};
    diff /= 7; 
    if (diff < 31/7) 
        return {diff: Math.floor(diff), timeUnit:'sem'};
    diff /= 31/7; 
    if (diff < 12) 
        return {diff: Math.floor(diff), timeUnit: 'mois'};
    diff /= 12; 
        return {diff: Math.floor(diff), timeUnit: 'a'};
}

export function formatDate(date) {
    let diff = dateDifference(date);
    if (diff.timeUnit === 's' || diff.timeUnit === 'm' || diff.timeUnit === 'h')
        return diff.diff + diff.timeUnit;
    //let now = new Date();
    
}