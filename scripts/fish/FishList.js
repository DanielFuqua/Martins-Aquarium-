import { useFish } from './FishDataProvider.js'
import Fish from './Fish.js'

const contentTarget = document.querySelector(".fishList")
const FishList = () => {

    // Get a reference to the `<article class="content">` element
    
    const fishObjectsArray = useFish() 
    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = Fish(fishObject)
        contentTarget.innerHTML += fishHTMLRepresentation
    }
    
    // Add to the existing HTML in the content element
  
}

export default FishList