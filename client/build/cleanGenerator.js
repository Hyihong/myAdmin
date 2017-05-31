// ***  ***
// ***  file description: 用于生成删除的文件 ***
// *** 每次编译之前先调用
// ***  ***

const fs = require('fs'); // 引入fs模块  
  
function deleteFileAll(path) {  
    var files = [];  
    if(fs.existsSync(path)) {  
        files = fs.readdirSync(path); 
        files.forEach(function(file, index) {  
            var curPath = path + "/" + file;  
            if( fs.statSync(curPath).isDirectory()) { // recurse  
                deleteFileAll(curPath);  
            } else { 
                // delete file  
                fs.unlinkSync(curPath);  
            }  
        });  
        fs.rmdirSync(path);  
    }  
};  

deleteFileAll("./client/release/dist");
deleteFileAll("./server/views");
console.log("+++++++++删除生成文件成功+++++++++")

