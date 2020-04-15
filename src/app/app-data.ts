import { InMemoryDbService } from 'angular-in-memory-web-api';

import { ShoeData } from './data/shoes';
import { FilterData } from './filters';

export class AppData implements InMemoryDbService {

  createDb() {
    const shoes = ShoeData.shoes;
    const filters = FilterData.filters;
    // const shoesFromAPI = ShoeDataFromAPI.shoesFromAPI;
    return { shoes, filters };
  }
}
