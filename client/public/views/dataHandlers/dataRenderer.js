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

    if (!nameInput || !telInput) {
        alert('Write correct data');
        return;
    }

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

    if (!nameInput) {
        alert('Write correct data');
        return;
    }

    let item = {
        name: nameInput,
    }

    console.log(nameInput);
}

function removeContact(event) {
    let id = event.target.parentNode;
    console.log(id.id);
    $.ajax({
        url: '/api/v1/contact/' + id.id,
        type: 'DELETE',
        dataType: 'json',
        success: function () {
            getAllContacts();
        }
    })
}

function removeGroup(event) {
    let id = event.target.parentNode;
    console.log(id.id);
    $.ajax({
        url: '/api/v1/group/' + id.id,
        type: 'DELETE',
        dataType: 'json',
        success: function () {
            getAllGroups();
        }
    })
}