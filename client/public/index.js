$(document).ready(function () {

    function resetContent() {
        $('#main-content .loading').hide();
    }

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

    function groupsPattern(data) {
        $('#main-content').append('<div id="groups-content" class="groups-container"></div>');

        $('#groups-content').load('views/groups.html', function () {
            $(data.groups).each(function (key, value) {

                let groupsData = `<li class="item group-item">
            <span class="group-name">${value.name}</span>
            </li>`;

                $('#groups-list').append(groupsData);
            })
        });
    }

    function dataRenderer() {

        this.render = function () {
            $.ajax({
                url: '/api/v1/contacts',
                success: function (contacts) {
                    contactsPattern(contacts);
                    $.ajax({
                        url: '/api/v1/groups',
                        success: function (groups) {
                            groupsPattern(groups);
                        }
                    });
                }
            });
        }

    }

    resetContent();

    let renderer = new dataRenderer();
    renderer.render();
    console.log(renderer);

});