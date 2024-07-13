import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 场地申请
const ChangdishenqingModel = sequelize.define('ChangdishenqingModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	changdimingcheng: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '场地名称'
	},
	changdiweizhi: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '场地位置'
	},
	rongnarenshu: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '容纳人数'
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
	shezhangxingming: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '社长姓名'
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
	tableName: 'changdishenqing'
})

export default ChangdishenqingModel
