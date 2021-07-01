const admin = require('../../config/firebase_connect')
const db =admin.database();

function snapshotToArray(snapshot) {
    var returnArr = [];

    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;

        returnArr.push(item);
    });

    return returnArr;
};

exports.index = (req,res)=>{
    db.ref('prueba').once('value',(snapshot)=>{
        
        res.render('index',{datos : snapshotToArray(snapshot)});
    });

}



exports.agregar= (req,res)=>{
    console.log(req.body);
    db.ref('prueba').push(req.body);
    res.send("recibido");
}

exports.delete = (req,res)=>{
    console.log(req.params.id);
    db.ref('prueba/'+req.params.id).remove();
    res.send('Se elimino el dato con id '+ req.params.id)
}
