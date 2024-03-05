//using async function to retrive the data from the api and display in the card:
async function gameofthronesquotes(){
    try {
        var res= await fetch("https://api.gameofthronesquotes.xyz/v1/characters")
        var res1= await res.json();
        console.log(res1)

        var heading=document.createElement("h1")
        heading.className="col-md-12"
        heading.innerHTML="Game Of Thrones Quotes API"
        
        var container=document.createElement("div")
        container.className="container"

        var row=document.createElement("div")
        row.className="row"

        row.append(heading);

        // using for loop to create a each column for the api data
        for(var i=0;i<res1.length;i++){

        var col=document.createElement("div")
        col.className="col-md-4"

        col.innerHTML=`<div class="card" style="width: 18rem;">
                            <h5 class="card-header">Name: ${res1[i].name}</h5>
                            <ul class="list-group list-group-flush">
                            <li class="list-group-item">House: ${res1[i].house.name}</li>
                            <li class="list-group-item">Quotes: ${res1[i].quotes[0]}</li>
                            <li class="list-group-item">Nickname: ${res1[i].slug}</li>
                            </ul>
                        </div>`
        row.append(col)
        container.append(row)
        document.body.append(container)
}
    } catch (_) {
        col.innerHTML += `<p>Error: Could not retrive any data.</p>`;
    }

}
gameofthronesquotes()