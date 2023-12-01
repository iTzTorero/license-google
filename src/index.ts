import { registerPlugin } from '@capacitor/core';

import type { licencePlugin } from './definitions';

const licence = registerPlugin<licencePlugin>('licence', {
  web: () => import('./web').then(m => new m.licenceWeb()),
});

export * from './definitions';
export { licence };
