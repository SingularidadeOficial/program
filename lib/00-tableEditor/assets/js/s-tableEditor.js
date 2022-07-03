import ManagerFiles from "./s-managerFiles.js";
import './lib-ExportEXCEL.js';

let svgIcons = {
    download: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
    </svg>`,
    upload: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
    <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
    </svg>`,
    search: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
    </svg>`,
    sortMaiorToMenor: `<svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" fill="currentColor" class="bi bi-sort-down" viewBox="0 0 16 16">
    <path d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293V2.5zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/>
    </svg>`,
    sortMenorToMaior: `<svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" fill="currentColor" class="bi bi-sort-down-alt" viewBox="0 0 16 16">
    <path d="M3.5 3.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 12.293V3.5zm4 .5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5z"/>
    </svg>`,
    filter: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filter-square" viewBox="0 0 16 16">
    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
    <path d="M6 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
    </svg>`,
    add: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-node-plus" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M11 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM6.025 7.5a5 5 0 1 1 0 1H4A1.5 1.5 0 0 1 2.5 10h-1A1.5 1.5 0 0 1 0 8.5v-1A1.5 1.5 0 0 1 1.5 6h1A1.5 1.5 0 0 1 4 7.5h2.025zM11 5a.5.5 0 0 1 .5.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2A.5.5 0 0 1 11 5zM1.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"/>
    </svg>`,
    remove: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-node-minus" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M11 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM6.025 7.5a5 5 0 1 1 0 1H4A1.5 1.5 0 0 1 2.5 10h-1A1.5 1.5 0 0 1 0 8.5v-1A1.5 1.5 0 0 1 1.5 6h1A1.5 1.5 0 0 1 4 7.5h2.025zM1.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM8 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 8 8z"/>
    </svg>`,
    arrowRightShort: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
    </svg>`,
    arrowDownShort: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
    </svg>`,
    arrowLeftShort: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
    </svg>`,
    arrowUpShort: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
    </svg>`,
    removeTitle: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-minus-fill" viewBox="0 0 16 16">
    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM6 8.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z"/>
    </svg>`,
    gear: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
    </svg>`
}

let configInternalStandard = {
    table: {
        object: {},
        editable: {
            init: true,
            clickEditable: true,
            clickOutSave: true,
        },
        managerMenu: {
            init: true,
            button : {
                excel : {
                    init: true,
                    element: [document.querySelector('#s-table-btn-excel')],
                },
                searchTable: {
                    init: true,
                    element: [document.querySelector('#s-table-btn-search')],
                },
                sortTable: {
                    init: true,
                    element: [document.querySelector('#s-table-btn-sort')],
                },
                createDocument: {
                    init: true,
                    element: [document.querySelector('#s-table-btn-newdocument')],
                },
                createTitle: {
                    init: true,
                    initModal: true,
                    element: [document.querySelector('#s-table-btn-newtitle')],
                    thead: {
                        textTitle: "New Title",
                        custom: false,
                        textDefault: "standard",
                        colspan: 1
                    },
                    modal: {
                        classModalContainer: "s-modal-container",
                        classModalFrame: "s-modal-frame",
                        classInputTitle: "s-modal-input-title",
                        classInputCustom: "s-modal-input-Custom",
                        classInputTextDefault: "s-modal-input-textdefault",
                        classInputColspan: "s-modal-input-colspan",
                        classButtonSaveTitle: "s-modal-button-savetitle",
                        classButtonNewTitle: "s-modal-button-createtitle",
                        classButtonClose: "s-modal-button-close"
                    }
                },
                loadTable: {
                    init: true,
                    element: [document.querySelector('#s-table-btn-loadtable')],
                    loadFile: false
                },
                saveTable: {
                    init: true,
                    element: [document.querySelector('#s-table-btn-savetable')],
                    nameFile: "table.json"
                },

            }
        }
    }
}


// ######################################################################################### Início das Funções
function _tableConvertInitial(table, configInternal, jsonConverter = true){
    table.querySelectorAll('tbody tr').forEach(element=>{
        element.addEventListener('click', ev=>{
            if(ev.altKey){
                element.classList.toggle('s-table-rowselected');
            } else if(ev.ctrlKey){
                
            } else {
                element.classList.remove('s-table-rowselected');
            }
        });
    });


    let fullObject      = {};
    let jsonObjectFORM  = [];
    let jsonObjectTHEAD = [];
    let jsonObjectTBODY = [];

    table.querySelectorAll('thead th').forEach((th, i_coll)=>{
        jsonObjectFORM.push(`name${i_coll}`);
        if(th.querySelector('div') == null){
            jsonObjectTHEAD.push({
                title: th.innerText,
                custom: false,
                textDefault: "standard"
            });
        } else {
            jsonObjectTHEAD.push({
                title: th.innerText,
                custom: true,
                htmlDefault: "<div class='personalizado' style='text-decoration: 'underline';'>Singularidade</div>"
            });
        }
        _editableTitle(th, configInternal, table);
    });


    table.querySelectorAll('tbody tr').forEach((tr, i_row)=>{
        let linha = [];
        tr.querySelectorAll('td').forEach((td, i_coll)=>{
            let tmp = {};
            if(jsonObjectTHEAD[i_coll].custom == false){
                tmp.text = td.innerText;
                linha.push(tmp);
            } else if(jsonObjectTHEAD[i_coll].custom == true){
                tmp.html = td.innerHTML.replaceAll("\"", "'");
                linha.push(tmp);
            } else if(jsonObjectTHEAD[i_coll].custom == undefined){
                window.alert('Tabela inválida! Não foi possível converter.');
            }
        });
        jsonObjectTBODY.push(linha);
    });
    
    fullObject.init  = true;
    fullObject.form  = jsonObjectFORM;
    fullObject.thead = jsonObjectTHEAD;
    fullObject.tbody = jsonObjectTBODY;

    if(jsonConverter){
        return JSON.stringify(fullObject);
    } else {
        return fullObject;
    }
}

