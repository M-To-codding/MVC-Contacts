function groupsPattern(data) {
    if (!data) {
        $('#main-content').append('<div class="no-groups">Add some group</div>');
    } else {
        generatePattern();
    }

    function generatePattern() {
        $('#main-content').append('<div id="groups-content" class="groups-container"></div>');

        $('#groups-content').load('views/groups.html', function () {
            $(data.groups).each(function (key, value) {

                let groupsData = `<li class="item group-item" id="${value._id}">
            <span class="group-name">${value.name}</span>
            <button type="submit" class="remove-btn" onclick="removeGroup(event)">X</button>
            </li>`;

                $('#groups-list').append(groupsData);
            })
        });
    }

}
