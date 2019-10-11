module.exports = function check(str, bracketsConfig) {
    var arr = str.split('');
    var config = bracketsConfig;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < config.length; j++) {
            if (arr[i] === config[j][0] && arr[i + 1] === config[j][1]) {
                arr.splice(i, 2);
                if (arr.length == 0) {
                    return true;
                }
                i = -1;
            }
        }
    }
    return false;
};
