import { WebPlugin } from '@capacitor/core';

import type { licencePlugin } from './definitions';

export class licenceWeb extends WebPlugin implements licencePlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
