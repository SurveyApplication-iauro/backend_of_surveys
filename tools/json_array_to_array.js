// var someJsonArray = [
//     {id: 0, name: "name", property: "value", therproperties: "othervalues"},
//     {id: 1, name: "name1", property: "value1", otherproperties: "othervalues1"},
//     {id: 2, name: "name2", property: "value2", otherproperties: "othervalues2"}
//   ];
  
function convert_json_obj_arr_to_array(someJsonArray,key){


var value_array = someJsonArray.map(function (obj) {
    return obj[key];
  });
  //console.log(value_array);

  return value_array;
}

module.exports=convert_json_obj_arr_to_array;