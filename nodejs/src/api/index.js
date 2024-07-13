import { Router } from 'express'
import UsersController from './Users'
import FileController from './File'
import ConfigController from './Config'
import CommonController from './Common'
import XueshengController from './Xuesheng'
import ShezhangController from './Shezhang'
import ShetuanxinxiController from './Shetuanxinxi'
import ShetuanshenqingController from './Shetuanshenqing'
import ShetuanhuodongController from './Shetuanhuodong'
import HuodongbaomingController from './Huodongbaoming'
import ShetuanleixingController from './Shetuanleixing'
import ChangdixinxiController from './Changdixinxi'
import ChangdishenqingController from './Changdishenqing'
import StoreupController from './Storeup'
import NewsController from './News'
import MessagesController from './Messages'
import DiscussshetuanxinxiController from './Discussshetuanxinxi'
import DiscussshetuanhuodongController from './Discussshetuanhuodong'

export default ({ config, db }) => {
	let api = Router()

	api.use('/users', UsersController({ config, db }))

	api.use('/file', FileController({ config, db }))

	api.use('/config', ConfigController({ config, db }))

	api.use('/', CommonController({ config, db }))

	api.use('/xuesheng', XueshengController({ config, db }))

	api.use('/shezhang', ShezhangController({ config, db }))

	api.use('/shetuanxinxi', ShetuanxinxiController({ config, db }))

	api.use('/shetuanshenqing', ShetuanshenqingController({ config, db }))

	api.use('/shetuanhuodong', ShetuanhuodongController({ config, db }))

	api.use('/huodongbaoming', HuodongbaomingController({ config, db }))

	api.use('/shetuanleixing', ShetuanleixingController({ config, db }))

	api.use('/changdixinxi', ChangdixinxiController({ config, db }))

	api.use('/changdishenqing', ChangdishenqingController({ config, db }))

	api.use('/storeup', StoreupController({ config, db }))

	api.use('/news', NewsController({ config, db }))

	api.use('/messages', MessagesController({ config, db }))

	api.use('/discussshetuanxinxi', DiscussshetuanxinxiController({ config, db }))

	api.use('/discussshetuanhuodong', DiscussshetuanhuodongController({ config, db }))

	return api
}
