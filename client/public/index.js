const express = require('express');

$(document).ready(function () {

    var url = window.location.pathname;

    function init() {

        if (url === '/api/v1/') {

            $('#main-content').html('');

            $('#main-content').append('<article id="contacts-content"></article>');
            $('#main-content').append('<article id="groups-content"></article>');

            $('#contacts-content').load('views/contacts.html');
            $('#groups-content').load('views/groups.html');

        }
    }

    init();

});