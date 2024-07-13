import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 场地信息
const ChangdixinxiModel = sequelize.define('ChangdixinxiModel', {
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
	changdizhuangtai: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '场地状态'
	},
	fuzeren: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '负责人'
	},
	changdijieshao: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '场地介绍'
	},
	changditupian: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '场地图片'
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
	tableName: 'changdixinxi'
})

export default ChangdixinxiModel
