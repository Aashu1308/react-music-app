import { createServer } from 'http';
import { userdata } from './database.js';

createServer(async (req,res)=> {
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    if(req.url == '/api/userdata'){
        try {
            res.writeHead(200, {'Content-Type':'application/json'});
            const dataset = await userdata(); 
            res.write(dataset); 
        }
        finally {
            res.end();
        }
    }
}).listen(4000);