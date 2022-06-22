export const getParkAreasGridHtml = (parkAreas) => {
    let html = "<div class='park-areas-div'>"
    for (let pa of parkAreas) {
        html += getParkAreaHtml(pa)
    }
    html += '</div>'
    return html
}

export const getParkAreaHtml = (parkArea) => {
    let html = `<div class='park-area-div' area-name='${parkArea.name}'>`
    html += `<h2>${parkArea.name}</h2>`
    html += `<p class="location">Located in the ${parkArea.location}</p>`
    for (let service of parkArea.services) {
        html += `<p class="service" service-name="${service}">${service}</p>`
    }
    html += "</div>"
    return html
}
