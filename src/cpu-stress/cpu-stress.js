
var shouldRun = true;

exports.blockCpuFor = (ms) => {
    var now = new Date().getTime();
    var result = 0
    while (shouldRun) {
        result += Math.random() * Math.random();
        if (new Date().getTime() > now + ms)
            return;
    }
}
