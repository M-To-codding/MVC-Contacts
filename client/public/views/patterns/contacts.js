function contactsPattern(data) {

    $('#main-content').append('<div id="contacts-content" class="contacts-container"></div>');

    $('#contacts-content').load('views/contacts.html', function () {
        $(data.contacts).each(function (key, value) {

            if (value.tel === undefined) {
                value.tel = 'Number is not specified';
            }

            let contactsData = `<li class="item contact-item">
            <span class="contact-name">${value.name}</span>
            <span class="contact-tel">${value.tel}</span>
            </li>`;

            $('#contacts-list').append(contactsData);
        });
    })
}