import chalk from 'chalk';
import * as fs from 'fs-extra';
import { EOL } from 'os';

import { Config } from '../common/config';
import * as util from '../common/utility';

/**
 * Concatenate all SQL files into a single file.
 */
export function cat(): void {
  const start: [number, number] = process.hrtime();
  const config: Config = util.getConfig();
  const output: string = util.getAllFilesContent(true);

  fs.outputFileSync(`${config.output.root}/cat.sql`, output);

  const time: [number, number] = process.hrtime(start);
  console.log(chalk.green(`Finished after ${time[0]}s!`));
}


export function clean(): void {
  const start: [number, number] = process.hrtime();
  const config: Config = util.getConfig();
  const output: string = util.getAllFilesContentFull();

  fs.outputFileSync(`${config.output.root}/cat.sql`, output);

  const time: [number, number] = process.hrtime(start);
  console.log(chalk.green(`Finished after ${time[0]}s!`));
}