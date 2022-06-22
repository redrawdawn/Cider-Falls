
export const getServicesHtml = (services) => {
    let html = "<ul>"
    for (let service of services) {
        html += `<li class='service-item' service-name='${service}'>${service}</li>`
    }
    html += "</ul>"
    return html
}