function _tableConvert(table, configInternal,jsonConverter = true){
    let fullObject      = {};
    let jsonObjectFORM  = [];
    let jsonObjectTHEAD = [];
    let jsonObjectTBODY = [];
    let object = configInternal.table.object;
    configInternal.table.function = [];

    table.querySelectorAll('thead th').forEach((th, i_coll)=>{
        jsonObjectFORM.push(object.form[i_coll]);
        if(object.thead[i_coll].custom == false){
            jsonObjectTHEAD.push({
                title: th.innerText,
                custom: false,
                textDefault: object.thead[i_coll].textDefault || "Singularidade"
            });
        } else {
            jsonObjectTHEAD.push({
                title: th.innerText,
                custom: true,
                htmlDefault: object.thead[i_coll].htmlDefault || "<div class='personalizado' style='text-decoration: 'underline';'>Singularidade</div>"
            });
        }
    });


    table.querySelectorAll('tbody tr').forEach((tr, i_row)=>{
        let linha = [];
        tr.querySelectorAll('td').forEach((td, i_coll)=>{
            let tmp = {};
            if(jsonObjectTHEAD[i_coll].custom == false){
                tmp.text = td.innerText;
                linha.push(tmp);
            } else if(jsonObjectTHEAD[i_coll].custom == true){
                tmp.html = td.innerHTML.replaceAll("\"", "'");
                linha.push(tmp);
            } else if(jsonObjectTHEAD[i_coll].custom == undefined){
                window.alert('Tabela inválida! Não foi possível converter.');
            }
        });
        jsonObjectTBODY.push(linha);
    });
    
    fullObject.init  = true;
    fullObject.form  = jsonObjectFORM;
    fullObject.thead = jsonObjectTHEAD;
    fullObject.tbody = jsonObjectTBODY;

    if(jsonConverter){
        return JSON.stringify(fullObject);
    } else {
        return fullObject;
    }
}

function _convertEXCEL(table, type, filename, dl) {
    let wb = XLSX.utils.table_to_book(table, { sheet: "sheet1" });
    return dl ?
      XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
      XLSX.writeFile(wb, filename || ('MySheetName.' + (type || 'xlsx')));
}

function sortTableByColumn(table, column, asc = true) {
    const dirModifier = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    let rows = Array.from(table.querySelectorAll('tbody tr'));

    // Sort each row
    let sortedRows = rows.sort((a, b) => {
        let aColText = a.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();
        let bColText = b.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();

        return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
    });

    // Remove all existing TRs from the table
    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }

    // Re-add the newly sorted rows
    tBody.append(...sortedRows);

    // Remember how the column is currently sorted
    table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
    table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-asc", asc);
    table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-desc", !asc);
}

function _editableCell(newCell, editable) {
    if(editable.clickEditable){
        newCell.style.cursor = "pointer";
    }

    newCell.addEventListener('click', (ev)=>{
        if(editable.init){
            if(editable.clickEditable){
                if(ev.ctrlKey){
                    ev.target.classList.toggle('s-in-selected');
                } else {
                    ev.target.parentElement.parentElement.querySelectorAll('tbody td').forEach(el=>{
                        el.classList.remove('s-in-selected');
                    });

                    ev.target.style.cursor = 'auto';

                    if(ev.target.classList.contains('s-in-editing')){
                        
                    } else {
                        ev.target.setAttribute('contentEditable', true);
                        ev.target.setAttribute('s-data-table-old', ev.target.innerHTML);
                        ev.target.classList.add('s-in-editing');
                        ev.target.focus();
                    }
                }
            }
        }
    });

    newCell.addEventListener('blur', (ev)=>{
        if(editable.init){
            ev.target.style.cursor = 'pointer';
            ev.target.classList.remove('s-in-editing');
            ev.target.classList.remove('s-in-selected');
            ev.target.removeAttribute('contentEditable');
            if(editable.clickOutSave == false){
                ev.target.innerHTML = td.getAttribute('s-data-table-old');
            }
        }
    });
}

