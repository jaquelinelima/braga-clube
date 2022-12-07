import swal from 'sweetalert'
import RegisterService from '../../../../app-front/src/RegisterService';

const mongoose=require("mongoose");

const Usuario=mongoose.model("Usuario",{
    nome:String,
    numeroCel:String,
    email:String,
    senha:String
});

module.exports=Usuario;