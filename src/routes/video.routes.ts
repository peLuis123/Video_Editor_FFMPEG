import { Response, } from 'restify';
import { Router, } from 'restify-router';
import videoController from '../controllers/video.controller';

const router = new Router();

router.get('/execute', async (req, res): Promise<Response> => {
  try {
    await videoController.executeProcessToBuildReel()
    return res.json({ success: true, });
  } catch (error) {
    return res.json({succes: false, error: error.stack})
  }
});

router.get('/ffmpeg', async (req, res): Promise<Response> => {
  try {
    await videoController.testingFfmpeg()
    return res.json({ success: true, });
  } catch (error) {
    return res.json({succes: false, error: error.stack})
  }
});

router.post('/cutvideo', async (req, res): Promise<Response> => {
  try {
    const {nameVideo, startTime, endTime, numberCpusAvailables} = req.body
    console.log("🚀 ~ file: video.routes.ts ~ line 28 ~ router.get ~ nameVideo", nameVideo)
    await videoController.cutVideo(nameVideo, startTime, endTime, numberCpusAvailables)
    return res.json({ success: true, });
  } catch (error) {
    return res.json({succes: false, error: error.stack})
  }
});
//

router.post('/joinVideo', async (req, res): Promise<Response> => {
  try {
    const {nameTxt} = req.body
    console.log("🚀 ~ file: video.routes.ts ~ line 40 ~ router.post ~ nameTxt", nameTxt)
    await videoController.joinVideo(nameTxt)
    return res.json({ success: true, });
  } catch (error) {
    return res.json({succes: false, error: error.stack})
  }
});

router.post('/addFilterVideos', async (req, res): Promise<Response> => {
  try {
    const {nameVideo} = req.body
    console.log("🚀 ~ file: video.routes.ts ~ line 51 ~ router.post ~ req.body", req.body)
    await videoController.addFilterVideos(nameVideo)
    return res.json({ success: true, });
  } catch (error) {
    return res.json({succes: false, error: error.stack})
  }
});
//  
export default router;