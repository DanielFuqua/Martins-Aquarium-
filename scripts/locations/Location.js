const Location = (locationObject) => {
    return `
        <section class="location">
                <img class="location__img" src="${locationObject.image}">

                <div class="location__name">
                    ${locationObject.name}
                </div>

                <div>
                    <button id="button--${locationObject.name}">Tips</button>
                </div>
                
               <dialog class="dialog--location" id="tips--${locationObject.name}">
                   <p class="location__tips">
                    ${locationObject.tips}
                    </p>
                    <button class="button--close" id="close-${locationObject.name}">Close Dialog</button>
                </dialog>
                
            </section>
    `
}

export default Location