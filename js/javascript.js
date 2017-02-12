var mass = [[1,2,3],
            [4,5,6],
			[7,8,9]];

var sumStr_1 = 0;
var sumCol_1 = 0;
var sumDiog_1 = 0;
var sum = 0;
var sumTr = 0;

//сумма строки
for(var i=0;i<mass[0].length; i++){
	sumStr_1 += mass[0][i];
}

//сумма столбца
for(var i=0;i<mass.length; i++){
	sumCol_1 += mass[i][0];
}

//сумма диоганали
for(var i=0;i<mass.length; i++){
	sumDiog_1 +=mass[i][i];
    }

//общая сумма
for(var j=0;j<mass.length;j++){
	for(var i=0;i<mass[j].length;i++){
		sum += mass[j][i];
	}
}	
	
//сумма треугольника
for(var j=0;j<mass.length;j++){
	for(var i=0;i<=j;i++){
		sumTr += mass[j][i];
		
	}
}	


console.log("sumStr1=",sumStr_1);
console.log("col_1=",sumCol_1);
console.log("sumDiog_1=",sumDiog_1);
console.log("sum=",sum);
console.log("sumTr=",sumTr);

var mas2 = [[1,2,3],
            [4,5,6],
            [7,8,9]];

/*for(var j=0;j<mass.length;j++){
	for(var i=0;i<mas2[j].length;i++){
      mas2[j][i] = +prompt("Enter number", mas2[j][i]);
		
	}
}*/	

console.log(mas2[0][0],mas2[0][1], mas2[0][2]);
console.log(mas2[1][0],mas2[1][1], mas2[1][2]);
console.log(mas2[2][0],mas2[2][1], mas2[2][2]);

console.log("------------");

for(var i=0;i<mass.length;i++){
	console.log(mas2[i][0],mas2[i][1], mas2[i][2]);
}
	
