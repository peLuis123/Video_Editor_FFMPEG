import {Router} from 'restify-router';
import router from './video.routes';
import VideoRoute from './video.routes';
//import ScrapRoute from './scrap.routes'
const routerInstance = new Router();
const listOfRouter = new Router();
const scrapOfRouter = new Router();

listOfRouter.add('/video', VideoRoute);
//listOfRouter.add('/scrapp',ScrapRoute);
// listOfRouter.add('/tiktok', VideoRoute);
// listOfRouter.add('/youtube', VideoRoute);
// listOfRouter.add('/sonyvegas', VideoRoute);
routerInstance.add('/api/v1', listOfRouter);

export default routerInstance;