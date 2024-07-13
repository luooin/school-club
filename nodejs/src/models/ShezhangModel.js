import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 社长
const ShezhangModel = sequelize.define('ShezhangModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	shezhangzhanghao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '社长账号'
	},
	mima: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '密码'
	},
	shezhangxingming: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '社长姓名'
	},
	xingbie: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '性别'
	},
	lianxidianhua: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '联系电话'
	},
	touxiang: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '头像'
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
	tableName: 'shezhang'
})

export default ShezhangModel
