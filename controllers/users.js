import { v4 as uuidv4} from "uuid";
import { findUser, sortObj } from "../helpers/helpers.js";

let users = [
    {
        "age": "25",
        "firstName": "John",
        "lastName": "Doe",
        "userId": "db88cb70-11ed-4c42-4b18-f02f1cd1a8df"
    },
    {
        "age": "23",
        "firstName": "Jane",
        "lastName": "Doe",
        "userId": "db88cb70-11ed-4c42-7b18-f02f1cd1a8df"
    }
]

export const createUser = (req, res) => {
    const user = req.body;
    const newUser = sortObj({ ...user, userId: uuidv4() });

    users.push(newUser);
    res.send(users)
};

export const deleteUser = (req, res) => {
    const { userId } = req.params;
    users = users.filter((user) => user.userId !== userId);
    res.send(users)
};

export const getUsers = (req, res) => {
    res.send(users);
};

export const getUser = (req, res) => {
    const { userId } = req.params;
    const foundUser = findUser(userId, users);
    if(foundUser) {
        res.send(foundUser);
    } else {
        res.send("User not found");
    }
};

export const updateUser = (req, res) => {
    const { userId } = req.params;
    const newData = req.body;
    users.find((user, index) => {
        if(user.userId === userId) {
            users[index] = {
                ...user,
                ...newData
            }
        }
    });
    res.send(users);
};