function _editableCellHTML(newCell, editable) {
    if(editable.clickEditable){
        newCell.style.cursor = "pointer";
    }

    newCell.addEventListener('dblclick', (ev)=>{
        if(editable.init){
            if(editable.clickEditable){
                ev.target.style.cursor = 'auto';

                if(ev.target.classList.contains('s-in-editing')){
                    
                } else {
                    ev.target.setAttribute('contentEditable', true);
                    ev.target.innerText = ev.target.innerHTML;
                    ev.target.classList.add('s-in-editing');
                    ev.target.focus();
                    if(editable.clickOutSave == false){
                        ev.target.setAttribute('s-data-table-old', ev.target.innerHTML);
                    }
                }
            }
        }
    });

    newCell.addEventListener('blur', (ev)=>{
        if(editable.init){
            ev.target.style.cursor = 'pointer';
            ev.target.classList.remove('s-in-editing');
            ev.target.removeAttribute('contentEditable');
            if(editable.clickOutSave == false){
                ev.target.innerHTML = td.getAttribute('s-data-table-old');
            } else {
                ev.target.innerHTML = ev.target.innerText;
            }
        }

        ev.target.querySelectorAll('*').forEach(element=>{
            element.addEventListener('blur', (ev)=>{
                if(editable.init){
                    ev.target.removeAttribute('contentEditable');
                    ev.target.classList.remove('s-in-editing');
                }
            });
        });
    });
}

function _editableTitle(newCell, configInternal, table) {
    let divTitle = document.createElement('div');
    let removeCollum = document.createElement('button');
    let managerCollum = document.createElement('button');

    removeCollum.innerHTML = svgIcons.removeTitle;
    managerCollum.innerHTML = svgIcons.gear;
    removeCollum.style.display = 'none';
    managerCollum.style.display = 'none';

    divTitle.classList.add('s-button-div-title');
    
    divTitle.append(removeCollum);
    divTitle.append(managerCollum);
    newCell.append(divTitle);

    newCell.addEventListener("mouseover", (ev)=>{
        removeCollum.style.display = 'block';
        managerCollum.style.display = 'block';
    });

    newCell.addEventListener("mouseout", (ev)=>{
        removeCollum.style.display = 'none';
        managerCollum.style.display = 'none';
    });

    removeCollum.addEventListener("click", (ev)=>{
        let cellIndexNumber = newCell.cellIndex;
        if(table.rows[0].cells.length == 1){
            
        } else {
            for(let c = 0; c < table.rows.length; c++){
                table.rows[c].deleteCell(cellIndexNumber);
            }
            configInternal.table.object.thead.splice(cellIndexNumber, 1);
            configInternal.table.object.form.splice(cellIndexNumber, 1);
        }
    });

    managerCollum.addEventListener("click", cell=>{
        newCell.classList.add('s-mode-configuration');
        let cm = configInternal.table.button.modal;
        document.querySelector(`.${cm.classModalContainer}`).classList.add('visible');
        document.querySelector(`.${cm.classButtonSaveTitle}`).style.display = 'block';
        document.querySelector(`.${cm.classButtonNewTitle}`).style.display = 'none';

        let modalInputTitle = document.querySelector(`.${cm.classInputTitle}`);
        let modalInputCustom = document.querySelector(`.${cm.classDivCustom} input[type='checkbox']`);
        let modalInputForm = document.querySelector(`.${cm.classDivForm} input[type='checkbox']`);
        let modalInputFormLabel = document.querySelector(`.${cm.classDivForm} label`);
        let modalInputFormDataLabel = document.querySelector(`.${cm.classDivForm} input[type='text']`);
        let modalInputTextDefault = document.querySelector(`.${cm.classInputTextDefault}`);

        modalInputTitle.value = configInternal.table.object.thead[newCell.cellIndex].title;
        
        if(configInternal.table.object.thead[newCell.cellIndex].custom){
            modalInputCustom.checked = true;
            modalInputTextDefault.value = configInternal.table.object.thead[newCell.cellIndex].htmlDefault;
        } else {
            modalInputCustom.checked = false;
            modalInputTextDefault.value = configInternal.table.object.thead[newCell.cellIndex].textDefault;
        }

        if(configInternal.table.object.form[newCell.cellIndex]){
            modalInputForm.checked = true;
            modalInputFormDataLabel.value = configInternal.table.object.form[newCell.cellIndex];
        } else {
            modalInputForm.checked = false;
            modalInputFormDataLabel.value = "";

        }

        if(modalInputForm.checked){
            if(modalInputCustom.checked){
                modalInputFormLabel.style.display = "block";
                modalInputFormDataLabel.style.display = "none";
            } else {
                modalInputFormLabel.style.display = "none";
                modalInputFormDataLabel.style.display = "block";
            }
        } else {
            modalInputFormLabel.style.display = "none";
            modalInputFormDataLabel.style.display = "none";
        }
    }); 
}

function _searchTable(buttonSearch, table, configInternal) {
    buttonSearch.toggleAttribute('s-data-table-btn-search');
    let jsonObjectTHEAD =  configInternal.table.object.thead;

    if(buttonSearch.hasAttribute('s-data-table-btn-search')){
        table.querySelectorAll('thead th').forEach((th, i_th) =>{
            if(jsonObjectTHEAD[i_th].custom == false){
                th.innerHTML = `<input class="s-table-search-input" type="input" placeholder="${th.innerText}"/>`;
            }
        });

        table.querySelectorAll('thead input').forEach((inputField) => {
            const tableRows = inputField.closest("table").querySelectorAll("tbody > tr");
            const headerCell = inputField.closest("th");
            const otherHeaderCells = headerCell.closest("tr").children;
            const columnIndex = Array.from(otherHeaderCells).indexOf(headerCell);
            const searchableCells = Array.from(tableRows).map((row) => row.querySelectorAll("td")[columnIndex]);
        
            inputField.addEventListener("input", () => {
            const searchQuery = inputField.value.toLowerCase();
        
            for (const tableCell of searchableCells) {
                const row = tableCell.closest("tr");
                const value = tableCell.textContent.toLowerCase().replace(",", "");
        
                row.style.visibility = null;
        
                if (value.search(searchQuery) === -1) {
                row.style.visibility = "collapse";
                }
            }
            });
        });
    } else {
        table.querySelector('thead').querySelectorAll('th').forEach((th, i_th) =>{
            if(jsonObjectTHEAD[i_th].custom == false){
                th.innerHTML = th.firstChild.getAttribute("placeholder");
                _editableTitle(th, configInternal, table);
            }
        });
    }
}

