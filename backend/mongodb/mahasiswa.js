const {MongoClient} = require('mongodb');

async function main() {

    const url = 'mongodb+srv://Syahrian_rr:hqxz5BPiPRbaj3Pv@mahasiswa.mt7wqcq.mongodb.net/?retryWrites=true&w=majority'

    const client = new MongoClient(url)

    try{
        await client.connect();
        
        // await createManyListing(client, [
        //     {
        //         nama:"Mirza",
        //         alamat:"Wonorejo",
        //         gender:"laki-laki",
        //         jurusan:"Biologi"
        //     },
        //     {
        //         nama:"Panca",
        //         alamat:"Pikatan",
        //         gender:"laki-laki",
        //         jurusan:"Teknologi dan Informatika"
        //     },
        //     {
        //         nama:"Edsel",
        //         alamat:"Wonodadi",
        //         gender:"laki-laki",
        //         jurusan:"Seni Rupa"
        //     },
        // ])

        // await callAllData(client)

        // await findData(client, "RPL")

        await findOneByName(client, "Mirza")

        // await updateOneByName(client, "Mirza", {alamat: "Wonodadi"})

        // await deleteOneByName(client, "Panca")

    }catch(e){
        console.error(e)
    }finally{
        await client.close()
    }
}

main().catch(console.error);

async function listDatabases(client){
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`)
    });
}

//POST
async function createListing(client, newListing){
    const result = await client.db("mahasiswa").collection("mahasiswa").insertOne(newListing)

    console.log(`${result.insertedCount} New Data created with the following id: ${result.insertedId}`)
}

async function createManyListing(client, newListing){
    const result = await client.db("mahasiswa").collection("mahasiswa").insertMany(newListing)

    console.log(`New Data created with the following id(s): `)
    console.log(result.insertedId)
}

//GET
async function callAllData(client){
    const result = await client.db("mahasiswa").databases("mahasiswa").collection("mahasiswa")

    const databasesList = await client.db().admin().listDatabases();

    console.log(result);
    // result.databases.forEach(db => {
    //     console.log(`- ${db.name}`)
    // });
}

async function findData(client, jurusan){
    const cursor = await client.db("mahasiswa").collection("mahasiswa").find({jurusan: jurusan})
    const result = await cursor.toArray()

    console.log(result)
}

async function findOneByName(client, name){
    const result = await client.db("mahasiswa").collection("mahasiswa").findOne({nama: name})

    console.log(result)
}


//UPDATE
async function updateOneByName(client, name, updateList){
    const result = await client.db("mahasiswa").collection("mahasiswa").updateOne({nama: name}, {$set: updateList})

    console.log(`${result.matchedCount} document(s) matched the query criteria`)
    console.log(`${result.modifiedCount} documents was updated`)
}

//DELETE
async function deleteOneByName(client, name){
    const result = await client.db("mahasiswa").collection("mahasiswa").deleteOne({nama: name})

    console.log(`${result.deletedCount} document(s) was deleted`)
}