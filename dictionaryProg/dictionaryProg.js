//Write a program in the following steps
//a. Roll a die and find the number between 1 to 6
//b. Repeat the Die roll and find the result each time
//c. Store the result in a dictionary
//d. Repeat till any one of the number has reached 10 times
//e. Find the number that reached maximum times and the one that was for
//minimum times


let one=0,two=0,three=0,four=0,five=0,six=0,i=1;
let diceMap=new Map;
while((one<10)&&(two<10)&&(three<10)&&(four<10)&&(five<10)&&(six<10)){
    let random=Math.floor(Math.random() * 6) + 1;
    switch(random){
        case 1 : diceMap.set(i,1);
                    i++,one++;
                    break;
        case 2 : diceMap.set(i,2);
                    i++,two++;
                    break; 
        case 3 : diceMap.set(i,3);
                    i++,three++;
                    break;  
        case 4 : diceMap.set(i,4);
                    i++,four++;
                    break;
        case 5 : diceMap.set(i,5);
                    i++,five++;
                    break;  
        case 6 : diceMap.set(i,6);
                    i++,six++;
                    break;                                             
    }

}
console.log(diceMap);
console.log("one = "+one+" , two = "+two+" ,three = "+three+" , four = "+four+" , five = "+five+" , six = "+six);
if((one<two)&&(one<three)&&(one<four)&&(one<five)&&(one<six))
    console.log("one = "+one+" ===> min ");
else if((two<one)&&(two<three)&&(two<four)&&(two<five)&&(two<six))
    console.log("two = "+two+" ===> min ");
else if((three<one)&&(three<two)&&(three<four)&&(three<five)&&(three<six))
    console.log("three = "+three+" ===> min ");
else if((four<one)&&(four<three)&&(four<two)&&(four<five)&&(four<six))
    console.log("four = "+four+" ===> min ");
else if((five<one)&&(five<two)&&(five<four)&&(five<three)&&(five<six))
    console.log("five = "+five+" ===> min ");
else if((six<one)&&(six<two)&&(six<four)&&(six<three)&&(six<five))
    console.log("six = "+six+" ===> min ");

if((one>two)&&(one>three)&&(one>four)&&(one>five)&&(one>six))
    console.log("one = "+one+" ===> max ");
else if((two>one)&&(two>three)&&(two>four)&&(two>five)&&(two>six))
    console.log("two = "+two+" ===> max ");
else if((three>one)&&(three>two)&&(three>four)&&(three>five)&&(three>six))
    console.log("three = "+three+" ===> max ");
else if((four>one)&&(four>three)&&(four>two)&&(four>five)&&(four>six))
    console.log("four = "+four+" ===> max ");
else if((five>one)&&(five>three)&&(five>four)&&(five>two)&&(five>six))
    console.log("five = "+five+" ===> max ");
else if((six>one)&&(six>three)&&(six>four)&&(six>two)&&(six>five))
    console.log("six = "+six+" ===> max ");

// Write a Program to generate a birth month of 50 individuals
// between the year 92 & 93. Find all the individuals having birthdays
// in the same month. Store it to finally print.

    let birthMap=new Map;
    let similarMap=new Map;
    let jan=0,feb=0,march=0,april=0,may=0,june=0,july=0,aug=0,sep=0,oct=0,nov=0,dec=0;
    
    for(let i=1;i<=50;i++){
        let month=Math.floor(Math.random() * 12) + 1;
        if(month==1)  jan++
        else if(month==2) feb++ 
        else if(month==3) march++ 
        else if(month==4) april++ 
        else if(month==5) may++ 
        else if(month==6) june++ 
        else if(month==7) july++ 
        else if(month==8) aug++ 
        else if(month==9) sep++ 
        else if(month==10) oct++ 
        else if(month==11) nov++ 
        else  dec++ 
    
    
        //console.log(month)
        birthMap.set(i,month)
        
    }
    console.log(birthMap)
    
    console.log("\nNo of individuals having common birth month   :\n ")
    console.log("jan = "+jan+" , feb = "+feb+" , march = "+march+" , april = "+april+" , may = "+may+" , june = "+june+" , july = "+
                july+" , aug = "+aug+" , sep = "+sep+" , oct = "+oct+" , nov = "+nov+" , dec = "+dec+"\n")
    