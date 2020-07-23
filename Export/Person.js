// Person Object

var Person = {
    name: function(name){
        console.log('Name' + name);
    },
    surname:function(surname){
        console.log('Surname'+surname);
    },
    title:function(title){
        console.log('Title'+title)
    }
};

// We are exporting this Person Object!
module.exports=Person


