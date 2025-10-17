const sharedID = Symbol.for('app_id');

class Resource{
    constructor(data){
        this[sharedID] = data;
    }
}

export default Resource;