function _loadTable(configInternal) {
    let jsonObject = configInternal.table.object;
                
    let thead = jsonObject.thead; // Array of objects
    let tbody = jsonObject.tbody; // Array of Array ROWs

    let html_table = document.createElement('table');
    let html_thead = document.createElement('thead');
    let html_tbody = document.createElement('tbody');
    html_table.appendChild(html_thead);
    html_table.appendChild(html_tbody);

    let newRowHeader = html_thead.insertRow(0);

    thead.forEach((objColl, i_coll)=>{
        let newCellHeader = newRowHeader.insertCell(i_coll);
        newCellHeader.outerHTML = `<th>${objColl.title}</th>`;
        _editableTitle(html_thead.rows[0].cells.item(i_coll), configInternal, html_table);
    });
    
    tbody.forEach((row, i_row)=>{
        let newRowBody  = html_tbody.insertRow(i_row);
        row.forEach((coll, i_coll)=>{
            let newCellBody = newRowBody.insertCell(i_coll);

            if(thead[i_coll].custom == false){
                newCellBody.innerText = coll.text;
                _editableCell(newCellBody, configInternal.table.editable);
            } else if(thead[i_coll].custom == true){
                newCellBody.innerHTML = coll.html;
                _editableCellHTML(newCellBody, configInternal.table.editable);
            }
        });
    });
    return html_table;
}

function _createTitle(table, configInternal) {
    let path_createTitle = configInternal.table.button.createTitle;
    let rowsLength = table.rows.length - 1;
    let cellsLength = table.rows[0].cells.length;

    let title = table.rows[0].insertCell(cellsLength);
    title.outerHTML = `<th>${path_createTitle.thead.textTitle}</th>`;
    _editableTitle(table.rows[0].cells.item(cellsLength), configInternal, table);

    for(let c = 0; c < rowsLength; c++){
        let newRow = table.rows[c + 1].insertCell(cellsLength);
        if(path_createTitle.thead.custom == true){
            table.rows[c + 1].cells.item(cellsLength).innerHTML = path_createTitle.thead.htmlDefault;
            _editableCellHTML(newRow, configInternal.table.editable);
        } else {
            table.rows[c + 1].cells.item(cellsLength).innerText = path_createTitle.thead.textDefault;
            _editableCell(newRow, configInternal.table.editable);
        }
    } // End FOR


    if(configInternal.table.object.init){
        if(path_createTitle.thead.custom == true){
            configInternal.table.object.thead.push({
                title: path_createTitle.thead.textTitle,
                custom: path_createTitle.thead.custom,
                htmlDefault: path_createTitle.thead.htmlDefault
            });
        } else {
            configInternal.table.object.thead.push({
                title: path_createTitle.thead.textTitle,
                custom: path_createTitle.thead.custom,
                textDefault: path_createTitle.thead.textDefault
            });
        }
    }
}

function _createDocument(table, configInternal) {
    /* Utiliza como referência o Objeto THEAD para fazer a inserção de colunas na linha criada. */
    let jsonObject = configInternal.table.object;
    let rowsLength = table.rows.length - 1;
    let newRow = table.querySelector('tbody').insertRow(rowsLength);

    newRow.addEventListener('click', ev=>{
        if(ev.altKey){
            newRow.classList.toggle('s-table-rowselected');
        } else if(ev.ctrlKey){
            
        } else {
            newRow.classList.remove('s-table-rowselected');
        }
    });
    
    let rowObject = [];
    jsonObject.thead.forEach((coll, i_coll)=>{
        let newCellBody = newRow.insertCell(i_coll);
        
        if(coll.custom == false){
            newCellBody.innerText = coll.textDefault;
            rowObject.push({
                text: newCellBody.innerText,
            });
            _editableCell(newCellBody, configInternal.table.editable);
        } else if(coll.custom == true){
            newCellBody.innerHTML = coll.htmlDefault;
            rowObject.push({
                html: newCellBody.innerHTML,
            });
            _editableCellHTML(newCellBody, configInternal.table.editable);
        } else if(coll.custom == undefined){
            window.alert('Erro ao criar nova linha.');
        }
    });

    configInternal.table.object.tbody.push(rowObject); // Adiciona ao Object uma linha conforme a tabela.

    newRow.querySelectorAll('td').forEach((cell, i_coll)=>{
        if(configInternal.table.function.all[configInternal.table.function.name[i_coll]]){
            configInternal.table.function.all[configInternal.table.function.name[i_coll]](cell, newRow.querySelectorAll('td'));
        }
    });
}

