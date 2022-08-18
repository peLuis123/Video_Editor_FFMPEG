import {Router} from 'restify-router';
import VideoRoute from './video.routes';

const routerInstance = new Router();
const listOfRouter = new Router();

listOfRouter.add('/video', VideoRoute);
// listOfRouter.add('/tiktok', VideoRoute);
// listOfRouter.add('/youtube', VideoRoute);
// listOfRouter.add('/sonyvegas', VideoRoute);
routerInstance.add('/api/v1', listOfRouter);


export default routerInstance;