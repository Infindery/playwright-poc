import './commands'

import { addCompareSnapshotCommand } from 'cypress-visual-regression/dist/command';

addCompareSnapshotCommand({
  capture: 'fullPage'
});

// {
//   capture: 'fullPage'
// }