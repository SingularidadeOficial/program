export default class s_t_linkFunction{
    constructor(table, internalConfig = [
        {
            linkInsertCell: true,
            linkPosition: {row: "all", col: -1},
            linkFunction: function(tr, td){
                td.innerHTML = `<button>DEL</button>`;
                td.firstElementChild.addEventListener('click', (e)=>{
                    tr.parentNode.parentNode.deleteRow(tr.rowIndex);
                });
            },
        }
    ]){
        this.table = table;

        internalConfig.forEach((conf)=>{
            let row;
            let cell;
            if(conf.linkPosition.row != "all"){
                row = table.rows.item(conf.linkPosition.row);
                if(conf.linkInsertCell){
                    cell = row.insertCell(conf.linkPosition.col);
                } else {
                    cell = row.cells.item(conf.linkPosition.col);
                }
                conf.linkFunction(row, cell);
            } else {
                for(let i=1; i <= (this.table.rows.length-1); i++){
                    row = table.rows.item(i);
                    if(conf.linkInsertCell){
                        cell = row.insertCell(conf.linkPosition.col);
                    } else {
                        cell = row.cells.item(conf.linkPosition.col);
                    }
                    conf.linkFunction(row, cell);
                }
            }
        });
    } // END Constructor
}