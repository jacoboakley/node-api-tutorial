export const sortObj = (obj) => {
    return Object.keys(obj).sort().reduce(function (result, key) {
        result[key] = obj[key];
        return result;
    }, {});
};

export const findUser = (userId, users) => {
    return users.find(user => user.userId === userId);
};