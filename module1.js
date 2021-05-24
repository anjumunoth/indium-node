console.log("Welcome to the nodejs training")

function myFunc1(p1,p2)
{
    return p1+p2
}

function myFunc2(p1)
{
    if(p1%2 ==0)
        return true;
    else
        return false
}



module.exports ={myFunc1:myFunc1,myFunc2:myFunc2};