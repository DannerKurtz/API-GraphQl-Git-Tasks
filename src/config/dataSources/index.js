const GitHubServices = require('../../services/GitHub.services');
const TaskRegisterService = require('../../services/TaskRegisterService');
const UserRegisterService = require('../../services/UserRegisterService');

module.exports = () => ({
  gitHubService: GitHubServices,
  userRegisterService: UserRegisterService,
  tasksService: TaskRegisterService,
});
