const initializeTipsButtonEvents = () => {

    const allTipsButtons = document.querySelectorAll("button[id^='button--']")
    for (const btn of allTipsButtons) {
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

  // THE OLD WAY:
    // document.querySelector("#button--caribbean").addEventListener(
    //     "click",
    //     theClickEvent => {
    //         const theDialog = document.querySelector("#tips--caribbean")
    //         theDialog.showModal()
    //     }
    // )
    // document.querySelector("#button--cumberland").addEventListener(
    //     "click",
    //     theClickEvent => {
    //         const theDialog = document.querySelector("#tips--cumberland")
    //         theDialog.showModal()
    //     }
    // )
    // document.querySelector("#button--gbr").addEventListener(
    //     "click",
    //     theClickEvent => {
    //         const theDialog = document.querySelector("#tips--gbr")
    //         theDialog.showModal()
    //     }
    // )
    // document.querySelector("#button--nz").addEventListener(
    //     "click",
    //     theClickEvent => {
    //         const theDialog = document.querySelector("#tips--nz")
    //         theDialog.showModal()
    //     }
    // )

}


export default initializeTipsButtonEvents;