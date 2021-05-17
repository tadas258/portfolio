
function renderSocials(selector, data) {
   
    const DOM = document.querySelector(selector);
    
    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        const socialObject = data[i];

        HTML += `<a href="${socialObject.href}" target="_blank" class="fa fa-${socialObject.icon}"></a>`;
    }

    DOM.innerHTML = HTML;
}

export { renderSocials }
