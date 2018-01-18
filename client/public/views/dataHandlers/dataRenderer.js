function resetContent() {
    $('#main-content .loading').hide();
}

function dataRenderer() {

    this.render = function () {
        getAllContacts();
        getAllGroups();
    }
}

function getAllContacts() {
    $.ajax({
        url: '/api/v1/contacts',
        success: function (contacts) {
            contactsPattern(contacts);
        }
    });
}

function getAllGroups() {
    $.ajax({
        url: '/api/v1/groups',
        success: function (groups) {
            groupsPattern(groups);
        }
    });
}

function addContact() {
    let nameInput = $('.contactName').val(),
        telInput = $('.contactTel').val();

    let item = {
        name: nameInput,
        tel: telInput
    }
    console.log(nameInput);
    $.ajax({
        url: '/api/v1/contacts/add',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(item),
        dataType: 'json',
        success: function () {
            getAllContacts();
        }
    })
}

function addGroup() {
    let nameInput = $('.groupName').val();

    let item = {
        name: nameInput,
    }

    console.log(nameInput);
    $.ajax({
        url: '/api/v1/groups/add',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(item),
        dataType: 'json',
        success: function () {
            getAllGroups();
        }
    })
}