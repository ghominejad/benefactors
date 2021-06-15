const path = require('path');
const fs = require('fs');
const parseMarkdownMetadata = require('../../../libs/markdownMetadataParser')
const {fileContent} = require('../../../libs/ioUtils')


function listNames(type) {
    let names = [];
    let dir = path.join(__dirname, `../../../docs/${type}`);
    fs.readdirSync(dir).forEach(function (file) {
        names.push(type+'/'+file.split('.').slice(0, -1).join('.'));
    });
    return names.sort().reverse();
  }

  function lastName(type) {
    
    var names = listNames(type);
    if(!names.length) return;

    const content = fileContent(names[0]+'.md');
    const metadata = parseMarkdownMetadata(content);
    return type+'/'+metadata.id || names[0];

  }
  
module.exports = {
    listNames,
    lastName
};