# VoyageTemporelProject


format voyage : 
{
   "dateArrivee":[1856,6,23],
   "dateRetour":[1856,7,1],
   "epoque":"Renaissance",
   "prix":2300.85,
   "adresse":{
       "numero":"1",
       "rue":"fnde",
       "cp":"45531",
       "ville":"nkfdddf",
       "pays":"vvdnkd"
   },
   "machine":{
       "id":1
   }
}

format machine : 
{
       "dateMachine":[2021,12,3],
       "typeMachine":"TARDIS",
       "etatMachine":"Disponible"
   }

format client : 
{
   "login":"emy",
   "password":"password",
   "nom":"boucard",
   "prenom":"emy",
   "tel":"0325252525",
   "mail":"emy@gmail.com",
   "anniversaire":[1998,12,25],
   "adresse":{
       "numero":"1",
       "rue":"fde",
       "cp":"45531",
       "ville":"nkdf",
       "pays":"vnkd"
   }
}

format reservation :
{
   "client":{"id":1},
   "passager":[{"id":1},{"id":2}],
   "voyage":{"id":1},
   "prixReel":5000,
   "etatVoyage":"Termine",
   "dateDepart":[2022,12,5],
   "heureDepart":[12,12,0]
}