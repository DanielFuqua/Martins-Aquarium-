import initializeDetailButtonEvents from './dialog.js';
import { useFish } from './FishDataProvider.js'

const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
}

initializeDetailButtonEvents();

