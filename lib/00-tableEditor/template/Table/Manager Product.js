coll0: false,
coll1: false,
coll2: false,
coll3: false,
coll5: false,
coll4: false,
coll6(cell, tds){
	const element = cell.querySelector('input');
	element.addEventListener("click", async (event)=>{
		const id = tds[0].innerHTML;
		const objData = _tableEditor.getRowFormData(cell);
		await axios.patch(`http://localhost:3000/api/v1/product/${id}`, objData);
	});
}
