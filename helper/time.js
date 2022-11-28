
function time (){
    var now= new Date()
    now = new Date(now.getUTCFullYear(),now.getUTCMonth(),now.getUTCDate(),now.getUTCHours(),now.getUTCMinutes(),now.getUTCSeconds())
    return now
}

module.exports = time