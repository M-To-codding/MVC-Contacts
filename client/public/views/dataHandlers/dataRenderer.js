function resetContent() {
    $('#main-content .loading').hide();
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
