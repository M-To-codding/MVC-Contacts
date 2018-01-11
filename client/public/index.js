$(document).ready(function () {

    function init() {

        $('#main-content').html('');

        $('#main-content').append('<article id="contacts-content"></article>');
        $('#main-content').append('<article id="groups-content"></article>');

        $('#contacts-content').load('contacts/contacts.html');
        $('#groups-content').load('groups/groups.html');

    }

    init();

});