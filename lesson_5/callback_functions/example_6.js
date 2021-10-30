[{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
  return Object.keys(object).every(key => object[key][0] === key);
});

// => [ { c: 'cat', d: 'dog' } ]

/*
Action          Performed on        Side Effect     Return Value            Is the Return Value Used

method call     Outer array         None            [{c: cat, d:, dog}]     No but it's referenced on line 5
(filter)                                                                      

callback        Each sub-object     None            sub-object if           Yes, used by map
execution                                           returned truthy                                                                                 

method call     Each object         None            Array of object keys    No
(object.keys)   in array

method call     Keys array          None            Boolean                 Yes, by the filter callback
(every)                                                                                                        

callback        Each element of     None            Boolean                 Yes, as the return value for the
execution       key array                                                   callback for every()

element         Each object         None            string char             No
access          in filter
(Objec[key][0]) callback
*/