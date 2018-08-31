#!/usr/bin/env node
// 因为是作为命令行调用的，在第一行加上 #!/usr/bin/env node

'use strict'
const program = require('commander');
const packageJSON = require('./package.json');
const init = require('./lib/init');

program
  .version(packageJSON.version)
  .usage('<command> [options]');

program.command('init')
  .description("创建新新项目")
  .alias('i')
  .action(() => {
    init();
  });

program.parse(process.argv);

if (program.args.length == 0) {
  // 这里是处理没有输入参数命令的时候，显示 help
  program.help();
}