const { readFileSync, existsSync} = require('fs');
const path = require('path');

function fileContent(docPath) {
    var fullPath = getDocPath(docPath)
    if(!existsSync(fullPath))
        return null;

    return readFileSync(fullPath, 'utf8');
}


function getDocPath(docPath) {
    return path.join(__dirname, '../docs', docPath);
}



module.exports = {
    fileContent,
    getDocPath
};

