import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 社团申请
const ShetuanshenqingModel = sequelize.define('ShetuanshenqingModel', {
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
	shetuanleixing: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '社团类型'
	},
	shenqingshijian: {
		type: DataTypes.DATE,
		allowNull: true,
		get() {
            return moment(this.getDataValue('shenqingshijian')).format('YYYY-MM-DD HH:mm:ss')
        },
		comment: '申请时间'
	},
	shenqingshuoming: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '申请说明'
	},
	shezhangzhanghao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '社长账号'
	},
	xuehao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '学号'
	},
	xingming: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '姓名'
	},
	shouji: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '手机'
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
	tableName: 'shetuanshenqing'
})

export default ShetuanshenqingModel
