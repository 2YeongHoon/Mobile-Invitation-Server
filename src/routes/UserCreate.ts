import "reflect-metadata";
import {createConnection} from "typeorm";
import { userInfo } from "os";
import { User } from "../entity/User";
import { WeddingInfo } from "../entity/WeddingInfo";
import { Images } from "../entity/Images";
import { Videos } from "../entity/Videos";

var express = require('express');
var router = express.Router();

// 최종 저장 Create
router.post('/user', async (req, res) => {
	console.log("hello", req.body);
	try {
		await User.save(req.body);
		await WeddingInfo.save(req.body);
		res.send("success");
	} catch(e){
		res.send({
			message: e
		});
		throw new Error(e);
	}
})

module.exports = router;