import path from 'path'
import copy from 'copy'

const containerFilePath = path.join(__dirname + '/../container');
const ipcConstructionAssetsFilePath = path.join(__dirname + '/../assets');
const lintConfigFilePath = ipcConstructionAssetsFilePath + '/code-lint-config/.eslintrc'

const options = {
    flatten: true
};

const errorCallback = (err, files) => {
    if (err) throw err;
};

const lintFileBuilder = () => {
    copy.one(lintConfigFilePath, containerFilePath, options, errorCallback)
};

let factory = {
    buildLintFile: lintFileBuilder
};

export default factory;