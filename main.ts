interface Person {
    age: number,
    name: string,
    say(): string
}

let mike = {
    age:25,
    name:"mike",
    say: function(){
        return "My name is " + this.name + " and I am " + this.age + " years old!";
    }
}

function sayIt(person: Person){
    return person.say();
}

document.getElementById("index")!.innerHTML = "Changed by TypeScript!"
console.log(sayIt(mike));
// what does sayIt function do ?
// well the function just spit out function based on parameter given which is object literals