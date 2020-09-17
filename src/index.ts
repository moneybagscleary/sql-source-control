import * as program from 'commander';
import * as updateNotifier from 'update-notifier';

import pkg = require('../package.json');
import { cat, clean } from './commands/cat';
import { conns } from './commands/conns';
import { init } from './commands/init';
import { pull } from './commands/pull';
import { push } from './commands/push';

// check for updates
updateNotifier({ pkg }).notify();

program
  .command('init')
  .description('Create default config file.')
  .option('-f, --force', 'Overwrite existing config file, if present.')
  .option('-s, --skip', 'Use defaults only and skip the option prompts.')
  .option('-w, --webconfig [value]', 'Relative path to Web.config file.')
  .action(init);

program
  .command('conns')
  .description('List all available connections.')
  .action(conns);

program
  .command('pull [name]')
  .description('Generate SQL files for all tables, stored procedures, functions, etc.')
  .action(pull);

program
  .command('push [name]')
  .description('Execute all scripts against the requested database.')
  .action(push);

program
  .command('cat')
  .description('Concatenate all SQL files into a single transactional file.')
  .action(cat);

program
  .command('clean')
  .description('Concatenate all SQL files into a single ')
  .action(clean)

program
  .version((pkg as any).version)
  .parse(process.argv);


