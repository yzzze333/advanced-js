const data = [
    {id: 1, name:'Вася'},
    {id: 2, name:'Петя'},
    {id: 1, name:'Вася'},
];


const ids = new Set(data.map(x => x.id));
const uniqueData = [];
for (const id of ids) {
    const name = data.find(x => x.id === id).name;
    uniqueData.push({id,name});
};

console.log(uniqueData)