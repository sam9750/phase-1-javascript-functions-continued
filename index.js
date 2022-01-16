function saturdayFun(activity=`roller-skate`) {
    return (`This Saturday, I want to ${activity}!`);
  }

  function mondayWork(activity1=`go to the office` ) {
    
    return (`This Monday, I will ${activity1}.`);
    
  }
  
  
  function wrapAdjective(x) {
      return function(y) {
        return "You are " + `${x}` + y + `${x}` + "!"

      }

  }



    // return function result(special){
    //     return 'You are *a hard worker*!'}}

    function mondayWork(activity1=`go to the office`, activity2=`work from home`) {
    
        console.log (`This Monday, I will ${activity1}.`);
        console.log (`This Monday, I will ${activity2}.`);
      }
    mondayWork(activity1, activity2)