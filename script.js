
//test table 1
let data1 = document.getElementById('table1');
let chart1 = document.createElement('canvas');
chart1.setAttribute("id","chartTable1");
data1.insertAdjacentElement('beforebegin',chart1);

  
let trElems = [...data1.querySelectorAll('tbody tr')];

let labels = [...trElems[0].querySelectorAll('th')];

let dataTr = trElems.slice(1,trElems.length);




const data = {
    labels :[],
    datasets:[]
};

const config = {
    type: 'line',
    data: data,
    options:{
        scales:{
            y:{
                beginAtzero: true
            }
        }
    },
};

data.labels = labels.map(value => value.innerText).filter(value => value !="");



trElems.forEach(trElem => {
    let tdElems =  [...trElem.querySelectorAll('td')];
    
    let datas = tdElems.map(value => value.innerText === ":" ? 0 : value.innerText);
    
    

    data.datasets.push({
        label: datas[0],
        data: datas.slice(1,datas.length).map(value => value.toString().replace(",",".")),
        backgroundColor: `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`,
        borderColor: `rgb(${randomColor()},${randomColor()}, ${randomColor()})`,
        borderWidth: 1,
        maxBarThickness : 5
        
    })
})

let chartTable1 = new Chart(
    document.getElementById('chartTable1'),
    config
);

function randomColor() {
    return Math.floor(Math.random() * 256);
}


// ajax ligne 615

// Dom table 1 802
// Dom table 2 1471