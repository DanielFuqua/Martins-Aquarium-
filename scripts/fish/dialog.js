const initializeDetailButtonEvents = () => {

    const allDetailButtons = document.querySelectorAll("button[id^='button--']")
    for (const btn of allDetailButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogSiblingSelector = `#${theEvent.target.id}+dialog`
                const theDialog = document.querySelector(dialogSiblingSelector)
                theDialog.showModal()
            }
        )
    }

    const allCloseButtons = document.querySelectorAll("button[class^='button--']")
    for (const btn of allCloseButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }
   
    // THIS IS THE OLD MANUAL WAY:
    
    // document.querySelector("#button--bart").addEventListener(
    //     "click",
    //     theClickEvent => {
    //         const theDialog = document.querySelector("#details--bart")
    //         theDialog.showModal()
    //     }
    // )

    // document.querySelector("#button--Betty").addEventListener(
    //     "click",
    //     theClickEvent => {
    //         const theDialog = document.querySelector("#details--Betty")
    //         theDialog.showModal()
    //     }
    // )

    // document.querySelector("#button--Nemo").addEventListener(
    //     "click",
    //     theClickEvent => {
    //         const theDialog = document.querySelector("#details--Nemo")
    //         theDialog.showModal()
    //     }
    // )

    // document.querySelector("#button--Dory").addEventListener(
    //     "click",
    //     theClickEvent => {
    //         const theDialog = document.querySelector("#details--Dory")
    //         theDialog.showModal()
    //     }
    // )

    // document.querySelector("#button--Suzi").addEventListener(
    //     "click",
    //     theClickEvent => {
    //         const theDialog = document.querySelector("#details--Suzi")
    //         theDialog.showModal()
    //     }
    // )

    // document.querySelector("#button--Bill").addEventListener(
    //     "click",
    //     theClickEvent => {
    //         const theDialog = document.querySelector("#details--Bill")
    //         theDialog.showModal()
    //     }
    // )

    // document.querySelector("#button--Sara").addEventListener(
    //     "click",
    //     theClickEvent => {
    //         const theDialog = document.querySelector("#details--Sara")
    //         theDialog.showModal()
    //     }
    // )

     // Get a reference to all buttons that start with "button--"
     

     // Add an event listener to each one
    
}

export default initializeDetailButtonEvents;