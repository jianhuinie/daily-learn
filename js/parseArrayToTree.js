const list = [
	{id: 6},
	{id: 2, children: [5]},
	{id: 13},
	{id: 5, children: [10, 11]},
	{id: 1, children: [2, 3, 4]},
	{id: 10},
	{id: 8, children: [13]},
	{id: 4, children: [8, 9]},
	{id: 9},
	{id: 3, children: [6, 7]},
	{id: 11, children: [14]},
	{id: 14},
	{id: 7, children: [12]},
	{id: 12}
];


function findParentId(childId, sourceArr) {
    return sourceArr.filter((item) => item.children && item.children.includes(childId)).map((item) => item.id).join('');
}

function parseArrToTree(arr) {
    // 找到所有叶子结点
    const leafeNodeList = arr.filter((item) => !item.children).map((item) => item.id);
    const len = leafeNodeList.length;
    const resultArr = [];

    for(let i = 0; i < len; i++) {
        let tempArr = [];
        let curId = leafeNodeList[i];
        tempArr.unshift(curId);

        let parentId = findParentId(curId, arr);

        while(parentId !== '') {
            tempArr.unshift(+parentId);
            parentId = findParentId(+parentId, arr);
        }

        resultArr.push(tempArr);


    }

    return resultArr;
}

console.log(parseArrToTree(list));