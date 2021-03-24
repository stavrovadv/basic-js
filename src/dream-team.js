module.exports = function createDreamTeam(members) {
    let res = false;
    if (Array.isArray(members)) {
        let team = [];
        members.forEach(person => {
            if (typeof person === 'string') team.push(person.trim().toUpperCase());
        });
        team.sort();
        res = team.map(person => person.charAt(0)).join('');
    }
    return res;
};
