var todolist = []; //定义一个列表记录todolist中的每一项

function addToDoList(){
  var thing = {
    todo : "", //记录字符串
    done : false //初始状态下设为没有完成
  };

  thing.todo = document.getElementById("add_list").value; //enter后把输入框中的信息写入列表

  todolist.push(thing);//加到列表末尾

  document.getElementById("add_list").value = "";//清空输入栏
}

//load到页面上
function load(){
  var todo = document.getElementById("todolist"), //接到html
      done = document.getElementById("donelist"),
      todoString = "", //记录html语句
      doneString = "";
  if (todolist.length != 0){
    for (var i=0; i<todolist.length; i++){
      if (todolist[i].done == false){ //保证不是空的
        todoString += "<li>" +
                      "<input type=\"checkbox\" onclick=\"change("+i+")\">" + //checkbox可以用change这个function来改变done的状态
                      "<p>"+todolist[i].todo+"</p>" +
                      "<span class=\"remove\" onclick=\"remove("+i+")\">-</span></li>"; //span小圆点可以用remove删除这一项
      }
      else {
        doneString += "<li>" +
                      "<input type=\"checkbox\" onclick=\"change("+i+")\">" +
                      "<p>"+todolist[i].todo+"</p>" +
                      "<span class=\"remove\" onclick=\"remove("+i+")\">-</span></li>";
      }
      todo.innerHTML = todoString;//把语句写入HTML
      done.innerHTML = doneString;
    };
  }
  else {
    todo.innerHTML = ""; //空列表的话 里面没有HTML
    done.innerHTML = "";
  }
};

function change(i){ //改变done的状态 对的改错 错的改对
  if (todolist[i].done == false){
    todolist[i].done = true;
  }
  else{
    todolist[i].done = false;
  }
  load(); //印到页面上
};

function remove(i){ //用小圆圈去掉对应项
  todolist.splice(i, 1); //去掉列表中第i项
  load(); //印到页面上
};

function clear1(){ //clear按钮清空页面
  todolist = []; //列表清空
  load();
};

document.getElementById("add_list").onkeypress = function (event) {
    if(event.keyCode === 13){ //enter检测
        addToDoList(); //加一项
        load();
    }
};
