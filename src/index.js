// Enable LiveReload
document.write(
    '<script src="http://' + (location.host || 'localhost').split(':')[0] +
    ':35729/livereload.js?snipver=1"></' + 'script>'
);


import Teacher, {Student} from './ObserverDemo';
import PubSub from './pub-sub/PubSub';

import './ObserverDemo2';

let teacherDu = new Teacher('杜老师');
let teacherWang = new Teacher('王老师');

let xiaoMing = new Student('小明');
let middleMing = new Student('中明');
let largeMing = new Student('大明');


//可以自定义
xiaoMing.execCommand = function (command,teacher) {
    console.log(`我是${this.name},我是${teacher.name}的学生`,command,);
};

teacherDu
    .addStudent(xiaoMing)
    .addStudent(middleMing)
    .addStudent(largeMing);

teacherWang.addStudent(xiaoMing);





let blog = new PubSub();

blog.subscribe('onclick',function (args) {
    console.log('onclick::',args);
});

blog.subscribe('onclick',function () {
    console.log('订阅了点击事件');
});




let commands = document.getElementById('commands');
commands.onclick = function (e) {
  teacherDu.sayCommand(e.target.innerText);
  teacherWang.sayCommand(e.target.innerText);
  blog.publish('onclick',e.target.innerText);
};

