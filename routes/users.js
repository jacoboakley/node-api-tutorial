import express from "express";


const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello users');
})

router.post('/', (req, res) => {
    res.send('User Added')
})


router.put('/', (req, res) => {
    res.send('User updated');
})

router.delete('/', (req, res) => {
    res.send('User deleted')
})
export default router;