var fs = require('fs');
var path = require('path');

var dirFilter = function(dirName, fileExt, callBack) {
    var filteredList = [];

    fs.readdir(dirName, function(err, rawList) {
        if (err) return callBack(err);
        for (var i = 0; i < rawList.length; i++) {
            if (path.extname(rawList[i]) == "." + fileExt) {
                filteredList.push(rawList[i]);
            }
        }

        callBack(null, filteredList);
    })
};

module.exports = dirFilter;
