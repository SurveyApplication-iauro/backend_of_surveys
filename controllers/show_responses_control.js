const { get_form_responses } = require("../db_controls/users_answers_db");

async function show_my_responses(req, res) {
  admin_name = req.user_name;
  form_name = req.params.form_name;

  get_form_responses(admin_name, form_name).then((result) => {
    //console.log(result);
    data = result;
    que = ["username", "email_id"];
    for (let x in data[0]) {
      if (data[0][x].question) {
        console.log(data[0][x].question);
        que.push(data[0][x].question);
      }
    }
    console.log("questions array", que);

    /////
    ans = [];
    for (let y of data) {
      if (y.type == "questions") {
        continue;
      } else {
        // console.log(y["q-1"].username);
        let user_array = [];
        user_array.push(y["q-1"].username);
        user_array.push(y["q0"].useremail);

        for (let z in y) {
          if (y[z].response) {
            //    console.log( y[z].response);
            user_array.push(y[z].response);
          }
        }
        ans.push(user_array);
      }
    }
    console.log("answers array", ans);
    final_form_res_obj={
        "question":que,
        "answers":ans
    }

    res.json(final_form_res_obj)
  });
}

module.exports = show_my_responses;
