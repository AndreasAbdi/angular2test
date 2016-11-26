import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
            { id : 11, name: 'Midoriya Izuku' },
            { id : 12, name: 'All Might' },
            { id : 13, name: 'Horikoshi' },
            { id : 14, name: 'Kamiya' },
            { id: 15, name: 'big Shield Gardna'}
        ];
        return {heroes};
    }
}