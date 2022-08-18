import 'dotenv/config';

import {server} from './service/server';


server.listen(process.env.PORT, () => {
  console.log('%s listening at %s', server.name, server.url);
});