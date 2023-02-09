import {Component} from "react"
import { Adresse } from "./Adresse.js"


export class Clients extends Component{
  constructor(props){
    super()
    this.state = {nom : props.nom, prenom : props.prenom, telephone : props.telephone,statut:props.statut, adresse :{rue : props.rue, ville : props.ville, codePostal : props.codePostal}}
  }

  render(){
    const {nom,prenom,telephone,statut,adresse} = this.props.client
    let couleur = ""
    if(statut){
      couleur = ""
    }
    else{
      couleur = "red"
    }
    return(
    <table className="tableContact">
      <tbody>
        <tr className={couleur}><td>nom : </td><td>{nom}</td><td>prenom : </td><td>{prenom}</td><td>telephone :</td><td>{telephone}</td></tr>
        <Adresse adresse={adresse} couleur={couleur}></Adresse>
      </tbody>
  </table>
    )
  }
}

