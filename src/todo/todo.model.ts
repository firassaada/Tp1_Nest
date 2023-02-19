export class todomodel {
    id: string
    name: String 
    description: String
    date_de_creation : Number
    statut : TodoStatusEnum

}
export enum TodoStatusEnum {
    'actif' = "En cours",
    'waiting' = "En attente",
    'done' = "Finalisé"
}