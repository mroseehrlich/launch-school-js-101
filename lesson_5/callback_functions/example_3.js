[[1, 2], [3, 4]].map(arr => {
  console.log(arr[0]);
  return arr[0];
});

/*
Action          Performed on        Side Effect    Return Value           Is the Return Value Used
method call     Outer array         None            [1,3]                 No
()map

callback        Each subarray       None          The value of index 0   Yes, used by map for
execution                                                                transformation

element         Each subarray       None          Element at index of 0  Yes by console.log
access ([0])                                      of each subarray

method call     Element at index 0  Outputs a      undefined              No
(console.log)   of each subarray    string 
                                    representation
                                    of an integer

element         Each subarray       None          Element at index of 0  Yes, returned by callback
access ([0])                                      of each subarray
                                    */