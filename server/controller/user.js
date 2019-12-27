const User = require('../models').User;
const models = require('../models');

module.exports = {

    async getAllUsers(req,res) {

        try {

            // const userCollection = await User.findAll({});
            const userCollection = await models.sequelize.query(`select * from "Users";`, { replacements: { }, type: models.sequelize.QueryTypes.SELECT});
            // const userCollection = await models.sequelize.query(`select * from "Users";`);
            console.log('----------> userCollection ', userCollection);
            res.status(200).send(userCollection);

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







// return models.sequelize.query(`select * from `,
// {
// replacements: { },
// type: models.sequelize.QueryTypes.SELECT,
// });
