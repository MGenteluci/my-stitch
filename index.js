exports = () => {
    const now = new Date();
    const currentYear = now.getFullYear();

    let age;

    if (now.getMonth() + 1 >= 2 && now.getDate() >= 6) {
        age = String(currentYear - 1997);
    } else {
        age = String(currentYear - 1997 - 1);
    }

    const me = {
        name: 'Matheus Genteluci',
        age,
        role: 'Junior Software Developer',
        from: 'Rio de Janeiro - Brazil',
    };

    return me;
};
