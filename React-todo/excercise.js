// Exercise one "Transform all names to versaler"
var names = [
    "Andrew",
    "Peter",
    "Eliza",
    "Kirsten",
    "Jeanette"
];

var converToCapital = names.map(function(names){
    return names.toUpperCase();
})

console.log(converToCapital);


// Exercise two 
var triangles = [
    { width: 12, height: 22 },
    { width: 21, height: 12 },
    { width: 35, height: 49 },
    { width: 12, height: 50 },
    { width: 20, height: 35 }
];

var result = triangles.map(function(triangles) {
    return  triangles.area = ((triangles.width * triangles.height) / 2);
})

console.log(result);


// Exercise tree 
var movies = [
    { title: "Batman Begins", year: 2005 },
    { title: "Batman", year: 1989 },
    { title: "Batman Returns", year: 1992 },
    { title: "Batman Forever", year: 1995 },
    { title: "Batman & Robin", year: 1997 },
    { title: "Batman: Under the Red Hood", year: 2010 },
    { title: "Batman: The Dark Knight Returns, Part 1", year: 2012 },
    { title: "Batman: Mask of the Phantasm", year: 1993 },
    { title: "Batman: The Movie", year: 1966 },
    { title: "Batman: The Dark Knight Returns, Part 2", year: 2013 }
];

var movie = movies.filter(function(movies) {
    return movies.year > 1990 && movies.year < 2000;
})
.map(function(movies){
    return movies.title + " " + movies.year;
})

console.log(movie);

// Exercise four
// Using the movie array from exercise tree

var movie2 = movies.filter(function(movies) {
    return movies.year > 2000;
})
.map(function(movies){
    return movies.title;
})

console.log(movie2);

// Exercise five
var datas = {
    title: "ToDo List",
    tasks: [
        { id: 101, complete: false, priority: "High", title: "Do something" },
        { id: 102, complete: false, priority: "Medium", title: "Do something else" },
        { id: 103, complete: true, priority: "Low", title: "Fix the foo" },
        { id: 104, complete: false, priority: "High", title: "Adjust the bar" },
        { id: 105, complete: true, priority: "High", title: "Fetch the baz" },
        { id: 106, complete: false, priority: "Medium", title: "Clean the apartment" },
        { id: 107, complete: false, priority: "Low", title: "Refactor my code" },
        { id: 108, complete: true, priority: "High", title: "Finish the second assignment" }
    ]
};

var taskDone = datas.tasks.filter(function(data) {
    return data.complete == true;
})
.map(function(data){
    return "Task " + " " + data.id + " " + "Is done";
})

console.log(taskDone);


// Exercise six
var data2 = {
    title: "ToDo List",
    tasks: [
        { id: 101, complete: false, priority: "High", title: "Do something" },
        { id: 102, complete: false, priority: "Medium", title: "Do something else" },
        { id: 103, complete: true, priority: "Low", title: "Fix the foo" },
        { id: 104, complete: false, priority: "High", title: "Adjust the bar" },
        { id: 105, complete: true, priority: "High", title: "Fetch the baz" },
        { id: 106, complete: false, priority: "Medium", title: "Clean the apartment" },
        { id: 107, complete: false, priority: "Low", title: "Refactor my code" },
        { id: 108, complete: true, priority: "High", title: "Finish the second assignment" }
    ]
};

var unFinishedAndIsNotLowAndMedium = data2.tasks.filter(function(data) {
    return data.complete == false && data.priority != "Low" && data.priority != "Medium";
})
.map(function(data){
    return "Task:" + data.title + "(" + data.id + ")" +  " " + "Is not done";
})
console.log(unFinishedAndIsNotLowAndMedium);
