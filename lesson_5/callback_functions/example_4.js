let myArr = [[18, 7], [3, 12]].forEach(arr => {
  return arr.map(num => {
    if (num > 5) {
      return console.log(num);
    }
  });
});

/*
Action          Performed on        Side Effect     Return Value           Is the Return Value Used
variable                            None            Undefined              No
assignment

method call     Outer array         None            Undefined             Assigned to myArr
(forEach)

callback        Each subarray       None            undefined               No
execution                                         

method call     Each subarray       None            [undefined,]            Yes, returned by forEach
(map)                                               undefined]              callback

callback        Each index of       None            undefined               Yes, used by map for
execution       subarray                                                    transformation

comparison      Element of the      None            Boolean                 Yes by if()
(>)             subarray iteration                

method call     Element at index 0  Outputs a       undefined               Yes, returned by the
(console.log)   of each subarray    string                                  callback function passed
                                    representation                          to map
                                    of an integer
*/