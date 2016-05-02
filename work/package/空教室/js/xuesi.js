//一楼空教室
var yilou1= [{	day:1 , course:{1:"学思楼101",2:"学思楼112",3:"学思楼125",4:"学思楼102"}	},
		   {	day:2 , course:{1:"学思楼111",2:"学思楼124",3:"学思楼130",4:"学思楼127"}	},
		   {	day:3 , course:{1:"学思楼122",2:"学思楼101",3:"学思楼126",4:null}	},
		   {	day:4 , course:{1:"学思楼105",2:"学思楼110",3:"学思楼121",4:"学思楼107"}	},
		   {	day:5 , course:{1:"学思楼124",2:"学思楼112",3:"学思楼108",4:null}	}];
//本地的js数据


//二楼空教室
var erlou2= [{	day:1 , course:{1:null,2:"学思楼201",3:"学思楼226",4:"学思楼227"}	},
		   {	day:2 , course:{1:null,2:"学思楼213",3:"学思楼221",4:"学思楼212"}	},
		   {	day:3 , course:{1:null,2:"学思楼203",3:"学思楼208",4:null}	},
		   {	day:4 , course:{1:null,2:"学思楼220",3:"学思楼228",4:"学思楼230"}	},
		   {	day:5 , course:{1:null,2:"学思楼201",3:"学思楼225",4:null}	}];

//三楼空教室
var sanlou3= [{	day:1 , course:{1:null,2:"学思楼330",3:null,4:null}	},
		   {	day:2 , course:{1:null,2:"学思楼308",3:null,4:null}	},
		   {	day:3 , course:{1:null,2:"学思楼306",3:null,4:null}	},
		   {	day:4 , course:{1:null,2:"学思楼315",3:null,4:null}	},
		   {	day:5 , course:{1:null,2:"学思楼326",3:null,4:null}	}];


//四楼空教室
var silou4= [{	day:1 , course:{1:null,2:"学思楼417",3:null,4:null}	},
		   {	day:2 , course:{1:null,2:"学思楼406",3:null,4:null}	},
		   {	day:3 , course:{1:null,2:"学思楼412",3:null,4:null}	},
		   {	day:4 , course:{1:null,2:"学思楼430",3:null,4:null}	},
		   {	day:5 , course:{1:null,2:"学思楼429",3:null,4:"学思楼412"}	}];

//五楼空教室
var wulou5= [{	day:1 , course:{1:null,2:"学思楼521",3:null,4:null}	},
		   {	day:2 , course:{1:null,2:"学思楼509",3:null,4:null}	},
		   {	day:3 , course:{1:null,2:"学思楼513",3:null,4:null}	},
		   {	day:4 , course:{1:null,2:"学思楼501",3:"学思楼505",4:null}	},
		   {	day:5 , course:{1:null,2:"学思楼529",3:null,4:null}	}];

//把所有的空教室综合到一个数组data
var xuesi = [{name:'一楼',list:yilou1},
			{name:'二楼',list:erlou2},
			{name:'三楼',list:sanlou3},
			{name:'四楼',list:silou4},
			{name:"五楼",list:wulou5}];

//使用方法遵循JSON调用方法
//例如data[0].list[0].course[1] 得到"线性代数"
//data[0].list[0].day 得到"1"