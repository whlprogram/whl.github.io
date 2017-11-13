/*----------------------折线图-----------------------*/
//折线图堆叠
(function(){
	
	var myChart = echarts.init(document.getElementById("Stack"));
	
	option = {
    title: {
        text: '室内光照'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['室内光照强度']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['4:00','6:00','8:00','10:00','12:00','14:00','16:00','18:00','20:00','22:00','24:00']
    },
    yAxis: {
        type: 'value'
		//axisLabel : {
        //    formatter: '{value} °C'
        //}
		//min: 5;
		//max: 50;
    },
    series: [
        {
            name:'室内光照强度',
            type:'line',
            stack: '总量',
            data:[0, 28, 38, 47, 58, 63, 53, 35, 20, 20, 0]
        }
    ]
};

myChart.setOption(option);
})();


//堆叠区域图
(function(){
	
	var area = echarts.init(document.getElementById("area"));
	
	option = {
    title: {
        text: '土壤相对湿度'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['湿度百分比']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['6:00','8:00','10:00','12:00','14:00','浇水','18:00','20:00','22:00','24:00']
    },
    yAxis: {
        type: 'value'
		//axisLabel : {
        //    formatter: '{value} °C'
        //}
		//min: 5;
		//max: 50;
    },
    series: [
        {
            name:'湿度百分比',
            type:'line',
            stack: '总量',
            data:[77, 76, 70, 66, 63, 53, 76, 71, 70, 68]
        }
    ]
};

area.setOption(option);
})();


//对数轴
(function(){
	
	var step = echarts.init(document.getElementById("step"));
	
	option = {
    title: {
        text: '室内温度'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['室内温度']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['4:00','6:00','8:00','10:00','12:00','14:00','16:00','18:00','20:00','22:00','24:00']
    },
    yAxis: {
        type: 'value'
		//axisLabel : {
        //    formatter: '{value} °C'
        //}
		//min: 5;
		//max: 50;
    },
    series: [
        {
            name:'室内温度',
            type:'line',
            stack: '总量',
            data:[7, 11, 13, 15, 18, 20, 19, 16, 12, 11, 10]
        }
    ]
};

step.setOption(option);
})();


//大数据量面积图
(function(){
	var shuju = echarts.init(document.getElementById("shuju"));
	
	option = {
    title: {
        text: '土壤微量元素'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['N+','P2O5','K2O','Mg+']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value'
		//axisLabel : {
        //    formatter: '{value} °C'
        //}
		//min: 5;
		//max: 50;
    },
    series: [
        {
            name:'N+',
            type:'line',
            stack: '总量',
            data:[0.21, 0.22, 0.17, 0.18, 0.15, 0.14, 0.13]
        },
        {
            name:'P2O5',
            type:'line',
            stack: '总量',
            data:[0.29, 0.28, 0.29, 0.35, 0.28, 0.26, 0.25]
        },
        {
            name:'K2O',
            type:'line',
            stack: '总量',
            data:[0.11, 0.12, 0.13, 0.18, 0.15, 0.14, 0.13]
        },
        {
			name:'Mg+',
            type:'line',
            stack: '总量',
            data:[0.05, 0.05, 0.05, 0.05, 0.04, 0.04, 0.04]
        }
    ]
};

	
	shuju.setOption(option);
})();



/*----------------------柱状图-----------------------*/
//坐标轴刻度与标签对齐




















