//要求五
function maxZeros(nums){
    let array05=[];
    let target_number=0;
    let target_time=0;
    for(let i = 0; i < nums.length; i++){
        let n1=nums[i];
        if (n1 === target_number){
            target_time = target_time + 1
            while (i === nums.length-1){
                array05.push(target_time);
                break;
            }
        }
        else{
            array05.push(target_time);
            target_time=0;
        }
    }
    console.log(Math.max(...array05));
}
maxZeros([0,1,0,0])
maxZeros([1,0,0,0,0,1,0,1,0,0])
maxZeros([1,1,1,1,1])
maxZeros([0,0,0,1,1])