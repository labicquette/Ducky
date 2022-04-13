function hasAllprops(props){
    if(props.length > 0){
        return props.every(prop => props[prop])
    }
    else{
        return false
    }
}

exports.default = hasAllprops