function _downloadFile (name, type, data) {
    if (data != null && navigator.msSaveBlob)
        return navigator.msSaveBlob(new Blob([data], { type: type }), name);

    const a = document.createElement('a')
    let url = window.URL.createObjectURL(new Blob([data], {type: type}));

    a.href = url
    a.download = name
    document.body.appendChild(a)
    a.click();
    setTimeout(function(){ 
        window.URL.revokeObjectURL(url);
        a.remove();
    }, 500);  
}


// ######################################################################################### Início da Classe
export default class S_TableEditor{
    constructor(table, configExternal = configInternalStandard){
        
        this.configInternal    = configExternal;
        this.table             = table;
        this.elementUpdateTable;
        
        let path_buttonMenu    = this.configInternal.table.button;
        let path_excel         = this.configInternal.table.button.excel;

        // Inserindo DIV-MENU-CONTAINER antes da tabela
        let divMenuContainer   = document.createElement('div');
        divMenuContainer.classList.add('s-table-div-menu-container');
        this.table.parentElement.insertBefore(divMenuContainer, this.table.parentElement.firstChild);

        let modalContainer           = document.createElement('div');
        let modalFrame               = document.createElement('div');
        let modalInputTitle          = document.createElement('input');
        let modalDivCustom           = document.createElement('div');
        let modalInputCustom         = document.createElement('input');
        let modalInputCustomLabel    = document.createElement('label');
        let modalDivForm             = document.createElement('div');
        let modalInputForm           = document.createElement('input');
        let modalInputFormLabel      = document.createElement('label');
        let modalInputFormDataLabel  = document.createElement('input');
        let modalInputTextDefault    = document.createElement('input');
        let modalButtonSaveTable     = document.createElement('button');
        let modalButtonNewTitle      = document.createElement('button');
        let modalButtonClose         = document.createElement('button');

        let scriptElement = document.createElement('script');
        document.querySelector('head').appendChild(scriptElement);


        if(this.configInternal.table.object.init == undefined){
            this.configInternal.table.object = _tableConvertInitial(this.table, this.configInternal,false);
            

            this.table.querySelectorAll('tbody tr').forEach((row, i_row)=>{
                row.querySelectorAll('td').forEach((coll, i_coll)=>{
                    if(this.configInternal.table.object.thead[i_coll].custom == false){
                        _editableCell(coll, this.configInternal.table.editable);
                    }
                });
            });
        }

        if(this.configInternal.table.button.createTitle.initModal){
            let configModal = this.configInternal.table.button.modal;

            // INPUT CONFIGS
            modalContainer.classList.add(configModal.classModalContainer);
            modalFrame.classList.add(configModal.classModalFrame);
            modalInputTitle.classList.add(configModal.classInputTitle);
            // INPUT CUSTOM
            modalDivCustom.classList.add(configModal.classDivCustom);
            modalInputCustom.type = 'checkbox';
            modalInputCustom.id = 's-modal-input-id-custom';
            modalInputCustomLabel.for = 's-modal-input-id-custom';
            // INPUT FORM
            modalDivForm.classList.add(configModal.classDivForm);
            modalInputForm.type = 'checkbox';
            modalInputForm.id = 's-modal-input-id-form';
            modalInputFormLabel.for = 's-modal-input-id-form';
            modalInputForm.style.display = "block";
            modalInputFormLabel.style.display = "none";
            modalInputFormDataLabel.style.display = "none";
            modalInputFormDataLabel.type = "text";
            modalInputTextDefault.classList.add(configModal.classInputTextDefault);
            // BUTTONS
            modalButtonSaveTable.classList.add(configModal.classButtonSaveTitle);
            modalButtonSaveTable.style.display = 'none';
            modalButtonNewTitle.classList.add(configModal.classButtonNewTitle);
            modalButtonNewTitle.style.display = 'block';
            modalButtonClose.classList.add(configModal.classButtonClose);

            modalInputTitle.placeholder           = "Título";
            modalInputCustomLabel.innerText       = "Celula HTML";
            modalInputFormLabel.innerText         = "FormData HTML";
            modalInputFormDataLabel.placeholder   = "Name FormData";
            modalInputTextDefault.placeholder     = "Texto Padrão";
            modalButtonSaveTable.innerHTML        = "Salvar";
            modalButtonNewTitle.innerHTML         = "Criar";
            modalButtonClose.innerHTML            = "Sair";
            
            // Anexando itens no menu.
            modalDivCustom.appendChild(modalInputCustom);
            modalDivCustom.appendChild(modalInputCustomLabel);
            modalDivForm.appendChild(modalInputForm);
            modalDivForm.appendChild(modalInputFormLabel);
            modalDivForm.appendChild(modalInputFormDataLabel);
            modalFrame.appendChild(modalInputTitle);
            modalFrame.appendChild(modalDivCustom);
            modalFrame.appendChild(modalDivForm);
            modalFrame.appendChild(modalInputTextDefault);
            modalFrame.appendChild(modalButtonNewTitle);
            modalFrame.appendChild(modalButtonSaveTable);
            modalFrame.appendChild(modalButtonClose);
            modalContainer.appendChild(modalFrame);
            divMenuContainer.appendChild(modalContainer);

            modalButtonClose.addEventListener("click", (ev)=>{
                modalContainer.classList.remove('visible');
                let cell = document.querySelector('.s-mode-configuration');
                cell.classList.remove('s-mode-configuration');
            });

            modalButtonNewTitle.addEventListener("click", (ev)=>{
                if(modalInputCustom.checked){
                    if(modalInputForm.checked){
                        this.configInternal.table.object.form.push("html");
                    } else {
                        this.configInternal.table.object.form.push(false);
                    }
                    this.configInternal.table.button.createTitle.thead.textTitle   = 
                    modalInputTitle.value;
                    this.configInternal.table.button.createTitle.thead.custom      = 
                    modalInputCustom.checked;
                    this.configInternal.table.button.createTitle.thead.htmlDefault =
                    modalInputTextDefault.value;
                    _createTitle(this.table, this.configInternal);
                } else {
                    if(modalInputForm.checked){
                        this.configInternal.table.object.form.push(modalInputFormDataLabel.value);
                    } else {
                        this.configInternal.table.object.form.push(false);
                    }
                    this.configInternal.table.button.createTitle.thead.textTitle   = 
                    modalInputTitle.value;
                    this.configInternal.table.button.createTitle.thead.custom      = 
                    modalInputCustom.checked;
                    this.configInternal.table.button.createTitle.thead.textDefault =
                    modalInputTextDefault.value;
                    _createTitle(this.table, this.configInternal);
                }


            });

            modalButtonSaveTable.addEventListener("click", (ev)=>{
                let cell = document.querySelector('.s-mode-configuration');
                let cellIndex = cell.cellIndex;

                if(modalInputCustom.checked){
                    if(modalInputForm.checked){
                        this.configInternal.table.object.form[cellIndex] = "html";
                    } else {
                        this.configInternal.table.object.form[cellIndex] = false;
                    }
                    this.configInternal.table.object.thead[cellIndex].title=modalInputTitle.value;
                    this.configInternal.table.object.thead[cellIndex].custom=modalInputCustom.checked;
                    this.configInternal.table.object.thead[cellIndex].htmlDefault=modalInputTextDefault.value;
                } else {
                    if(modalInputForm.checked){
                        this.configInternal.table.object.form[cellIndex] = modalInputFormDataLabel.value;
                    } else {
                        this.configInternal.table.object.form[cellIndex] = false;
                    }
                    this.configInternal.table.object.thead[cellIndex].title=modalInputTitle.value;
                    this.configInternal.table.object.thead[cellIndex].custom=modalInputCustom.checked;
                    this.configInternal.table.object.thead[cellIndex].textDefault=modalInputTextDefault.value;
                }

                this.table.rows[0].cells.item(cellIndex).innerText =
                    this.configInternal.table.object.thead[cellIndex].title;
                
                cell.classList.remove('s-mode-configuration');
                modalContainer.classList.remove('visible');
                _editableTitle(cell, this.configInternal, this.table);
            })

            modalInputForm.addEventListener('change', el=>{
                if(el.target.checked){
                    if(modalInputCustom.checked){
                        modalInputFormLabel.style.display = "block";
                        modalInputFormDataLabel.style.display = "none";
                    } else {
                        modalInputFormLabel.style.display = "none";
                        modalInputFormDataLabel.style.display = "block";
                    }
                } else {
                    modalInputFormLabel.style.display = "none";
                    modalInputFormDataLabel.style.display = "none";
                }
            });
        } // END Config Button MODAL
        
        if(path_excel.init){
            if(path_excel.element.length > 0){
                path_excel.element.forEach(element=>{
                    element.addEventListener('click', (ev)=>{
                        if(path_excel.init){
                            this.downloadEXCEL(this.table);
                        }
                    });
                })
            }
        } // END Config Button EXCEL

        if(this.configInternal.table.button.loadTable.init){
            let path_table = this.configInternal.table;
            let realButtonLoadFile = document.createElement('input');
            realButtonLoadFile.type = 'file';
            realButtonLoadFile.style.display = 'none';
            divMenuContainer.appendChild(realButtonLoadFile);

            if(this.configInternal.table.button.loadTable.element.length > 0){
                this.configInternal.table.button.loadTable.element.forEach(element=>{
                    element.addEventListener("click", (ev)=>{
                        if(this.configInternal.table.button.loadTable.init){
                            realButtonLoadFile.click();
                        }
                    });
                });
            }

            realButtonLoadFile.addEventListener("change", (ev)=>{
                if (realButtonLoadFile.files.length > 0) {
                    let reader = new FileReader();
                    
                    reader.addEventListener('load', function() {
                        path_table.object     = JSON.parse(reader.result);
                        path_table.objectJson = reader.result;
                    });

                    reader.readAsText(realButtonLoadFile.files[0]);

                    setTimeout(()=>{
                        if(this.configInternal.table.object.init){
                            let newTable = _loadTable(this.configInternal);
                            this.table.parentNode.replaceChild(newTable, this.table);
                            this.table = newTable;

                            this.table.querySelectorAll('tbody tr').forEach(element=>{
                                element.addEventListener('click', ev=>{
                                    if(ev.altKey){
                                        element.classList.toggle('s-table-rowselected');
                                    } else if(ev.ctrlKey){
                                        
                                    } else {
                                        element.classList.remove('s-table-rowselected');
                                    }
                                });
                            });
                        } else {
                            window.alert('Falha ao realizar o carregamento do arquivo.');
                        }
                    }, 3000);
                } // END IF VERIFY FILE
            }); // END addEventListener Change
        } // END Config Button LOAD TABLE

        if(this.configInternal.table.button.loadFunction.init){
            let nameTable = this.configInternal.table.name;
            let realButtonLoadFile = document.createElement('input');
            realButtonLoadFile.type = 'file';
            realButtonLoadFile.style.display = 'none';
            divMenuContainer.appendChild(realButtonLoadFile);

            scriptElement.type = 'text/javascript';
            // scriptElement.onreadystatechange = callback;
            // scriptElement.onload = callback;

            if(this.configInternal.table.button.loadFunction.element.length > 0){
                this.configInternal.table.button.loadFunction.element.forEach(element=>{
                    element.addEventListener("click", (ev)=>{
                        if(this.configInternal.table.button.loadFunction.init){
                            realButtonLoadFile.click();
                        }
                    });
                });
            } // Configura botão Load Function

            realButtonLoadFile.addEventListener("change", (ev)=>{
                let reader = new FileReader();
                if (realButtonLoadFile.files.length > 0) {
                    reader.addEventListener('load', function() {
                        let tmpHTML = `let s_functions={`;
                        tmpHTML += reader.result;
                        tmpHTML += `}
                        
                        ${nameTable}.configInternal.table.function.name = Object.keys(s_functions);
                        ${nameTable}.configInternal.table.function.all = s_functions;

                        ${nameTable}.configInternal.table.function.name.forEach((fun_name, i_fun)=>{
                            if(s_functions[fun_name]){
                                ${nameTable}.table.querySelectorAll('tbody tr').forEach((row, i_row)=>{
                                    let tds = row.querySelectorAll('td');
                                    s_functions[fun_name](tds[i_fun], tds);
                                });
                            }
                        });
                        `;
                        scriptElement.innerHTML = tmpHTML;
                    });
                    reader.readAsText(realButtonLoadFile.files[0]);
                } // END IF VERIFY FILE
            }); // END addEventListener Change
        } // END Config Button LOAD FUNCTION
        
        if(this.configInternal.table.button.saveTable.init){
            if(this.configInternal.table.button.saveTable.element.length > 0){
                this.configInternal.table.button.saveTable.element.forEach(element=>{
                    element.addEventListener('click', (ev)=>{
                        if(this.configInternal.table.button.saveTable.init){
                            let jsonText = _tableConvert(this.table, this.configInternal,true);
                            _downloadFile(
                                this.configInternal.table.button.saveTable.nameFile,
                                "data:application/json",
                                new Blob([jsonText],{type:""}));
                        }
                    });
                })
            }
        } // END Config Button SAVE TABLE
        
        if(this.configInternal.table.button.sortTable.init){
            if(this.configInternal.table.button.sortTable.element.length > 0){
                this.configInternal.table.button.sortTable.element.forEach(element=>{
                    element.addEventListener('click', (ev)=>{
                        element.toggleAttribute('s-data-table-btn-sort');
                        this.table.querySelectorAll("thead th").forEach((th, i_th) => {
                            if(this.configInternal.table.object.thead[i_th].custom == false){
                                th.addEventListener("click", () => {
                                    if(path_buttonMenu.sortTable.init){
                                        if(element.hasAttribute('s-data-table-btn-sort')){
                                            const headerIndex = Array.prototype.indexOf.call(th.parentElement.children, th);
                                            const currentIsAscending = th.classList.contains("th-sort-asc");
                                            sortTableByColumn(this.table, headerIndex, !currentIsAscending);
                                        }
                                    }
                                });
                            }                            
                        });
                    });
                })
            }
        } // END Config Button SORT

        if(this.configInternal.table.button.searchTable.init){
            if(this.configInternal.table.button.searchTable.element.length > 0){
                this.configInternal.table.button.searchTable.element.forEach((element)=>{
                    element.addEventListener("click", ev=>{
                        if(this.configInternal.table.button.searchTable.init){
                            _searchTable(ev.target, this.table, this.configInternal);
                        }
                    })
                })
            }
        } // END Config Button SEARCH
    
        if(this.configInternal.table.button.createDocument.init){
            if(this.configInternal.table.button.createDocument.element.length > 0){
                this.configInternal.table.button.createDocument.element.forEach(element=>{
                    element.addEventListener("click", ()=>{
                        if(this.configInternal.table.button.createDocument.init){
                            _createDocument(this.table, this.configInternal);
                        } 
                    });
                }); // END addEventListener Click
            }
        } // END Config Button CREATE DOCUMENTS

        if(this.configInternal.table.button.createTitle.init){
            if(this.configInternal.table.button.createTitle.element.length > 0){
                this.configInternal.table.button.createTitle.element.forEach(element=>{
                    element.addEventListener("click", ()=>{
                        if(this.configInternal.table.button.createTitle.init){
                            modalInputForm.style.display = "block";
                            modalInputFormLabel.style.display = "none";
                            modalInputFormDataLabel.style.display = "none";
                            modalButtonSaveTable.style.display = 'none';
                            modalButtonNewTitle.style.display = 'block';
                            modalContainer.classList.add('visible');
                            modalContainer.classList.add('s-mode-configuration');
                        }
                    });
                });
            }
        } // END Config Button CREATE TITLE

        if(this.configInternal.table.form.init){
            let objForm = this.configInternal.table.form;


            if(objForm.element.length > 0){
                objForm.element.forEach((element)=>{
                    element.addEventListener("click", ev=>{
                        let configForm  = this.configInternal.table.object.form;
                        document.querySelectorAll('.s-table-rowselected').forEach(trSelected=>{
                            let dataRequest = {};
                            if(trSelected != null){
                                let tds = trSelected.querySelectorAll('td');
                                
                                configForm.forEach((el_form, i_form)=>{
                                    if(el_form != false){
                                        if(el_form == "html"){
                                            if(tds[i_form].querySelector('select')){
                                                let name = tds[i_form].querySelector('select').name;
                                                let value = tds[i_form].querySelector('select').value;
                                                dataRequest[name] = value;
                                            } else if(tds[i_form].querySelector("input[type='text']")){
                                                let name = tds[i_form].querySelector('input').name;
                                                let value = tds[i_form].querySelector('input').value;
                                                dataRequest[name] = value;
                                            } else if(tds[i_form].querySelector("input[type='radio']")){
                                                tds[i_form].querySelectorAll("input[type='radio']").forEach(el =>{
                                                    if(el.checked) {
                                                        dataRequest[el.name] = el.value;
                                                    }
                                                });
                                            } else if(tds[i_form].querySelector("input[type='checkbox']")){
                                                tds[i_form].querySelectorAll("input[type='checkbox']").forEach(el =>{
                                                    if(el.checked) {
                                                        dataRequest[el.name] = el.value;
                                                    }
                                                });
                                            }
                                        } else {
                                            dataRequest[el_form] = tds[i_form].innerText;
                                        }
                                    }
                                });
                            }
                            this.configInternal.table.form.formData = [];
                            this.configInternal.table.form.formData.push(dataRequest);
                        });
                    });
                });
            }
        } // END Config Button FORM TABLE
        
        if(this.configInternal.table.button.removeRow.init){
            let objUpdateTable = this.configInternal.table.button.removeRow;
            if(objUpdateTable.element.length > 0){
                objUpdateTable.element.forEach((element)=>{
                    element.addEventListener("click", ev=>{
                        document.querySelectorAll('.s-table-rowselected').forEach(row=>{
                            row.remove();
                        });
                    });
                });
            }
        } // END Config Button REMOVE ROW TABLE
    }

