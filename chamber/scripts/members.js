document.addEventListener('DOMContentLoaded', function() {
    const directory = document.getElementById('directory');
    const gridViewBtn = document.getElementById('gridView');
    const listViewBtn = document.getElementById('listView');

    // Initial load of members in grid view
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => displayMembers(data, 'grid'));

    // Event listener for grid view button
    gridViewBtn.addEventListener('click', function() {
        fetch('data/members.json')
            .then(response => response.json())
            .then(data => displayMembers(data, 'grid'));
    });

    // Event listener for list view button
    listViewBtn.addEventListener('click', function() {
        fetch('data/members.json')
            .then(response => response.json())
            .then(data => displayMembers(data, 'list'));
    });

    // Function to display members based on view mode
    function displayMembers(data, view) {
        directory.innerHTML = '';
        if (view === 'grid') {
            directory.classList.add('grid');
            directory.classList.remove('list');
        } else {
            directory.classList.add('list');
            directory.classList.remove('grid');
        }

        data.forEach(member => {
            const memberElement = document.createElement('div');
            memberElement.classList.add('member');

            const memberImg = document.createElement('img');
            memberImg.src = member.image;
            memberImg.alt = `${member.name} logo`;

            const memberInfo = document.createElement('div');
            memberInfo.classList.add('member-info');

            const memberName = document.createElement('h2');
            memberName.textContent = member.name;

            const memberAddress = document.createElement('p');
            memberAddress.textContent = member.address;

            const memberPhone = document.createElement('p');
            memberPhone.textContent = member.phone;

            const memberWebsite = document.createElement('a');
            memberWebsite.href = member.website;
            memberWebsite.textContent = 'Visit Website';
            memberWebsite.target = '_blank';

            const memberMembership = document.createElement('p');
            memberMembership.textContent = `Membership: ${member.membership}`;

            memberInfo.append(memberName, memberAddress, memberPhone, memberMembership, memberWebsite);
            memberElement.append(memberImg, memberInfo);
            directory.appendChild(memberElement);
        });
    }
});