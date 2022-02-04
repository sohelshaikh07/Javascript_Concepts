// let obj={
//     name:'abc',
//     id:{
//         number:0
//     }
// }


// let nobj={
//     ...obj,id:{...obj.id},do:'sdds'
// }

// nobj.name='zzzz';
// nobj.do = "kkk";
// nobj.id.number=7;

// console.log(nobj)


// console.log(obj)


// let a=[1,2,3,4,5];

// let b=[...a.slice(a.indexOf('3')),'sadasdfsa',...a.slice(indexOf('3'))];
// console.log(b);


// const a=[1,2,3,4,0];

// a=[15];


// const obj={
//     name:"Nikhil"
// }


// // Object.freeze(obj);
// Object.seal(obj);
// Object.preventExtensions(obj);

// delete obj.name
// obj.id=7;
// obj.name="xyz"

// console.log(obj);
// obj.name="kunal"
// obj={
//     name:'asdasf'
// }
// console.log(obj.name)



// let a=[1,2,3,4,5];

// let b=a.map((a)=>a>2);


// let c=a.filter(a=>
//     {
//         return a
//     });
// console.log(c);
// console.log(b);


// var table="window_table"
// console.log(this.table)

// const jhon={
//     table:"jhons_table",

//     cleanTable()=>{
//         console.log(this.table)
//         return true;
//     }
// }

// jhon.cleanTable()
// 
var title="hello"


// const video={
//     title:"a",
//     tags:[1,2,3],
//     showTags(){
//         this.tags.forEach((tag)=>{
//             console.log(this.title)
//         })
//     }
// }

let a=()=>{

    let showTags=()=>{

    var title="bye"
        // function hello(){
            
        //     console.log(this.title)
            
        //     function hello(){
        //         console.log(this.title)
        //     }

        //     hello();
        // }

        const arrow=()=>{

            const arr=()=>{ 
                console.log(this.title)
            }
            arr();
        }
        
        // hello();
        arrow()
    }

showTags()

}

a();