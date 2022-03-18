var bLIndex = document.querySelector('#bLIndex');

for (i = 0; i < bannedList.length; i++) {
    var listOne = bannedList[i].split('$');

    $(bLIndex).append('<tr><td lang="en" class="playerID">' + listOne[0] + '</td><td>' + listOne[1] + '</td><td>' + listOne[2] + '</td><td>' + listOne[3] + '</td></tr>');
};

$(bLIndex).append('<tr><td colspan="4" lang="en" class="end">Never be the next one.</td></tr>');