#要求五
def maxZeros(nums):
    result=[]
    target_number=0
    target_time=0
    for i in range(len(nums)):
        n1=nums[i]
        if n1 == target_number:
            target_time=target_time+1
            while i == (len(nums)-1):
                result.append(target_time)
                break
        else:
            result.append(target_time)
            target_time=0
    print(max(result))

maxZeros([0,1,0,0])
maxZeros([1,0,0,0,0,1,0,1,0,0])
maxZeros([1,1,1,1,1])
maxZeros([0,0,0,1,1])