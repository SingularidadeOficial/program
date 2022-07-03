coll0: false,
coll1: false,
coll2(cell, tds){
	cell.querySelector('select').addEventListener("change", (ev)=>{
		_tableEditor.addCallFunction(7, tds);
	});
},
coll3(cell, tds){
	_tableEditor.addCallFunctionBlur(cell, 7, tds);
},
coll4(cell, tds){
	_tableEditor.addSufixo(cell, "mm");
	_tableEditor.addCallFunctionBlur(cell, 7, tds);
},
coll5(cell, tds){
	_tableEditor.addSufixo(cell, "mm");
	_tableEditor.addCallFunctionBlur(cell, 7, tds);
},
coll6(cell, tds){
	const DENSIDADE_APROXIMADA = [7.853, 7.860, 7.860, 8.800, 7.852];
	
	let collSelectChapa  = tds[1].querySelector('select');
	
	collSelectChapa.addEventListener("change", (ev)=>{
		if(collSelectChapa.selectedIndex > 0){
			switch (collSelectChapa.value){
				case "ff": 
					tds[6].innerHTML = `${DENSIDADE_APROXIMADA[0]}kg/m²`;
				break;
				case "fq": 
					tds[6].innerHTML = `${DENSIDADE_APROXIMADA[1]}kg/m²`;
				break;
				case "cg": 
					tds[6].innerHTML = `${DENSIDADE_APROXIMADA[2]}kg/m²`;
				break;
				case "cx": 
					tds[6].innerHTML = `${DENSIDADE_APROXIMADA[3]}kg/m²`;
				break;
				case "cgal": 
					tds[6].innerHTML = `${DENSIDADE_APROXIMADA[4]}kg/m²`;
				break;
			}
		}
	});
},
coll7(cell, tds){
	let collSelectChapa  = tds[1].querySelector('select');
	let collSelectPerfil = tds[2].querySelector('select');
	let collDimension    = tds[3].innerText;
	let collEspessura    = tds[4].innerText;
	let collComprimento  = tds[5].innerText;
	let collDensidade    = tds[6].innerText;
	
	collEspessura   = _tableEditor.getValueOfSufixo(collEspessura, "mm");
	collComprimento = parseFloat(_tableEditor.getValueOfSufixo(collComprimento, "mm")/1000);
	collDensidade   = parseFloat(_tableEditor.getValueOfSufixo(collDensidade, "kg/m²"));
	
	if(collSelectPerfil.value == "perfilU"){
		if(collDimension.split('x').length == 2){
			let tmpDimension = collDimension.split('x').map(el=>{
				return parseFloat(el);
			});
			
			collDimension = (tmpDimension[0] + (2*tmpDimension[1]))/1000;
			
			let tmp = (collDimension*collComprimento*collDensidade).toFixed(2);
			
			cell.innerHTML = `${tmp}kgf/m²`;
		} else {
			window.alert('DIMENSÃO: 0x0');
		}
	} else if(collSelectPerfil.value == "perfilUE"){
		if(collDimension.split('x').length == 3){
			let tmpDimension = collDimension.split('x').map(el=>{
				return parseFloat(el);
			});
			
			collDimension = (tmpDimension[0] + (2*tmpDimension[1]) + (2*tmpDimension[2]))
			/1000;
			
			let tmp = (collDimension*collComprimento*collDensidade).toFixed(2);
			
			cell.innerHTML = `${tmp}kgf/m²`;
		} else {
			window.alert('DIMENSÃO: 0x0x0');
		}
	}
}

