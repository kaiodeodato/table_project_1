var DOM_lista = document.getElementById('body_table');

var lista_tabela = [];
var lista_tabela_code = [];
var lista = [];
function table_cell(name,date,amount) {
    this.name = name;
    this.date = date;
    this.amount = amount;
    this.code = `<tr>
	                <td>${this.name}</td>
	                <td>${this.date}</td>
	                <td>$${this.amount}</td>
	                <td id = 'botao_espaco'>
		                <button id = 'botao' onclick ="deletar('${this.name}')">x</button>
	                </td>
                </tr>`
}
document.addEventListener('keydown',verificar)

function verificar(e){
    switch(e.key){
        case 'Enter':
            add();
            break;
    }
}

function add(){

        let namevar = document.getElementById('input_name').value
        let date_var = document.getElementById('input_date').value
        let amount_var = document.getElementById('input_amount').value


        let cell = new table_cell(namevar,date_var,amount_var);
        lista_tabela.push(cell);

        DOM_lista = document.getElementById('body_table');

        lista_tabela_code = lista_tabela.map(item => item.code)

        DOM_lista.innerHTML = lista_tabela_code.join('')

        document.getElementById('input_name').value = ''
        document.getElementById('input_date').value = ''
        document.getElementById('input_amount').value = ''
        
}

function deletar(nome){

    for(let j = 0; j < lista_tabela.length; j++){
        if(lista_tabela[j].name != nome){
             lista.push(lista_tabela[j])
        }
    }
    lista_tabela = [...lista]
    lista = []

    DOM_lista = document.getElementById('body_table');

    lista_tabela_code = lista_tabela.map(item => item.code)

    DOM_lista.innerHTML = lista_tabela_code.join('')
}