function contactsModal() {
    let pattern = `
        <form id="contacts-modal" class="modal-window">
            <input type="text" class="contactName" placeholder="Name">
            <input type="text" class="contactTel" placeholder="Phone">
            <button type="submit" id="submitContact">Save</button>
    </form>
    `;

    return pattern;
}

function groupsModal() {
    let pattern = `
    
        <form id="groups-modal" class="modal-window">
            <input type="text" class="groupName" placeholder="Name">
        <button type="submit" id="submitGroup">Save</button>
        </form>
    `;

    return pattern;
}

function removeModal() {
    let modal = document.querySelector('.modal-window');
    if(modal){
        $(modal).remove();
    }
}

function generateModal(itemType) {
    let contactsModalW = contactsModal(),
        groupsModalW = groupsModal();

    let modal = document.querySelector('.modal-window');
    if(modal){
        $(modal).remove();
        return;
    }

    if (itemType === 'contacts') {
        $('body').append(contactsModalW);
        $('#submitContact').on('click', function () {
            addContact();
            removeModal();
        })
    } else {
        $('body').append(groupsModalW);
        $('#submitGroup').on('click', function () {
            addGroup();
            removeModal();
        })
    }
}
