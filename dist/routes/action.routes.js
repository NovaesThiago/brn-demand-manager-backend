"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const action_controller_1 = require("../controllers/action.controller");
const router = (0, express_1.Router)();
const controller = new action_controller_1.ActionController();
router.get('/', controller.getByDemand); // GET /actions?demandId=123
router.post('/', controller.create); // POST /actions
exports.default = router;
