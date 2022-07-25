export default class slib_t_editable{
    constructor(table){
        this.table = table;
        
        this.table.querySelectorAll('tbody tr').forEach((tr, i_row)=>{
            tr.querySelectorAll('td').forEach((td, i_coll)=>{
                td.style.cursor = "pointer";
                td.addEventListener('click', (ev)=>{
                    if(!ev.target.classList.contains('slib-tablo-editing')){
                        ev.target.setAttribute('contentEditable', true);
                        ev.target.style.cursor = 'auto';
                        ev.target.setAttribute('sdata-td-old', ev.target.innerHTML);
                        ev.target.classList.add('slib-tablo-editing');
                        ev.target.focus();
                    }
                });

                td.addEventListener('blur', (ev)=>{
                    ev.target.style.cursor = 'pointer';
                    ev.target.classList.remove('slib-tablo-editing');
                    ev.target.removeAttribute('contentEditable');
                    // ev.target.innerHTML = td.getAttribute('sdata-td-old');
                });

            }); // END Column forEach
        }); // END Row forEach
    } // END Constructor
}