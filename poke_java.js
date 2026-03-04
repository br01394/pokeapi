function addPokemon(){
	let start_url = "https://pokeapi.co/api/v2/pokemon/";
	let name = document.getElementById("inputName").value
	let full_url = start_url + name;
	
	//img switch
	fetch(full_url)
		.then(response => response.json())
		.then(data => change(data));
	
	
}

function change(data){
	
	//console.log(data);
	console.log(data.sprites.back_default);
	let img = document.getElementById("questionmark");
	img.src = data.sprites.front_default;
	
	let sound = document.getElementById("sound");
	sound.src = data.cries.latest;
	
	console.log(data.moves[0].move.name);
	console.log(data.moves.length);
	
	let parentList1 = document.getElementById("moves1");
	let parentList2 = document.getElementById("moves2");
	let parentList3 = document.getElementById("moves3");
	let parentList4 = document.getElementById("moves4");
	
	parentList1.innerHTML = "";
	parentList2.innerHTML = "";
	parentList3.innerHTML = "";
	parentList4.innerHTML = "";
	for(let x = 0; x < data.moves.length + 1;x++){
		let newMove1 = document.createElement("option");
		let newMove2 = document.createElement("option");
		let newMove3 = document.createElement("option");
		let newMove4 = document.createElement("option");
		
		newMove1.textContent = data.moves[x].move.name;
		newMove1.value = data.moves[x].move.name;
		
		newMove2.textContent = data.moves[x].move.name;
		newMove2.value = data.moves[x].move.name;
		
		newMove3.textContent = data.moves[x].move.name;
		newMove3.value = data.moves[x].move.name;
		
		newMove4.textContent = data.moves[x].move.name;
		newMove4.value = data.moves[x].move.name;
		
		parentList1.appendChild(newMove1);
		parentList2.appendChild(newMove2);
		parentList3.appendChild(newMove3);
		parentList4.appendChild(newMove4);
		
	}
	
	//for(let x = 0; x < 
	
	
}

