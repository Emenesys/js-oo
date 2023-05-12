import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

const novoUSer = new User('carlos', 'c@c.com', '2023/01/01')
console.log(novoUSer.exibirInfos())
