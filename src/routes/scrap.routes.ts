/*import { Response, } from 'restify';
import { Router, } from 'restify-router';
import downVideoController from '../controllers/downvideo.controllers';

const router = new Router();

router.post('/downVideo', async (req, res): Promise<Response> => {
  try {
    const {link} = req.body
    console.log("🚀 ~ file: scrap.routes.ts ~ line 10 ~ router.post ~ link", link)
    await downVideoController.download(link)
    return res.json({ success: true, });
  } catch (error) {
    return res.json({succes: false, error: error.stack})
  }
});




export default router;
*/