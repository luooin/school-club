import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 社团信息
const ShetuanxinxiModel = sequelize.define('ShetuanxinxiModel', {
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
	shetuanxuanyan: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '社团宣言'
	},
	shetuanjieshao: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '社团介绍'
	},
	chuanglishijian: {
		type: DataTypes.DATEONLY,
		allowNull: true,
		get() {
            return moment(this.getDataValue('chuanglishijian')).format('YYYY-MM-DD')
        },
		comment: '创立时间'
	},
	shetuantupian: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '社团图片'
	},
	shezhangzhanghao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '社长账号'
	},
	lianxidianhua: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '联系电话'
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
	tableName: 'shetuanxinxi'
})

export default ShetuanxinxiModel
