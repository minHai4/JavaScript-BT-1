let tasks = [];

function addTask(task) {
    tasks.push(task);
    console.log(`Đã thêm công việc: ${task}`);
}

function editTask(index, newTask) {
    if (index >= 0 && index < tasks.length) {
        tasks[index] = newTask;
        console.log(`Đã sửa công việc số ${index + 1} thành: ${newTask}`);
    } else {
        console.log("Vị trí công việc không hợp lệ.");
    }
}

function deleteTask(index) {
    if (index >= 0 && index < tasks.length) {
        console.log(`Đã xóa công việc: ${tasks[index]}`);
        tasks.splice(index, 1);
    } else {
        console.log("Công việc cần xóa không hợp lệ.");
    }
}

function displayTasks() {
    console.log("Danh sách công việc:");
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
    if (tasks.length === 0) {
        console.log("Danh sách công việc trống.");
    }
    console.log("-------------------------------");
}

displayTasks();

addTask("Học HTML");
addTask("Đi chợ");
addTask("Nấu cơm");
addTask("Rửa bát");
displayTasks();

editTask(0, "Học JavaScript");
displayTasks();

deleteTask(3);
displayTasks();