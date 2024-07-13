import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 社团活动
const ShetuanhuodongModel = sequelize.define('ShetuanhuodongModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	shetuanmingcheng: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '社团名称'
	},
	huodongmingcheng: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '活动名称'
	},
	huodongdidian: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '活动地点'
	},
	huodongshipin: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '活动视频'
	},
	huodongneirong: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '活动内容'
	},
	huodongzhuangtai: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '活动状态'
	},
	huodongshijian: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '活动时间'
	},
	huodongtupian: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '活动图片'
	},
	shezhangzhanghao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '社长账号'
	},
	sfsh: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '是否审核'
	},
	shhf: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '审核回复'
	},
	clicktime: {
		type: DataTypes.DATE,
		allowNull: true,
		get() {
            return moment(this.getDataValue('clicktime')).format('YYYY-MM-DD HH:mm:ss')
        },
		comment: '最近点击时间'
	},
	clicknum: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '点击次数'
	},
	addtime: {
  		type: DataTypes.DATE,
  		defaultValue: DataTypes.NOW,
    	allowNull: false,
    	get() {
            return moment(this.getDataValue('addtime')).format('YYYY-MM-DD HH:mm:ss')
        },
		comment: '添加时间'
	}
}, {
	timestamps: false,
	freezeTableName: true,
	tableName: 'shetuanhuodong'
})

export default ShetuanhuodongModel
