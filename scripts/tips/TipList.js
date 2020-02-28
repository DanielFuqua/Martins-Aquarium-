import { useTip } from "./TipDataProvider.js";
import Tip from "./Tip.js";


Tip
useTip

const contentTarget = document.querySelector(".tipList")
const TipList = () => {

    // Get a reference to the `<article class="content">` element
    
    const tipObjectsArray = useTip() 
    for (const tipObject of tipObjectsArray) {
        const tipHTMLRepresentation = Tip(tipObject)
        contentTarget.innerHTML += tipHTMLRepresentation
    }
    
    // Add to the existing HTML in the content element
  
}

export default TipList