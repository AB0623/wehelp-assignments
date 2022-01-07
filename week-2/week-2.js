//要求一
function calculate(min, max){
    let sum = 0
    for(var x = min; x <= max; x++){
        sum = sum + x;
    }
    console.log(sum);
}
calculate(1, 3);
calculate(4, 8);

//要求二
function avg(data){
    n1 = (data.count);
    let sum = 0;
    for(let i = 0; i < data.employees.length; i++){
        sum += (data.employees[i].salary);
    }
    n2 = (sum);
    n3 = n2 /= n1;
    console.log(n3);
}

avg({
    "count":3,
    "employees":[
        {
            "name":"John",
            "salary":30000
        },
        {
            "name":"Bob",
            "salary":60000
        },
        {
            "name":"Jenny",
            "salary":50000
        }
    ]
})

//要求三
function maxProduct(nums){
    let array03 = [];
    for(let i = 0; i < nums.length-1; i++){
        let n1 = nums[i];
        for(let j = i+1; j < nums.length;){
            let n2 = nums[j];
            let n3 = 0;
            let n1 = nums[i];
            n3 = n1 *= n2;
            j = j + 1;
            array03.push(n3);
        }
    }
    console.log(Math.max(...array03));
}
maxProduct([5,20,2,6])
maxProduct([10,-20,0,3])
maxProduct([-1,2])
maxProduct([-1,0,2])
maxProduct([-1,-2,0])

//要求四
function twoSum(nums,target){
    for(let i = 0; i < nums.length-1; i++){
        let n1 = nums[i];
        for(let j = i+1; j < nums.length;){
            let n2 = nums[j];
            let n3 = 0;
            let n1 = nums[i];
            n3 = n1 += n2;
            let result=[i,j];
            if (n3 === target){
                console.log("because"+" "+"nums"+"["+[i]+"]"+"+"+"nums"+"["+[j]+"]"+" "+"is"+" "+n3);
                return result;
            }
            j = j + 1;
        }
    }
}
let result=twoSum([2,11,7,15],9);
console.log(result);
