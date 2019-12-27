const User = require('../models').User;

module.exports = {

    async getAllUsers(req,res) {

        try {

            const userCollection = await User.findAll({});
            console.log('----------> userCollection ', userCollection);

            res.status(201).send(userCollection);

        }
        catch(e){
            console.log(e);

            res.status(500).send(e);
        }

    },

    async create(req,res) {
        try {
            const userCollection = await User
            .create({
                email : req.body.email,
            });

            res.status(201).send(userCollection);
        }
        catch(e){
            console.log(e);
            res.status(400).send(e);
        }
                    
    },

    async update(req,res) {

        try{
            const userCollection = await User.find({
                id : req.params.userId
            });

            if(userCollection){

                const updatedUser = await User.update({
                    id : req.body.email
                });

                res.status(201).send(updatedUser)

            }
            else{

                res.status(404).send("User Not Found");
            }

        }
        catch(e){
            console.log(e);

            res.status(500).send(e);

        }
    } 


}

// models.sequelize.query(`SELECT meses::json->0->>'id_planilla' as id_planilla FROM "ddjj_planilla" AS "ddjj_planilla" WHERE "ddjj_planilla"."fid_planilla_base" IN (1, 6);`, {model: models.planilla})
// .then(respuesta => {







// return models.sequelize.query(`SELECT sum(pd.total_ganado_desp_duo) as total_ganado_desp_duo,
// WHERE pd.fid_planilla IN (${idsPlanillas.join(',')})
// GROUP BY nombres, paterno, materno, tipo_documento, nro_documento, complemento, fecha_nacimiento, estado_verificacion, complemento_visible;`,
// {
// replacements: { },
// type: models.sequelize.QueryTypes.SELECT,
// });
