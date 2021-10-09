var colls=[]
var flip=[]
var count=1
var entry_class=[]
var entry_id=[]
var rand=[]
var j=0

for(let i=1;i<=24;i++)
{
 colls[i]= document.getElementById(`${i}`)
 flip[i]= document.getElementById(`flip${i}`)
}

while(rand.length!=24)
{
   let temp=Math.floor(Math.random()*23)
   if(rand.includes(temp)===true)
  {
   console.log("include")
   }
   else{
      if(temp===0)
      {
         rand.push((24))
      }
      else{
         rand.push((temp))
      }
   }
}
console.log(rand)




var imgarr=['',
            'https://source.unsplash.com/205x165/?fish',
            'https://source.unsplash.com/205x165/?monkey',
            'https://source.unsplash.com/205x165/?zebra',
            'https://source.unsplash.com/205x165/?dog',
            'https://source.unsplash.com/205x165/?lion',
            'https://source.unsplash.com/205x165/?panda',
            'https://source.unsplash.com/205x165/?snake',        
            'https://source.unsplash.com/205x165/?owl',
            'https://source.unsplash.com/205x165/?owl',
            'https://source.unsplash.com/205x165/?bear',
            'https://source.unsplash.com/205x165/?monkey',
            'https://source.unsplash.com/205x165/?snake',
            'https://source.unsplash.com/205x165/?tiger',
            'https://source.unsplash.com/205x165/?panda',
            'https://source.unsplash.com/205x165/?lion',
            'https://source.unsplash.com/205x165/?cat',
            'https://source.unsplash.com/205x165/?dog',
            'https://source.unsplash.com/205x165/?crocodile',
            'https://source.unsplash.com/205x165/?crocodile',
            'https://source.unsplash.com/205x165/?cat',
            'https://source.unsplash.com/205x165/?tiger',
            'https://source.unsplash.com/205x165/?fish',
            'https://source.unsplash.com/205x165/?zebra',
            'https://source.unsplash.com/205x165/?bear',
]

var clasarr=['','col-2 fish','col-2 monkey','col-2 zebra','col-2 dog','col-2 lion','col-2 panda'
,'col-2 snake','col-2 owl','col-2 owl','col-2 bear','col-2 monkey','col-2 snake','col-2 tiger'
,'col-2 panda','col-2 lion','col-2 cat','col-2 dog','col-2 crocodile','col-2 crocodile','col-2 cat'
,'col-2 tiger','col-2 fish','col-2 zebra','col-2 bear']

for(let i=1;i<=24;i++)
{  
var fChild = colls[i].firstElementChild
var schild = fChild.firstElementChild
var thrdchild =schild.firstElementChild
var imgchild = thrdchild.firstElementChild
console.log(j)
 imgchild.src=imgarr[rand[j]]
 colls[i].className=clasarr[rand[j]]
 j++;
}

for(let i=1;i<=24;i++)
{
   colls[i].addEventListener('click',function()
   {  
      if(flip[i].classList.contains('is-fliped')===true)
      {
         alert("Select a valid card") 
      }
      else
      {
      console.log(count)  
   console.log(flip[i])
   flip[i].classList.add('is-fliped');
   entry_class[count]=colls[i].className
   entry_id[count]=colls[i].id
   count++
   if(count>2)
   {
      console.log(entry_id)
      console.log(entry_class) 
    if(entry_class[1]===entry_class[2])
    {      
      entry_class.length = 0;
      entry_id.length = 0;
      matched(entry_id)
      count=1
    }
    else{
      entry_class.length = 0;
      console.log(entry_class)
      unmatched(entry_id)
      count=1
    }
   }
   }}) 
}


function matched(ent_id)
{
   setTimeout(msg_match,100)
}

function unmatched(ent_id)
{
   console.log(flip[ent_id[1]])
   console.log(flip[ent_id[2]])

   setTimeout(()=>{
      flip[ent_id[1]].classList.remove('is-fliped');
      flip[ent_id[2]].classList.remove('is-fliped');
      entry_id.length = 0;
   },1000)
   setTimeout(msg_unmatch,100)
}




function msg_match()
{
   alert("Matched") 
}

function msg_unmatch()
{
   alert("Unmatched") 
}