////柱状图
//(function(){
//	
//var myChart = echarts.init(document.getElementById("histogram"));
//
//option = {
//	
//	title: {
//		text: "柱状图",
//		x:'center'
//	},
//	
//  color: ['#3398DB'],
//  tooltip : {
//      trigger: 'axis',
//      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
//          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
//      }
//  },
//  toolbox: {
//      feature: {
//          saveAsImage: {}
//      }
//  },
//  grid: {
//      left: '3%',
//      right: '4%',
//      bottom: '3%',
//      containLabel: true
//  },
//  xAxis : [
//      {
//          type : 'category',
//          data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//          axisTick: {
//              alignWithLabel: true
//          }
//      }
//  ],
//  yAxis : [
//      {
//          type : 'value'
//      }
//  ],
//  series : [
//      {
//          name:'直接访问',
//          type:'bar',
//          barWidth: '60%',
//          data:[10, 52, 200, 334, 390, 330, 220]
//      }
//  ]
//};
//
//myChart.setOption(option);
//})();
//
//
////折线图
//(function(){
//	
//	var line = echarts.init(document.getElementById("line"));
//	
//	option = {
//  title: {
//      text: '堆叠区域图',
//      x:'center'
//  },
//  tooltip : {
//      trigger: 'axis'
//  },
//  
//  toolbox: {
//      feature: {
//          saveAsImage: {}
//      }
//  },
//  grid: {
//      left: '3%',
//      right: '4%',
//      bottom: '3%',
//      containLabel: true
//  },
//  xAxis : [
//      {
//          type : 'category',
//          boundaryGap : false,
//          data : ['周一','周二','周三','周四','周五','周六','周日']
//      }
//  ],
//  yAxis : [
//      {
//          type : 'value'
//      }
//  ],
//  series : [
//      
//      {
//          name:'联盟广告',
//          type:'line',
//          stack: '总量',
//          areaStyle: {normal: {}},
//          data:[220, 182, 191, 234, 290, 330, 310]
//      },
//      {
//          name:'视频广告',
//          type:'line',
//          stack: '总量',
//          areaStyle: {normal: {}},
//          data:[150, 232, 201, 154, 190, 330, 410]
//      },
//      {
//          name:'直接访问',
//          type:'line',
//          stack: '总量',
//          areaStyle: {normal: {}},
//          data:[320, 332, 301, 334, 390, 330, 320]
//      },
//      {
//          name:'搜索引擎',
//          type:'line',
//          stack: '总量',
//          label: {
//              normal: {
//                  show: true,
//                  position: 'top'
//              }
//          },
//          areaStyle: {normal: {}},
//          data:[820, 932, 901, 934, 1290, 1330, 1320]
//      }
//  ]
//};
//
//line.setOption(option);
//})();
//
//
////饼状图
//(function(){
//
//	var pie = echarts.init(document.getElementById("pie"));
//	
//	option = {
//  title : {
//      text: '饼状图',
//      subtext: '纯属虚构',
//      x:'center'
//  },
//  tooltip : {
//      trigger: 'item',
//      formatter: "{a} <br/>{b} : {c} ({d}%)"
//  },
//  toolbox: {
//      feature: {
//          saveAsImage: {}
//      }
//  },
//  legend: {
//      orient: 'vertical',
//      left: 'left',
//      data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
//  },
//  series : [
//      {
//          name: '访问来源',
//          type: 'pie',
//          radius : '55%',
//          center: ['50%', '60%'],
//          data:[
//              {value:335, name:'直接访问'},
//              {value:310, name:'邮件营销'},
//              {value:234, name:'联盟广告'},
//              {value:135, name:'视频广告'},
//              {value:1548, name:'搜索引擎'}
//          ],
//          itemStyle: {
//              emphasis: {
//                  shadowBlur: 10,
//                  shadowOffsetX: 0,
//                  shadowColor: 'rgba(0, 0, 0, 0.5)'
//              }
//          }
//      }
//  ]
//};
//
//
//pie.setOption(option);
//})();
//
//
////环形图
//(function(){
//	
//	var annular = echarts.init(document.getElementById("annular"));
//	
//
//	option = {
//		
//		title: {
//			text: "环状图",
//			x:'center'
//		},
//		
//	    tooltip: {
//	        trigger: 'item',
//	        formatter: "{a} <br/>{b}: {c} ({d}%)"
//	    },
//	    toolbox: {
//	        feature: {
//	            saveAsImage: {}
//	        }
//	    },
//	    legend: {
//	        orient: 'vertical',
//	        x: 'left',
//	        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
//	    },
//	    series: [
//	        {
//	            name:'访问来源',
//	            type:'pie',
//	            radius: ['50%', '70%'],
//	            avoidLabelOverlap: false,
//	            label: {
//	                normal: {
//	                    show: false,
//	                    position: 'center'
//	                },
//	                emphasis: {
//	                    show: true,
//	                    textStyle: {
//	                        fontSize: '30',
//	                        fontWeight: 'bold'
//	                    }
//	                }
//	            },
//	            labelLine: {
//	                normal: {
//	                    show: false
//	                }
//	            },
//	            data:[
//	                {value:335, name:'直接访问'},
//	                {value:310, name:'邮件营销'},
//	                {value:234, name:'联盟广告'},
//	                {value:135, name:'视频广告'},
//	                {value:1548, name:'搜索引擎'}
//	            ]
//	        }
//	    ]
//	};
//
//annular.setOption(option);
//})();
//
