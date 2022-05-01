const findTheOldest = function(people) {
      // expect(findTheOldest(people).name).toBe('Ray');
      // test('finds the oldest person!',
      // Add age  key then sorts
      // In case yearOfDeath !not exist then add actual date
      // Return first item of sorted descending object 
                  
      // Find the oldest yearOfDeath - yearOfBirth = age
       people.forEach((item, index) => {
          if (!item.yearOfDeath) {
             item.yearOfDeath = new Date().getFullYear()}  
             item.age = item.yearOfDeath - item.yearOfBirth;
                  });
     
     people.sort((a, b) => b.age - a.age); // For descending sort
      
      
       return people[0];
    
    };


// Do not edit below this line
module.exports = findTheOldest;
