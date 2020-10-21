const express = require('express');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');
require('./db/mongoose');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});

// const Task = require('./models/task');
// const User = require('./models/user');

// const main = async () => {
    // const task = await Task.findById('5f8e1a74a9296339bf65e143');
    // await task.populate('user').execPopulate();
    // console.log(task.user);

//     const user = await User.findById('5f8e18d65e157d390fccad61');
//     await user.populate('tasks').execPopulate();
//     console.log(user.tasks)
// };
// main();
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const myFunc = async () => {
    // const pass = 'FooBar12345!';
    // const hashedPass = await bcrypt.hash(pass, 8);
    // const isMatch = await bcrypt.compare(pass, hashedPass)

    // const token = jwt.sign({_id: 'foobar'}, 'thisismynewcourse', { expiresIn: '7 days'});
    // console.log(token);

    // const verify = jwt.verify(token, 'thisismynewcourse')
    // console.log(verify);
// };

// myFunc();

// const multer = require('multer');

// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, callback) {
//         // callback(new Error('File must not error punk.'));
//         // callback(undefined, true);
//         if(!file.originalname.match(/\.(doc|docx)$/)) {
//             return callback(new Error('Please upload a word document.'));
//         }

//         callback(undefined, true);

//     }
// });

// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send();
// });







