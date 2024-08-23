import './commands'
import 'cypress-real-events/support';
import 'cypress-axe';

import { addCompareSnapshotCommand } from 'cypress-visual-regression/dist/command';

addCompareSnapshotCommand({
  capture: 'fullPage'
});