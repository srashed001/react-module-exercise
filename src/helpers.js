function choice(items){
    const randomIdx = Math.floor(Math.random()*items.length)
    return items[randomIdx]
};

function remove(item, items){
    const idx = items.findIndex(i => i===item)
    if(idx === -1) return undefined; 
    else{
        items.splice(idx, 1)
        return items
    }
}

export {choice, remove}