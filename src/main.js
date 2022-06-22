import * as parkAreasModule from "./parkAreas.js"
import * as db from "../parkDatabase.js"
import * as guestModule from "./guests.js"
import * as serviceModule from "./services.js"


let parkAreasData = db.parkAreas;

// Park areas
document.querySelector("#app").innerHTML = parkAreasModule.getParkAreasGridHtml(parkAreasData)
let parkAreaElements = document.querySelectorAll(".park-area-div")
for (let pa of parkAreaElements) {
    pa.addEventListener("click", () => guestModule.displayGuestCount(pa));
}

// Srvices
document.querySelector("#app").innerHTML += serviceModule.getServicesHtml(db.services);
let serviceElements = document.querySelectorAll(".service-item")
for (let svc of serviceElements) {
    svc.addEventListener("click", () => {
        let svcName = svc.getAttribute("service-name")
        let alertText = svcName + " is available in: ";
        parkAreaElements.forEach(parkAreaElement => {
            let serviceFound = parkAreaElement.querySelector(".service[service-name='" + svcName + "']")
            let aName = parkAreaElement.getAttribute("area-name")
            if (serviceFound) {
                //console.log("found it in " + parkAreaElement.getAttribute("area-name"))
                document.querySelector("[area-name='" + aName + "']").style.background = "pink";
                alertText += aName + ", "
            } else {
                document.querySelector("[area-name='" + aName + "']").style.background = "gainsboro";
            }
        } )
        alertText = alertText.trimEnd().replace(/\,$/, '')
        alert(alertText)
    });
    //parkAreaElements
}

