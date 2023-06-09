
import { CustomLogger } from '../config/Logger'
import { SystemEntryService } from '../config/SystemEntryService';
import { SefServices } from '../apiservices/sefservices';
import fetch from 'node-fetch';
const faker = require('faker');


export class UserDao {
    
    private sefServices = new SefServices();
    constructor() { }
    
    public async GpSEF(UserFeatureId, UserMailId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into UserDao.ts: GpSEF');

    

    
    
    
    this.sefServices.GpSEF(UserFeatureId, UserMailId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from UserDao.ts: GpSEF');

        callback(result);
}).catch((error)=>{
callback(error);
});}

    
    }