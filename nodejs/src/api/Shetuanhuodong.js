import { version } from '../../package.json'
import { Router } from 'express'
import { Sequelize, Op, QueryTypes } from 'sequelize'
import sequelize from '../models/sequelize'
import toRes from '../lib/toRes'
import ShetuanhuodongModel from '../models/ShetuanhuodongModel'
import md5 from 'md5-node'
import util from '../lib/util'
import jwt from 'jsonwebtoken'
import moment from 'moment'
import ConfigModel from '../models/ConfigModel'
import https from 'https'
import request from 'request'
import qs from 'querystring'
import path from 'path'
import fs from 'fs'




export default ({ config, db }) => {
	let api = Router()


	// 分页接口（后端）
	api.get('/page', async (req, res) => {

		try {

			let page = parseInt(req.query.page) || 1
			let limit = parseInt(req.query.limit) || 10
			let sort = req.query.sort || 'id'
			let order = req.query.order || 'asc'

			let where = {}
			let shetuanmingcheng = req.query.shetuanmingcheng
			if (shetuanmingcheng) {

				if (shetuanmingcheng.indexOf('%') != -1) {
					where.shetuanmingcheng = {
						[Op.like]: shetuanmingcheng
					}
				} else {
					where.shetuanmingcheng = {
						[Op.eq]: shetuanmingcheng
					}
				}
			}
			let huodongmingcheng = req.query.huodongmingcheng
			if (huodongmingcheng) {

				if (huodongmingcheng.indexOf('%') != -1) {
					where.huodongmingcheng = {
						[Op.like]: huodongmingcheng
					}
				} else {
					where.huodongmingcheng = {
						[Op.eq]: huodongmingcheng
					}
				}
			}
			let huodongdidian = req.query.huodongdidian
			if (huodongdidian) {

				if (huodongdidian.indexOf('%') != -1) {
					where.huodongdidian = {
						[Op.like]: huodongdidian
					}
				} else {
					where.huodongdidian = {
						[Op.eq]: huodongdidian
					}
				}
			}
			let huodongshipin = req.query.huodongshipin
			if (huodongshipin) {

				if (huodongshipin.indexOf('%') != -1) {
					where.huodongshipin = {
						[Op.like]: huodongshipin
					}
				} else {
					where.huodongshipin = {
						[Op.eq]: huodongshipin
					}
				}
			}
			let huodongneirong = req.query.huodongneirong
			if (huodongneirong) {

				if (huodongneirong.indexOf('%') != -1) {
					where.huodongneirong = {
						[Op.like]: huodongneirong
					}
				} else {
					where.huodongneirong = {
						[Op.eq]: huodongneirong
					}
				}
			}
			let huodongzhuangtai = req.query.huodongzhuangtai
			if (huodongzhuangtai) {

				if (huodongzhuangtai.indexOf('%') != -1) {
					where.huodongzhuangtai = {
						[Op.like]: huodongzhuangtai
					}
				} else {
					where.huodongzhuangtai = {
						[Op.eq]: huodongzhuangtai
					}
				}
			}
			let huodongshijian = req.query.huodongshijian
			if (huodongshijian) {

				if (huodongshijian.indexOf('%') != -1) {
					where.huodongshijian = {
						[Op.like]: huodongshijian
					}
				} else {
					where.huodongshijian = {
						[Op.eq]: huodongshijian
					}
				}
			}
			let huodongtupian = req.query.huodongtupian
			if (huodongtupian) {

				if (huodongtupian.indexOf('%') != -1) {
					where.huodongtupian = {
						[Op.like]: huodongtupian
					}
				} else {
					where.huodongtupian = {
						[Op.eq]: huodongtupian
					}
				}
			}
			let shezhangzhanghao = req.query.shezhangzhanghao
			if (shezhangzhanghao) {

				if (shezhangzhanghao.indexOf('%') != -1) {
					where.shezhangzhanghao = {
						[Op.like]: shezhangzhanghao
					}
				} else {
					where.shezhangzhanghao = {
						[Op.eq]: shezhangzhanghao
					}
				}
			}
			let sfsh = req.query.sfsh
			if (sfsh) {

				if (sfsh.indexOf('%') != -1) {
					where.sfsh = {
						[Op.like]: sfsh
					}
				} else {
					where.sfsh = {
						[Op.eq]: sfsh
					}
				}
			}
			let shhf = req.query.shhf
			if (shhf) {

				if (shhf.indexOf('%') != -1) {
					where.shhf = {
						[Op.like]: shhf
					}
				} else {
					where.shhf = {
						[Op.eq]: shhf
					}
				}
			}
			let clicktime = req.query.clicktime
			if (clicktime) {

				if (clicktime.indexOf('%') != -1) {
					where.clicktime = {
						[Op.like]: clicktime
					}
				} else {
					where.clicktime = {
						[Op.eq]: clicktime
					}
				}
			}
			let clicknum = req.query.clicknum
			if (clicknum) {

				if (clicknum.indexOf('%') != -1) {
					where.clicknum = {
						[Op.like]: clicknum
					}
				} else {
					where.clicknum = {
						[Op.eq]: clicknum
					}
				}
			}
			// let tableName = req.session.userinfo.tableName
			let tableName = req.session.userinfo === undefined ? jwt.decode(req.headers.token).tableName : req.session.userinfo.tableName
			if(tableName == 'shezhang') {
				where.shezhangzhanghao = {
					[Op.eq]: req.session.userinfo === undefined ? jwt.decode(req.headers.token).username : req.session.userinfo.shezhangzhanghao
				}
				if (where['userid'] != undefined) {
					delete where.userid
				}
			}

			let result = await ShetuanhuodongModel.findAndCountAll({
				order: [[sort, order]],
				where,
				offset: (page - 1) * limit,
				limit
			})
			
			result.currPage = page
			result.pageSize = limit

			toRes.page(res, 0, result)
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

    // 分页接口（前端）
	api.get('/list', async (req, res) => {

		try {

			let page = parseInt(req.query.page) || 1
			let limit = parseInt(req.query.limit) || 10
			let sort = req.query.sort || 'id'
			let order = req.query.order || 'asc'

			let where = {}
			let sfsh = req.query.sfsh
			if (sfsh) {
				where.sfsh = {
					[Op.eq]: sfsh
				}
			}
			let shetuanmingcheng = req.query.shetuanmingcheng
			if (shetuanmingcheng) {

				if (shetuanmingcheng.indexOf('%') != -1) {
					where.shetuanmingcheng = {
						[Op.like]: shetuanmingcheng
					}
				} else {
					where.shetuanmingcheng = {
						[Op.eq]: shetuanmingcheng
					}
				}
			}
			let huodongmingcheng = req.query.huodongmingcheng
			if (huodongmingcheng) {

				if (huodongmingcheng.indexOf('%') != -1) {
					where.huodongmingcheng = {
						[Op.like]: huodongmingcheng
					}
				} else {
					where.huodongmingcheng = {
						[Op.eq]: huodongmingcheng
					}
				}
			}
			let huodongdidian = req.query.huodongdidian
			if (huodongdidian) {

				if (huodongdidian.indexOf('%') != -1) {
					where.huodongdidian = {
						[Op.like]: huodongdidian
					}
				} else {
					where.huodongdidian = {
						[Op.eq]: huodongdidian
					}
				}
			}


			let result = await ShetuanhuodongModel.findAndCountAll({
				order: [[sort, order]],
				where,
				offset: (page - 1) * limit,
				limit
			})
			
			result.currPage = page
			result.pageSize = limit

			toRes.page(res, 0, result)
		} catch(err) {
			
			toRes.session(res, 401, '您的权限不够！', '', 200)
		}
	})


	// 保存接口（后端）
	api.post('/save', async (req, res) => {

		try {

			Object.keys(req.body).forEach(item=>{
				if(req.body[item] == '')  delete req.body[item]
			})

			req.body.clicktime = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')


			const userinfo = await ShetuanhuodongModel.create(req.body)

			if (userinfo === null) {

				toRes.session(res, -1, '添加失败！')
			} else {

				toRes.session(res, 0, '添加成功！')
			}
		} catch(err) {
			
			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

    // 保存接口（前端）
	api.post('/add', async (req, res) => {

		try {

			Object.keys(req.body).forEach(item=>{
				if(req.body[item] == '')  delete req.body[item]
			})

			if (jwt.decode(req.headers.token) == null) {
				toRes.session(res, 401, '请登录后再操作', '', 401)
			}

			req.body.clicktime = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')


			const userinfo = await ShetuanhuodongModel.create(req.body)

			if (userinfo === null) {

				toRes.session(res, -1, '添加失败！')
			} else {

				toRes.session(res, 0, '添加成功！')
			}
		} catch(err) {
			
			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// 更新接口
	api.post('/update', async (req, res) => {

		try {



			await ShetuanhuodongModel.update(req.body, {
				where: {
				  id: req.body.id || 0
				}
			})


			toRes.session(res, 0, '编辑成功！')
		} catch(err) {
			
			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// 删除接口
	api.post('/delete', async (req, res) => {

		try {

			await ShetuanhuodongModel.destroy({
				where: {
				  id: {
					[Op.in]: req.body
				  }
				}
			})

			toRes.session(res, 0, '删除成功！')
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// 详情接口（后端）
	api.all('/info/:id', async (req, res) => {

		try {

            await ShetuanhuodongModel.update({
				clicktime: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
			}, {
				where: {
				  id: req.params.id
				}
			})
			const recordInfo = await ShetuanhuodongModel.findOne({ where: { id: req.params.id } })
            await recordInfo.increment('clicknum')

			toRes.record(res, 0, await ShetuanhuodongModel.findOne({ where: { id: req.params.id } }))
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

    // 详情接口（前端）
	api.all('/detail/:id', async (req, res) => {

		try {

            await ShetuanhuodongModel.update({
				clicktime: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
			}, {
				where: {
				  id: req.params.id
				}
			})
			const recordInfo = await ShetuanhuodongModel.findOne({ where: { id: req.params.id } })
            await recordInfo.increment('clicknum')

			toRes.record(res, 0, await ShetuanhuodongModel.findOne({ where: { id: req.params.id } }))
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// 获取需要提醒的记录数接口
	api.get('/remind/:columnName/:type', async (req, res) => {

		try {

			let sql = 'SELECT 0 AS count'
			
			if (req.params.type == 1) {
				if (req.query.remindstart) sql = "SELECT COUNT(*) AS count FROM shetuanhuodong WHERE " + req.params.columnName + " >= '" + req.query.remindstart + "'"
				if (req.query.remindend) sql = "SELECT COUNT(*) AS count FROM shetuanhuodong WHERE " + req.params.columnName + " <= '" + req.query.remindend + "'"

				if (req.query.remindstart && req.query.remindend) {
					sql = "SELECT COUNT(*) AS count FROM shetuanhuodong WHERE " + req.params.columnName + " >= '" + req.query.remindstart + "' AND " + req.params.columnName + " <= '" + req.query.remindend + "'"
				}
			}

			if (req.params.type == 2) {
				if (req.query.remindstart) {
					let remindStart = util.getDateTimeFormat(0 + Number(req.query.remindstart), "yyyy-MM-dd")
					sql = "SELECT COUNT(*) AS count FROM shetuanhuodong WHERE " + req.params.columnName + " >= '" + remindStart + "'"
				}
				if (req.query.remindend) {
					let remindEnd = util.getDateTimeFormat(req.query.remindend, "yyyy-MM-dd")
					sql = "SELECT COUNT(*) AS count FROM shetuanhuodong WHERE " + req.params.columnName + " <= '" + remindEnd + "'"
				}

				if (req.query.remindstart && req.query.remindend) {
					let remindStart = util.getDateTimeFormat(0 + Number(req.query.remindstart), "yyyy-MM-dd")
					let remindEnd = util.getDateTimeFormat(req.query.remindend, "yyyy-MM-dd")
					sql = "SELECT COUNT(*) AS count FROM shetuanhuodong WHERE " + req.params.columnName + " >= '" + remindStart + "' AND " + req.params.columnName + " <= '" + remindEnd + "'"
				}
			}

			const results = await sequelize.query(sql, {
				plain: true,
				raw: true,
				type: QueryTypes.SELECT
			})

			toRes.count(res, 0, results.count)
		} catch(err) {
			
			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})




	// 智能推荐接口
	api.get('/autoSort', async (req, res) => {

		try {

			let page = parseInt(req.query.page) || 1
			let limit = parseInt(req.query.limit) || 5
			let sort = req.query.sort || 'clicktime'
			let order = req.query.order || 'desc'

            sort = "clicknum"

			let result = await ShetuanhuodongModel.findAndCountAll({
				order: [[sort, order]],
				offset: (page - 1) * limit,
				limit
			})
			
			result.currPage = page
			result.pageSize = limit

			toRes.page(res, 0, result)
		} catch(err) {
			
			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})






	// 分组统计接口
	api.get('/group/:columnName', async (req, res) => {

		try {

			let sql = ""
			let columnName = req.params.columnName
			// let tableName = "shetuanhuodong"
			let where = " WHERE 1 = 1 "
			let tableName = req.session.userinfo === undefined ? jwt.decode(req.headers.token).tableName : req.session.userinfo.tableName
			if(tableName == 'shezhang') {
				where += " AND shezhangzhanghao = '" + jwt.decode(req.headers.token).username + "' ";
			}
			sql = "SELECT COUNT(*) AS total, " + columnName + " FROM shetuanhuodong " + where + " GROUP BY " + columnName + " LIMIT 10" 
			toRes.record(res, 0, await sequelize.query(sql, {
				plain: false,
				raw: true,
				type: QueryTypes.SELECT
			}))
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// 统计指定字段
	api.get('/value/:xColumnName/:yColumnName', async (req, res) => {

		try {

			let sql = ""
			let xColumnName = req.params.xColumnName
			let yColumnName = req.params.yColumnName
			// let tableName = "shetuanhuodong"
			let where = " WHERE 1 = 1 "
			let tableName = req.session.userinfo === undefined ? jwt.decode(req.headers.token).tableName : req.session.userinfo.tableName
			if(tableName == 'shezhang') {
				where += " AND shezhangzhanghao = '" + jwt.decode(req.headers.token).username + "' ";
			}
			if ("shetuanhuodong" == "orders") {
				where += " AND status IN ('已支付', '已发货', '已完成') ";
			}

			sql = "SELECT " + xColumnName + ", SUM(" + yColumnName + ") AS total FROM shetuanhuodong " + where + " GROUP BY " + xColumnName + " DESC LIMIT 10"
			
			toRes.record(res, 0, await sequelize.query(sql, {
				plain: false,
				raw: true,
				type: QueryTypes.SELECT
			}))
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// 按日期统计
	api.get('/value/:xColumnName/:yColumnName/:timeStatType', async (req, res) => {

		try {
			
			let sql = ""
			let xColumnName = req.params.xColumnName
			let yColumnName = req.params.yColumnName
			let timeStatType = req.params.timeStatType
			let tableName = "shetuanhuodong"
			let where = " WHERE 1 = 1 "
			if (jwt.decode(req.headers.token).role != '管理员') {
				where += " AND shezhangzhanghao = '" + jwt.decode(req.headers.token).username + "' ";
			}
			if ("shetuanhuodong" == "orders") {
				where += " AND status IN ('已支付', '已发货', '已完成') ";
			}

            if (config.dbConnection.dbtype.toLowerCase() == "mysql") {
                if (timeStatType == "日")
                    sql = "SELECT DATE_FORMAT(" + xColumnName + ", '%Y-%m-%d') " + xColumnName + ", sum(" + yColumnName + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(" + xColumnName + ", '%Y-%m-%d') LIMIT 10";
                if (timeStatType == "月")
                    sql = "SELECT DATE_FORMAT(" + xColumnName + ", '%Y-%m') " + xColumnName + ", sum(" + yColumnName + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(" + xColumnName + ", '%Y-%m')  LIMIT 10";
                if (timeStatType == "年")
                    sql = "SELECT DATE_FORMAT(" + xColumnName + ", '%Y') " + xColumnName + ", sum(" + yColumnName + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(" + xColumnName + ", '%Y')  LIMIT 10";
            } else {
                if (timeStatType == "日")
                    sql = "SELECT DATE_FORMAT(VARCHAR(10)," + xColumnName + ", 120) " + xColumnName + ", sum(" + yColumnName + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(VARCHAR(10)," + xColumnName + ", 120)  LIMIT 10";
                if (timeStatType == "月")
                    sql = "SELECT DATE_FORMAT(VARCHAR(7)," + xColumnName + ", 120) " + xColumnName + ", sum(" + yColumnName + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(VARCHAR(7)," + xColumnName + ", 120)  LIMIT 10";
                if (timeStatType == "年")
                    sql = "SELECT DATE_FORMAT(VARCHAR(4)," + xColumnName + ", 120) " + xColumnName + ", sum(" + yColumnName + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(VARCHAR(4)," + xColumnName + ", 120)  LIMIT 10";
            }
			toRes.record(res, 0, await sequelize.query(sql, {
				plain: false,
				raw: true,
				type: QueryTypes.SELECT
			}))
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})












	return api
}
