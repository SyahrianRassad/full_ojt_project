import axios from "axios"

const typeDataAny:any[] =["aku", 12, true]
const typeDataString:string = "Papa";
const typeDataNumber:number = 19;
const typeDataBoolean:boolean = true;
const typeDataArray:string[] = ["mama", "adek", "kakak"];
const typeDataObject:object = {
    name: 'coba dulu ahh'
}

console.log(typeDataAny)
console.log(typeDataString)
console.log(typeDataNumber)
console.log(typeDataBoolean)
console.log(typeDataArray)


interface admin {
    name:string,
    age:number,
    merriage:boolean
}

const dataAdmin:admin = {
    name: "Syahrian",
    age: 18,
    merriage: false
}

console.log(dataAdmin)


const getAdmin = (value:string) =>{
    return value
}

const dataFunction = getAdmin("Rama")

console.log(dataFunction)


function voidTest():void{
    console.log('tes')
}

voidTest();

async function tes() {
    try{
          axios.get('http://localhost:3030/mongodb/')
          .then(res => {
            console.log(res.data)
          })
          .catch(err => console.log(err))
      
          // console.log(data) 
    }catch{
        console.error();
    }
}

tes()