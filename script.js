
//test chart
// var ctx = document.getElementById('myChart').getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: ['2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012'],
//         datasets: [
//             {
//             label: 'Belgium',
//             data: [1012.8, 1007.8, 1013.7, 999.4, 1022.8, 1034.4, 1043.6, 1067.3, 1072.0, 1111.0, 1073.8],
//             backgroundColor: [
//                 'red',
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//             ],
//             borderWidth: 2,
//         },
//         {
//             label: 'France',
//             data: [4113.9, 3974.7, 3825.4, 3775.8, 3725.6, 3589.3, 3558.3, 3521.3, 0, 0, 0],
//             backgroundColor: [
//                 'rgba(54, 162, 235, 0.2)',
//             ],
//             borderColor: [
//                 'rgba(54, 162, 235, 1)',
//             ],
//             borderWidth: 2,
//         }
//     ]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });

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


// var table = document.getElementById('table1');
// var json = []; 
// var headers =[];
// for (var i = 0; i < table.rows[0].cells.length; i++) {
//   headers[i] = table.rows[0].cells[i].innerHTML;
// }


// for (var i = 1; i < table.rows; i++) {
//   var tableRow = table.rows[i];
//   var rowData = {};
//   for (var j = 0; j < tableRow.cells.length; j++) {
//     rowData[headers[j]] = tableRow.cells[j].innerHTML;
//   }

//   json.push(rowData);
// }

// console.log(json);





// ajax ligne 617

// Dom table 1 802
// Dom table 2 1471