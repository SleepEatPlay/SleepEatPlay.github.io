document.addEventListener('DOMContentLoaded', function() {
    const memberList = document.querySelector('.member-list ul');

    // Replace with actual member names or fetch dynamically
    const members = [
        'Member 1',
        'Member 2',
        'Member 3'
        // Add more members as needed
    ];

    members.forEach(member => {
        const li = document.createElement('li');
        li.textContent = member;
        memberList.appendChild(li);
    });
});
