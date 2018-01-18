function contactsPattern(data) {

    if (!data) {
        $('#main-content').append('<div class="no-contacts">Add some contact</div>');
    } else {
        generatePattern();
    }

    function generatePattern() {
        $('#main-content').append('<div id="contacts-content" class="contacts-container"></div>');

        $('#contacts-content').load('views/contacts.html', function () {
            $(data.contacts).each(function (key, value) {

                if (value.tel === undefined) {
                    value.tel = 'Number is not specified';
                }

                let contactsData = `<li class="item contact-item" id="${value._id}">
            <span class="contact-name">${value.name}</span>
            <span class="contact-tel">${value.tel}</span>
            <button type="submit" class="remove-btn" onclick="removeContact(event)">X</button>
            </li>`;

                $('#contacts-list').append(contactsData);
            });
        })
    }
}