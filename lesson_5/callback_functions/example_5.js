[[1, 2], [3, 4]].map(arr => {
  return arr.map(num => num * 2);
});

/*
Action          Performed on        Side Effect     Return Value            Is the Return Value Used

method call     Outer array         None            [[2, 4], [6, 8]]        No
(map)                                                                      

callback        Each subarray       None            Transformed subarrays   Yes, used by map
execution                                         

method call     Each subarray       None            Transformed subarrays   Yes by the outer callback

callback        Each element of     None            Number                  Yes, used by map for
execution       subarray                                                    transformation

num * 2     Value of num           None             Number                  Yes, returned by inner
                                                                            callback function

*/