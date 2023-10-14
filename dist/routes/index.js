"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//var express = require('express');
const express_1 = require("express");
var router = (0, express_1.Router)();
/* GET home page. */
router.get('/', function (req, res, next) {
    res.json({ name: "me", age: 12 });
});
exports.default = router;
