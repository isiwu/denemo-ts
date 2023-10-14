//var express = require('express');
import { Router } from "express";
import type { Request, Response, NextFunction } from "express";
var router = Router();

/* GET home page. */
router.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.json({name: "me", age: 12, gender: "male"});
});

export default router;
