import { useLocation } from './LocationDataProvider.js'
import Location from './Location.js'

const contentTarget = document.querySelector(".location__list")
const LocationList = () => {

    // Get a reference to the `<article class="content">` element
    
    const locationObjectsArray = useLocation() 
    for (const locationObject of locationObjectsArray) {
        const locationHTMLRepresentation = Location(locationObject)
        contentTarget.innerHTML += locationHTMLRepresentation
    }
    
    // Add to the existing HTML in the content element
  
}

export default LocationList