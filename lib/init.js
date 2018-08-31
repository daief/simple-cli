'use strict'

const {
  exec
} = require('child_process');
const co = require('co');
const prompt = require('co-prompt');
const copy = require('copy-template-dir');
const path = require('path');

module.exports = () => {
  co(function* () {
    // 处理用户输入
    const projectName = yield prompt('Project name: ');
    const description = yield prompt('Description: ');

    const currentPath = path.resolve(process.cwd(), './');
    const templateDir = path.resolve(__dirname, '../templates/templateA');
    const outDir = path.resolve(currentPath, projectName);
    const values = {
      name: projectName,
      description,
    };

    // copy template
    copy(path.resolve(templateDir), outDir, values, (err, createdFiles) => {
      if (err) { process.exit(1); }

      createdFiles.forEach(filePath => console.log(`Created ${filePath}`));

      // install
      const cmdStr = `cd ${outDir} && yarn`;
      console.log(`now excuting: ${cmdStr}`);
      exec(cmdStr, (error) => {
        if (error) { process.exit(1); }

        console.log('\n √ Generation completed!');
        process.exit(0);
      });
    });
  });
}