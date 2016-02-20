$ = jQuery = require("jquery");
moment = require("moment");
moment_range = require("./js/readable_range.coffee");
director = require("director");
prettyCron = require("prettycron");
require("bootstrap-webpack");
require("./css/main.scss");
monkberry = require('monkberry');
require('monkberry-events');

Header = require("./js/blocks/header/header.coffee");
Cookies = require("./js/cookies.coffee");
require("./js/main.coffee");

RecentHistory = require("./js/recent_history.coffee");
TaskForm = require("./js/task_form.coffee");
TaskRun = require("./js/task_run.coffee");
TaskList = require("./js/task_list.coffee");
