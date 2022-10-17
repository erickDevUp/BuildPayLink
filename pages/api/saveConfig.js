import * as fs from 'fs'
const saveConfig = (req,res) => {
    console.log(req.body);
    console.log(typeof(JSON.stringify( req.body)));
    fs.writeFileSync('./public/paylink.config.json',JSON.stringify( req.body))
  res.status(200).json({ data: `/uploads/profiles` }); // response
}
 
export default saveConfig;