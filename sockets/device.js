import {io} from "../index";

export const sockets = ()=>{

    io.on('connection', client => {

        client.on('gauge', async(data) => { 
                       
              console.log(data);  
              
                io.emit('monitor',
                JSON.stringify(data));    
                
              
           });

    });
  
}