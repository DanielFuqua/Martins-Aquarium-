const initializeDetailButtonEvents = () => {

    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const btn of allCloseButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }
   
    document.querySelector("#button--bart").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--bart")
            theDialog.showModal()
        }
    )
    document.querySelector("#button--Betty").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Betty")
            theDialog.showModal()
        }
    )
    document.querySelector("#button--Nemo").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Nemo")
            theDialog.showModal()
        }
    )
    document.querySelector("#button--Dory").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Dory")
            theDialog.showModal()
        }
    )
    document.querySelector("#button--Suzi").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Suzi")
            theDialog.showModal()
        }
    )
    document.querySelector("#button--Bill").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Bill")
            theDialog.showModal()
        }
    )
    document.querySelector("#button--Sara").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--Sara")
            theDialog.showModal()
        }
    )
    document.querySelector("#button--caribbean").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#tips--caribbean")
            theDialog.showModal()
        }
    )
    document.querySelector("#button--cumberland").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#tips--cumberland")
            theDialog.showModal()
        }
    )
    document.querySelector("#button--gbr").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#tips--gbr")
            theDialog.showModal()
        }
    )
    document.querySelector("#button--nz").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#tips--nz")
            theDialog.showModal()
        }
    )


}

export default initializeDetailButtonEvents;