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
