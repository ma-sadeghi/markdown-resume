/**
 * Adds a last updated section to the document body.
 */
function addLastUpdatedSection() {
    var hr = document.createElement('hr');
    hr.style.height = '0.5px';
    hr.style.border = 'none';
    hr.style.backgroundColor = 'lightgray';
    hr.classList.add('fade-rule');

    var br1 = document.createElement('br');
    var br2 = document.createElement('br');

    var p = document.createElement('p');
    p.className = 'center';
    var em = document.createElement('em');
    em.textContent = 'Last updated: ' + new Date().toISOString().split('T')[0];
    p.appendChild(em);

    document.body.appendChild(br1);
    document.body.appendChild(br2);
    document.body.appendChild(hr);
    document.body.appendChild(p);
}

addLastUpdatedSection();
