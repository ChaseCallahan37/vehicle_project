let app = document.getElementById("root");

let cars = [
    {
        make: "Toyota",
        model: "Tacoma",
        year: "2016"
    },
    {
        make: "toyota",
        model:"Corolla",
        year:"2010"

    }
];

function handleOnLoad(){
    render();
}

    function render(){
        app.innerHTML = "";
        app.appendChild(makeTable());
        app.appendChild(makeForm());
    }
function makeTable(){
    let table = document.createElement("table");
    table.className = "table";
    let thead = document.createElement("thead");
    table.appendChild(thead)

    let tr = document.createElement("tr");
    thead.appendChild(tr);

    let th1 = document.createElement("th");
    th1.innerHTML = "Make";
    tr.appendChild(th1);

    let th2 = document.createElement("th");
    th2.innerHTML = "Model";
    tr.appendChild(th2);

    let th3 = document.createElement("th");
    th3.innerHTML = "Year";
    tr.appendChild(th3);

    table.appendChild(makeBody());

    return table
}

function makeBody(){
    let tbody = document.createElement("tbody");
    cars.forEach(function(car){
        let tr = document.createElement("tr");

        let td1 = document.createElement("th");
        td1.innerHTML = car.make;
        tr.appendChild(td1);
        
        let td2 = document.createElement("th");
        td2.innerHTML = car.model;
        tr.appendChild(td2);

        let td3 = document.createElement("th");
        td3.innerHTML = car.year;
        tr.appendChild(td3);
        tbody.appendChild(tr)
    })
    return tbody 
}

function makeForm(){
    let form = document.createElement("form")

    let label = document.createElement("label")
    label.innerHTML = "Make";
    form.appendChild(label);

    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("name", "Make");
    form.appendChild(input);

    let label2 = document.createElement("label");
    label2.innerHTML = "Model";
    form.appendChild(label2);
  
    let input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    input2.setAttribute("name", "model");
    form.appendChild(input2);
  
    let label3 = document.createElement("label");
    label3.innerHTML = "Year";
    form.appendChild(label3);
  
    let input3 = document.createElement("input");
    input3.setAttribute("type", "text");
    input3.setAttribute("name", "year");
    form.appendChild(input3);
  
    let button = document.createElement("button");
    button.setAttribute("type", "submit");
    button.innerHTML = "Submit";
    form.appendChild(button);
    form.addEventListener("submit", function(e){
        e.preventDefault();
        let make = e.target.Make.value;
        let model = e.target.model.value;
        let year = e.target.year.value;
        addCar(make,model,year);
    })
    return form;

}

function addCar(make,model,year){
    cars.push({
        make,
        model,
        year: year
    })
    render();
}


handleOnLoad();