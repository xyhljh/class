var nowWeek ="";


function getWeek(date){
  var data = xinjiaoshikebiao;
    $.each(data,function(e,r){
      $.each(r.week,function(b,k){
        if(k.date==date){
          window.nowWeek = r.weeknum;
        }
      });
    });
};

function classAlert(week,day,course){
  var data = userinfo;
  var str = data[week].week[day].course[course].courseName;
  str+="\n";
  str+=data[week].week[day].course[course].teacherName;
  str+="\n";
  str+=data[week].week[day].course[course].className;
  str+="\n";
  str+=data[week].week[day].course[course].pointTime;
  alert(str);
}


$(document).ready(function(){ 
  //课程数据源 {星期(1,2,3,4,5,6),课程:[{课程名称,老师名称,节次,节次时间}]} 
  var date = new Date().getMonth()+1+"-"+new Date().getDate();
  getWeek(date);
  console.log(nowWeek);
  if(nowWeek==''){
    alert("不好意思！您在"+date+"当天休息!没有课程安排！");
  }

  var data = userinfo;
  for(var i=0;i<data.length;i++){
    //i为星期
    if((i+1)==nowWeek){
        //$.each(n.week,function(j,m){
        for(var j=0;j<data[i].week.length;j++){
        //j代表星期几
        for(var k=0;k<data[i].week[j].course.length;k++){
          //k代表第几节课
          //print
          var hang = $("tr").eq(k+1)[0];//dom
          var node = hang.getElementsByTagName("td")[j];
          var p= node.getElementsByTagName('p')[0];
          p.innerHTML = data[i].week[j].course[k].courseName;
          p.setAttribute('style' , "color: " + data[i].week[j].course[k].bgcolor);
          p.setAttribute('onclick' , "classAlert("+i+","+j+","+k+")");
        }
      }
    }
  }
  //
  //
})




