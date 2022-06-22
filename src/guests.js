import * as db from "../parkDatabase.js"

export const displayGuestCount = (parkArea) => {
    let areaName = parkArea.getAttribute("area-name")
    let guestCount = db.guests.filter(g => { return g.parkArea === areaName}).length

    if (guestCount === 1)
    {
        alert(`there is ${guestCount} guest in this area`)
    }
    else
    {
        alert(`there are ${guestCount} guests in this area`)
    }
}