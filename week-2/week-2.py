#要求一
def calculate(min, max):
    sum=0
    for x in range(min, max+1):
        sum=sum+x
    print(sum)

calculate(1, 3)
calculate(4, 8)

#要求二
def avg(data):
    sum=0
    for i in range(len(data)+1):
        sum=sum+(data["employees"][i]["salary"])
    n1=sum
    n2=data["count"]
    n3=n1/n2
    print(n3)

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

#要求三
def maxProduct(nums):
    result=[]
    for i in range(len(nums)-1):
        n1=nums[i]
        for j in range(i+1,len(nums)):
            n2=nums[j]
            n3=n1*n2
            j=j+1
            result.append(n3)
    print(max(result))

maxProduct([5,20,2,6])
maxProduct([10,-20,0,3])
maxProduct([-1,2])
maxProduct([-1,0,2])
maxProduct([-1,-2,0])

#要求四-解法(1) 時間複雜度為O(n^2)
def twoSum(nums,target):
    for i in range(len(nums)-1):
        n1=nums[i]
        for j in range(i+1,len(nums)):
            n2=nums[j]
            n3=n1+n2
            if n3 == target:
                print("because "+"nums"+str([i])+"+"+"nums"+str([j])+" is "+str(n3))
                result=[i,j]
                return result
            j=j+1

result=twoSum([2,11,7,15],9)
print(result)

#要求四-解法(2) 時間複雜度為O(n^2)
def twoSum(nums,target):
    for i in range(len(nums)):
        n2=target-nums[i]
        if (n2 in nums)==True:
            j=nums.index(n2)
            result=[i,j]
            return result
result=twoSum([2,11,7,15],9)
print(result)
