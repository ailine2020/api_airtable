const getCommandes = async () => {
    await fetch(
            "https://api.airtable.com/v0/appHYgUO41B1zoeP2/Commandes?maxRecords=3&view=Commandes", {
                headers: {
                    Authorization: "Bearer keyTTGEDAfcCZBSP5"                },
            }
        )
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const commandes = data.records;
            displayAllCommandes(commandes);
            const users = data.records;
            getUtilisateur(users);
        });
};

function displayAllCommandes(commandes) {
    const cdes = document.querySelector(".commandes");
    cdes.innerHTML = "";
    commandes.forEach(commande => {
        cdes.innerHTML += ` <section class="boutique"><section class="infos"><h2>${commande.fields.Boutique}</h2>
        <p class="date">Commande du ${commande.fields.Date}</p></section>
        <p class="colis">${commande.fields.Colis || ""}</p>
        <h3 class="statut">${commande.fields.Statut}</h3>
        </section>
        `
    });
}

function getUtilisateur(users){
    const footer = document.querySelector(".footer");
    users.forEach(user =>{
        footer.innerHTML = `<p class="user">Connecté en tant que ${user.fields.Utilisateur} | Se déconnecter</p>`
    })
}

getCommandes();