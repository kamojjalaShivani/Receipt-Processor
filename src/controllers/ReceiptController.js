const{CalculatePoints}=require('../utils/pointsGenerator');
const { v4: uuidv4 } = require("uuid");

const receipts={} //storing the receipts in memory

async function processReceipt(req,res){
    const receipt=req.body;
    const id=uuidv4();
    receipts[id] = CalculatePoints(receipt);
    res.json({ id });
};

async function getPoints(req,res){
    const id=req.params.id;
    if(receipts[id]!==undefined){
        res.json({points:receipts[id]});// returns points
    }else {
        res.status(404).json({ error: "Receipt not found" }); // Return error if ID does not exist
    }
}

module.exports={processReceipt,getPoints};