    downloadJSON(table){
        let jsonText = _convertJSON(table, true);
        _downloadFile("table.json", "data:application/json", new Blob([jsonText],{type:""}));
    }

    downloadEXCEL(table){
        _convertEXCEL(table, 'xlsx');
    }

    redirectJSON(table, redirectElement){
        let jsonText = _convertJSON(table, true);
        redirectElement.innerHTML = JSON.stringify(jsonText, null, 4);
    }

    updateTable(){
        let newTable = _loadTable(this.configInternal); // Transforma configInternal em nova tabela
        this.table.parentNode.replaceChild(newTable, this.table);
        this.table = newTable;

        this.table.querySelectorAll('tbody tr').forEach(element=>{
            element.addEventListener('click', ev=>{
                if(ev.altKey){
                    element.classList.toggle('s-table-rowselected');
                } else if(ev.ctrlKey){
                    
                } else {
                    element.classList.remove('s-table-rowselected');
                }
            });
        });
    }

    addCallFunctionBlur(cell, collIndex, tds){
        cell.addEventListener("blur", ()=>{
            let functionName = this.configInternal.table.function.name[collIndex];
            this.configInternal.table.function.all[functionName](tds[collIndex], tds);
        });
    }

    addSufixo(cell, sufixo){
        cell.addEventListener("click", ()=>{
            if(this.configInternal.table.editable.init){
                let tmpText = cell.innerText;
                if(tmpText.search(sufixo) != -1){
                    cell.innerText = tmpText.slice(0, tmpText.search(sufixo));
                }
            }
        });

        cell.addEventListener("blur", ()=>{
            cell.innerHTML = `${cell.innerText}${sufixo}`;
        });
    }

    addPrefixo(cell, prefixo){
        cell.addEventListener("click", ()=>{
            if(this.configInternal.table.editable.init){
                let tmpText = cell.innerText;
                if(tmpText.search(prefixo) != -1){
                    cell.innerText = tmpText.slice(tmpText.search(prefixo) + 1);
                }
            }
        });

        cell.addEventListener("blur", ()=>{
            cell.innerHTML = `${prefixo}${cell.innerText}`;
        });
    }

    getValueOfSufixo(text, sufixo){
        if(text.search(sufixo) != -1){
            return text.slice(0, text.search("mm"));
        }
    }

    getValueOfPrefixo(text, prefixo){
        if(text.search(prefixo) != -1){
            return text.slice(text.search("mm"));
        }
    }

    changeOptionSelectionHTML(cell, option, optionDefault){
        let tmpTextHTML = "";
        Object.entries(option).forEach((opt, i_opt)=>{
            tmpDefault += `<option value='${opt[1]}'>${opt[0]}</option>`;
        });
        tmpTextHTML += `<option value='${optionDefault.value}' hidden selected>${optionDefault.name}</option>`;

        cell.querySelector('select').innerHTML = tmpTextHTML;
    }
}