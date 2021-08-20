/* eslint-disable global-require */
const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);
const dotEnv = resolveApp('.env');

const { NODE_ENV } = process.env;

// https://github.com/bkeepers/dotenv#what-other-env-files-can-i-use
const dotEnvFiles = [
  `${dotEnv}.${NODE_ENV}.local`,
  `${dotEnv}.${NODE_ENV}`,
  NODE_ENV !== 'test' && `${dotEnv}.local`,
  dotEnv
].filter(Boolean);

// load environment variables
dotEnvFiles.forEach((nextFile) => {
  if (fs.existsSync(nextFile)) {
    require('dotenv').config({
      path: nextFile
    });
  }
});
