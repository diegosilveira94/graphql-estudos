const GitHubServices = require("../../services/GitHub.services");
const TasksRegisterService = require("../../services/TasksRegisterService");
const UserRegisterService = require("../../services/UserRegisterService");

module.exports = () => ({
  gitHubService: GitHubServices,
  userRegisterService: UserRegisterService,
  tasksService: TasksRegisterService,
});
