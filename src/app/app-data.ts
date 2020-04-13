import { InMemoryDbService } from 'angular-in-memory-web-api';

import { ShoeData } from './data/shoes';

export class AppData implements InMemoryDbService {

  createDb() {
    const shoes = ShoeData.shoes;
    // const shoesFromAPI = ShoeDataFromAPI.shoesFromAPI;
    return { shoes };
  }
}
