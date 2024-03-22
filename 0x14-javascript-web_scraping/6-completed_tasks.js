#!/usr/bin/node
// a script that computes the number of tasks completed by user id
const request = require('request');

async function tasksCompleted () {
  const requestURL = process.argv[2];
  await new Promise((resolve, reject) => {
    request.get(requestURL, (error, response, body) => {
      if (error) {
        console.log(error);
        reject(error);
      }
      if (response.statusCode !== 200) {
        console.log(response.statusCode);
        reject(response.statusCode);
      }
      const todos = JSON.parse(body);
      //   console.log(todos[todos.length - 1].userId);
      const todosDone = {};
      if (todos.length === 0) {
        console.log(todosDone);
      } else {
        for (let id = 1; id <= todos[todos.length - 1].userId; id++) {
          let taskDone = 0;
          for (let index = 0; index < todos.length; index++) {
            const user = todos[index];
            if (user.userId === id && user.completed) {
              taskDone += 1;
            }
          }
          todosDone[id] = taskDone;
          // console.log(`${id}: ${taskDone}`);
          taskDone = 0;
        }
        // Only print users with completed task
        const onlyTodosDone = {};
        for (const key in todosDone) {
          if (todosDone[key] !== 0) {
            onlyTodosDone[key] = todosDone[key];
          }
        }
        console.log(onlyTodosDone);
      }
      resolve();
    });
  });
}
tasksCompleted();
