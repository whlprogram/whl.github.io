var map = new BMap.Map("container");          // 创建地图实例
//var point = new BMap.Point(121.487899486,31.24916171);  // 创建点坐标 
var point = new BMap.Point(108.953098279,34.2777998978);  // 创建点坐标  西安
map.centerAndZoom(point, 5);                 // 初始化地图，设置中心点坐标和地图级别  
//window.setTimeout(function(){  
//   map.panTo(new BMap.Point(116.409, 39.918));    
//}, 2000); 
//添加控件 一个平移缩放控件、一个比例尺控件和一个缩略图控件    
map.addControl(new BMap.NavigationControl());
map.addControl(new BMap.NavigationControl());    
map.addControl(new BMap.ScaleControl());    
map.addControl(new BMap.OverviewMapControl());    
map.addControl(new BMap.MapTypeControl());    
map.setCurrentCity("北京"); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用

var point1 = new BMap.Point(121.487899486,31.24916171);
var marker1 = new BMap.Marker(point1);        // 创建标注    
map.addOverlay(marker1);                     // 将标注添加到地图中
var opts1 = {    
 width : 200,     // 信息窗口宽度    
 height: 150,     // 信息窗口高度    
 title : "上海"  // 信息窗口标题   
}       
marker1.addEventListener("click", function(){     
 var infoWindow = new BMap.InfoWindow("温度:22℃  湿度:20%  C0: 1.5  光照强度:135 PM2.5:110", opts1);  // 创建信息窗口对象  
 map.openInfoWindow(infoWindow, point1);      // 打开信息窗口
});

var point2 = new BMap.Point(114.183870524,22.2721034276);
var marker2 = new BMap.Marker(point2);        // 创建标注    
map.addOverlay(marker2);                     // 将标注添加到地图中
var opts2 = {    
 width : 200,     // 信息窗口宽度    
 height: 150,     // 信息窗口高度    
 title : "香港"  // 信息窗口标题   
}    
marker2.addEventListener("click", function(){     
 var infoWindow = new BMap.InfoWindow("温度:26℃  湿度:22%  C0: 1.4  光照强度:190 PM2.5:100", opts2);  // 创建信息窗口对象  
 map.openInfoWindow(infoWindow, point2);      // 打开信息窗口
});

var point3 = new BMap.Point(102.714601139,25.0491531005);
var marker3 = new BMap.Marker(point3);        // 创建标注    
map.addOverlay(marker3);                     // 将标注添加到地图中
var opts3 = {    
 width : 200,     // 信息窗口宽度    
 height: 150,     // 信息窗口高度    
 title : "Hello昆明"  // 信息窗口标题   
}     
marker3.addEventListener("click", function(){     
 var infoWindow = new BMap.InfoWindow("温度:22℃  湿度:20%  C0: 1.5  光照强度:135 PM2.5:110", opts3);  // 创建信息窗口对象  
 map.openInfoWindow(infoWindow, point3);      // 打开信息窗口
});

var point4 = new BMap.Point(126.657716855,45.7732246332);
var marker4 = new BMap.Marker(point4);        // 创建标注    
map.addOverlay(marker4);                     // 将标注添加到地图中
var opts4 = {    
 width : 200,     // 信息窗口宽度    
 height: 150,     // 信息窗口高度    
 title : "Hello哈尔滨市"  // 信息窗口标题   
}     
marker4.addEventListener("click", function(){     
 var infoWindow = new BMap.InfoWindow("温度:22℃  湿度:20%  C0: 1.5  光照强度:135 PM2.5:110", opts4);  // 创建信息窗口对象  
 map.openInfoWindow(infoWindow, point4);      // 打开信息窗口
});

var point5 = new BMap.Point(126.657716855,45.7732246332);
var marker5 = new BMap.Marker(point5);        // 创建标注    
map.addOverlay(marker5);                     // 将标注添加到地图中
var opts5 = {    
 width : 200,     // 信息窗口宽度    
 height: 150,     // 信息窗口高度    
 title : "Hello哈尔滨市"  // 信息窗口标题   
}     
marker5.addEventListener("click", function(){     
 var infoWindow = new BMap.InfoWindow("温度:22℃  湿度:20%  C0: 1.5  光照强度:135 PM2.5:110", opts5);  // 创建信息窗口对象  
 map.openInfoWindow(infoWindow, point5);      // 打开信息窗口
});

var point6 = new BMap.Point(125.313642427,43.8983376071);
var marker6 = new BMap.Marker(point6);        // 创建标注    
map.addOverlay(marker6);                     // 将标注添加到地图中
var opts6 = {    
 width : 200,     // 信息窗口宽度    
 height: 150,     // 信息窗口高度    
 title : "Hello长春市"  // 信息窗口标题   
}     
marker6.addEventListener("click", function(){     
 var infoWindow = new BMap.InfoWindow("温度:22℃  湿度:20%  C0: 1.5  光照强度:135 PM2.5:110", opts6);  // 创建信息窗口对象  
 map.openInfoWindow(infoWindow, point6);      // 打开信息窗口
});

var point7 = new BMap.Point(123.172451205,41.2733392656);
var marker7 = new BMap.Marker(point7);        // 创建标注    
map.addOverlay(marker7);                     // 将标注添加到地图中
var opts7 = {    
 width : 200,     // 信息窗口宽度    
 height: 150,     // 信息窗口高度    
 title : "Hello沈阳市"  // 信息窗口标题   
}     
marker7.addEventListener("click", function(){     
 var infoWindow = new BMap.InfoWindow("温度:22℃  湿度:20%  C0: 1.5  光照强度:135 PM2.5:110", opts7);  // 创建信息窗口对象  
 map.openInfoWindow(infoWindow, point7);      // 打开信息窗口
});

var point8 = new BMap.Point(87.5649877411,43.8403803472);
var marker8 = new BMap.Marker(point8);        // 创建标注    
map.addOverlay(marker8);                     // 将标注添加到地图中
var opts8 = {    
 width : 200,     // 信息窗口宽度    
 height: 150,     // 信息窗口高度    
 title : "Hello乌鲁木齐市"  // 信息窗口标题   
}     
marker8.addEventListener("click", function(){     
 var infoWindow = new BMap.InfoWindow("温度:22℃  湿度:20%  C0: 1.5  光照强度:135 PM2.5:110", opts8);  // 创建信息窗口对象  
 map.openInfoWindow(infoWindow, point8);      // 打开信息窗口
});

var point9 = new BMap.Point(116.404, 39.915);
var marker9 = new BMap.Marker(point9);        // 创建标注    
map.addOverlay(marker9);                     // 将标注添加到地图中
var opts9 = {    
 width : 200,     // 信息窗口宽度    
 height: 150,     // 信息窗口高度    
 title : "北京市"  // 信息窗口标题   
}     
marker9.addEventListener("click", function(){     
 var infoWindow = new BMap.InfoWindow("温度:19℃  湿度:16%  C0: 1.5  光照强度:115 PM2.5:140", opts9);  // 创建信息窗口对象  
 map.openInfoWindow(infoWindow, point9);      // 打开信息窗口
});

var point10 = new BMap.Point(111.66035052,40.8283188731);
var marker10 = new BMap.Marker(point10);        // 创建标注    
map.addOverlay(marker10);                     // 将标注添加到地图中
var opts10 = {    
 width : 200,     // 信息窗口宽度    
 height: 150,     // 信息窗口高度    
 title : "Hello呼和浩特市"  // 信息窗口标题   
}     
marker10.addEventListener("click", function(){     
 var infoWindow = new BMap.InfoWindow("温度:22℃  湿度:20%  C0: 1.5  光照强度:135 PM2.5:110", opts10);  // 创建信息窗口对象  
 map.openInfoWindow(infoWindow, point10);      // 打开信息窗口
});

var point11 = new BMap.Point(114.522081844,38.0489583146);
var marker11 = new BMap.Marker(point11);        // 创建标注    
map.addOverlay(marker11);                     // 将标注添加到地图中
var opts11 = {    
 width : 200,     // 信息窗口宽度    
 height: 150,     // 信息窗口高度    
 title : "Hello石家庄市"  // 信息窗口标题   
}     
marker11.addEventListener("click", function(){     
 var infoWindow = new BMap.InfoWindow("温度:22℃  湿度:20%  C0: 1.5  光照强度:135 PM2.5:110", opts11);  // 创建信息窗口对象  
 map.openInfoWindow(infoWindow, point11);      // 打开信息窗口
});

var point12 = new BMap.Point(112.550863589,37.890277054);
var marker12 = new BMap.Marker(point12);        // 创建标注    
map.addOverlay(marker12);                     // 将标注添加到地图中
var opts12 = {    
 width : 200,     // 信息窗口宽度    
 height: 150,     // 信息窗口高度    
 title : "Hello太原市"  // 信息窗口标题   
}     
marker12.addEventListener("click", function(){     
 var infoWindow = new BMap.InfoWindow("温度:22℃  湿度:20%  C0: 1.5  光照强度:135 PM2.5:110", opts12);  // 创建信息窗口对象  
 map.openInfoWindow(infoWindow, point12);      // 打开信息窗口
});

var point13 = new BMap.Point(117.024967066,36.6827847272);
var marker13 = new BMap.Marker(point13);        // 创建标注    
map.addOverlay(marker13);                     // 将标注添加到地图中
var opts13 = {    
 width : 200,     // 信息窗口宽度    
 height: 150,     // 信息窗口高度    
 title : "Hello济南市"  // 信息窗口标题   
}     
marker13.addEventListener("click", function(){     
 var infoWindow = new BMap.InfoWindow("温度:22℃  湿度:20%  C0: 1.5  光照强度:135 PM2.5:110", opts13);  // 创建信息窗口对象  
 map.openInfoWindow(infoWindow, point13);      // 打开信息窗口
});

var point14 = new BMap.Point(113.64964385,34.7566100641);
var marker14 = new BMap.Marker(point14);        // 创建标注    
map.addOverlay(marker14);                     // 将标注添加到地图中
var opts14 = {    
 width : 200,     // 信息窗口宽度    
 height: 150,     // 信息窗口高度    
 title : "郑州市"  // 信息窗口标题   
}     
marker14.addEventListener("click", function(){     
 var infoWindow = new BMap.InfoWindow("温度:21℃  湿度:19%  C0: 1.3  光照强度:128 PM2.5:99", opts14);  // 创建信息窗口对象  
 map.openInfoWindow(infoWindow, point14);      // 打开信息窗口
});

var point15 = new BMap.Point(108.953098279,34.2777998978);
var marker15 = new BMap.Marker(point15);        // 创建标注    
map.addOverlay(marker15);                     // 将标注添加到地图中
var opts15 = {    
 width : 200,     // 信息窗口宽度    
 height: 150,     // 信息窗口高度    
 title : "Hello西安市"  // 信息窗口标题   
}     
marker15.addEventListener("click", function(){     
 var infoWindow = new BMap.InfoWindow("温度:22℃  湿度:20%  C0: 1.5  光照强度:135 PM2.5:110", opts15);  // 创建信息窗口对象  
 map.openInfoWindow(infoWindow, point15);      // 打开信息窗口
});

var point16 = new BMap.Point(106.206478608,38.5026210119);
var marker16 = new BMap.Marker(point16);        // 创建标注    
map.addOverlay(marker16);                     // 将标注添加到地图中
var opts16 = {    
 width : 200,     // 信息窗口宽度    
 height: 150,     // 信息窗口高度    
 title : "Hello银川市"  // 信息窗口标题   
}     
marker16.addEventListener("click", function(){     
 var infoWindow = new BMap.InfoWindow("温度:22℃  湿度:20%  C0: 1.5  光照强度:135 PM2.5:110", opts16);  // 创建信息窗口对象  
 map.openInfoWindow(infoWindow, point16);      // 打开信息窗口
});

var point17 = new BMap.Point(103.823305441,36.064225525);
var marker17 = new BMap.Marker(point17);        // 创建标注    
map.addOverlay(marker17);                     // 将标注添加到地图中
var opts17 = {    
 width : 200,     // 信息窗口宽度    
 height: 150,     // 信息窗口高度    
 title : "Hello兰州市"  // 信息窗口标题   
}     
marker17.addEventListener("click", function(){     
 var infoWindow = new BMap.InfoWindow("温度:22℃  湿度:20%  C0: 1.5  光照强度:135 PM2.5:110", opts17);  // 创建信息窗口对象  
 map.openInfoWindow(infoWindow, point17);      // 打开信息窗口
});

var point18 = new BMap.Point(101.76792099,36.640738612);
var marker18 = new BMap.Marker(point18);        // 创建标注    
map.addOverlay(marker18);                     // 将标注添加到地图中
var opts18 = {    
 width : 200,     // 信息窗口宽度    
 height: 150,     // 信息窗口高度    
 title : "Hello西宁市"  // 信息窗口标题   
}     
marker18.addEventListener("click", function(){     
 var infoWindow = new BMap.InfoWindow("温度:22℃  湿度:20%  C0: 1.5  光照强度:135 PM2.5:110", opts18);  // 创建信息窗口对象  
 map.openInfoWindow(infoWindow, point18);      // 打开信息窗口
});

var point19 = new BMap.Point(91.111890896,29.6625570621);
var marker19 = new BMap.Marker(point19);        // 创建标注    
map.addOverlay(marker19);                     // 将标注添加到地图中
var opts19 = {    
 width : 200,     // 信息窗口宽度    
 height: 150,     // 信息窗口高度    
 title : "Hello拉萨市"  // 信息窗口标题   
}     
marker19.addEventListener("click", function(){     
 var infoWindow = new BMap.InfoWindow("温度:22℃  湿度:20%  C0: 1.5  光照强度:135 PM2.5:110", opts19);  // 创建信息窗口对象  
 map.openInfoWindow(infoWindow, point19);      // 打开信息窗口
});

var point20 = new BMap.Point(104.067923463,30.6799428454);
var marker20 = new BMap.Marker(point20);        // 创建标注    
map.addOverlay(marker20);                     // 将标注添加到地图中
var opts20 = {    
 width : 200,     // 信息窗口宽度    
 height: 150,     // 信息窗口高度    
 title : "Hello成都市"  // 信息窗口标题   
}     
marker20.addEventListener("click", function(){     
 var infoWindow = new BMap.InfoWindow("温度:22℃  湿度:20%  C0: 1.5  光照强度:135 PM2.5:110", opts20);  // 创建信息窗口对象  
 map.openInfoWindow(infoWindow, point20);      // 打开信息窗口
});

var point21 = new BMap.Point(106.530635013,29.5446061089);
var marker21 = new BMap.Marker(point21);        // 创建标注    
map.addOverlay(marker21);                     // 将标注添加到地图中
var opts21 = {    
 width : 200,     // 信息窗口宽度    
 height: 150,     // 信息窗口高度    
 title : "Hello重庆市"  // 信息窗口标题   
}     
marker21.addEventListener("click", function(){     
 var infoWindow = new BMap.InfoWindow("温度:22℃  湿度:20%  C0: 1.5  光照强度:135 PM2.5:110", opts21);  // 创建信息窗口对象  
 map.openInfoWindow(infoWindow, point21);      // 打开信息窗口
});

var point22 = new BMap.Point(117.282699092,31.8669422607);
var marker22 = new BMap.Marker(point22);        // 创建标注    
map.addOverlay(marker22);                     // 将标注添加到地图中
var opts22 = {    
 width : 200,     // 信息窗口宽度    
 height: 150,     // 信息窗口高度    
 title : "Hello合肥市"  // 信息窗口标题   
}     
marker22.addEventListener("click", function(){     
 var infoWindow = new BMap.InfoWindow("温度:22℃  湿度:20%  C0: 1.5  光照强度:135 PM2.5:110", opts22);  // 创建信息窗口对象  
 map.openInfoWindow(infoWindow, point22);      // 打开信息窗口
});

var point23 = new BMap.Point(114.316200103,30.5810841269);
var marker23 = new BMap.Marker(point23);        // 创建标注    
map.addOverlay(marker23);                     // 将标注添加到地图中
var opts23 = {    
 width : 200,     // 信息窗口宽度    
 height: 150,     // 信息窗口高度    
 title : "Hello武汉市"  // 信息窗口标题   
}     
marker23.addEventListener("click", function(){     
 var infoWindow = new BMap.InfoWindow("温度:22℃  湿度:20%  C0: 1.5  光照强度:135 PM2.5:110", opts23);  // 创建信息窗口对象  
 map.openInfoWindow(infoWindow, point23);      // 打开信息窗口
});

var point24 = new BMap.Point(118.778074408,32.0572355018);
var marker24 = new BMap.Marker(point24);        // 创建标注    
map.addOverlay(marker24);                     // 将标注添加到地图中
var opts24 = {    
 width : 200,     // 信息窗口宽度    
 height: 150,     // 信息窗口高度    
 title : "Hello南京市"  // 信息窗口标题   
}     
marker24.addEventListener("click", function(){     
 var infoWindow = new BMap.InfoWindow("温度:22℃  湿度:20%  C0: 1.5  光照强度:135 PM2.5:110", opts24);  // 创建信息窗口对象  
 map.openInfoWindow(infoWindow, point24);      // 打开信息窗口
});

var point25 = new BMap.Point(120.219375416,30.2592444615);
var marker25 = new BMap.Marker(point25);        // 创建标注    
map.addOverlay(marker25);                     // 将标注添加到地图中
var opts25 = {    
 width : 200,     // 信息窗口宽度    
 height: 150,     // 信息窗口高度    
 title : "Hello杭州市"  // 信息窗口标题   
}     
marker25.addEventListener("click", function(){     
 var infoWindow = new BMap.InfoWindow("温度:22℃  湿度:20%  C0: 1.5  光照强度:135 PM2.5:110", opts25);  // 创建信息窗口对象  
 map.openInfoWindow(infoWindow, point25);      // 打开信息窗口
});

var point26 = new BMap.Point(112.979352788,28.2134782309);
var marker26 = new BMap.Marker(point26);        // 创建标注    
map.addOverlay(marker26);                     // 将标注添加到地图中
var opts26 = {    
 width : 200,     // 信息窗口宽度    
 height: 150,     // 信息窗口高度    
 title : "Hello长沙市"  // 信息窗口标题   
}     
marker26.addEventListener("click", function(){     
 var infoWindow = new BMap.InfoWindow("温度:22℃  湿度:20%  C0: 1.5  光照强度:135 PM2.5:110", opts26);  // 创建信息窗口对象  
 map.openInfoWindow(infoWindow, point26);      // 打开信息窗口
});

var point27 = new BMap.Point(119.330221107,26.0471254966);
var marker27 = new BMap.Marker(point27);        // 创建标注    
map.addOverlay(marker27);                     // 将标注添加到地图中
var opts27 = {    
 width : 200,     // 信息窗口宽度    
 height: 150,     // 信息窗口高度    
 title : "Hello福州市"  // 信息窗口标题   
}     
marker27.addEventListener("click", function(){     
 var infoWindow = new BMap.InfoWindow("温度:22℃  湿度:20%  C0: 1.5  光照强度:135 PM2.5:110", opts27);  // 创建信息窗口对象  
 map.openInfoWindow(infoWindow, point27);      // 打开信息窗口
});

var point28 = new BMap.Point(115.893527546,28.6895780001);
var marker28 = new BMap.Marker(point28);        // 创建标注    
map.addOverlay(marker28);                     // 将标注添加到地图中
var opts28 = {    
 width : 200,     // 信息窗口宽度    
 height: 150,     // 信息窗口高度    
 title : "Hello南昌市"  // 信息窗口标题   
}     
marker28.addEventListener("click", function(){     
 var infoWindow = new BMap.InfoWindow("温度:22℃  湿度:20%  C0: 1.5  光照强度:135 PM2.5:110", opts28);  // 创建信息窗口对象  
 map.openInfoWindow(infoWindow, point28);      // 打开信息窗口
});

var point29 = new BMap.Point(113.307649675,23.1200491021);
var marker29 = new BMap.Marker(point29);        // 创建标注    
map.addOverlay(marker29);                     // 将标注添加到地图中
var opts29 = {    
 width : 200,     // 信息窗口宽度    
 height: 150,     // 信息窗口高度    
 title : "广州市"  // 信息窗口标题   
}     
marker29.addEventListener("click", function(){     
 var infoWindow = new BMap.InfoWindow("温度:22℃  湿度:23%  C0: 1.5  光照强度:145 PM2.5:115", opts29);  // 创建信息窗口对象  
 map.openInfoWindow(infoWindow, point29);      // 打开信息窗口
});

var point30 = new BMap.Point(108.297233556,22.8064929356);
var marker30 = new BMap.Marker(point30);        // 创建标注    
map.addOverlay(marker30);                     // 将标注添加到地图中
var opts30 = {    
 width : 200,     // 信息窗口宽度    
 height: 150,     // 信息窗口高度    
 title : "Hello南宁市"  // 信息窗口标题   
}     
marker30.addEventListener("click", function(){     
 var infoWindow = new BMap.InfoWindow("温度:22℃  湿度:20%  C0: 1.5  光照强度:135 PM2.5:110", opts30);  // 创建信息窗口对象  
 map.openInfoWindow(infoWindow, point30);      // 打开信息窗口
});

var point31 = new BMap.Point(113.566432335,22.1950041592);
var marker31 = new BMap.Marker(point31);        // 创建标注    
map.addOverlay(marker31);                     // 将标注添加到地图中
var opts31 = {    
 width : 200,     // 信息窗口宽度    
 height: 150,     // 信息窗口高度    
 title : "Hello澳门市"  // 信息窗口标题   
}     
marker31.addEventListener("click", function(){     
 var infoWindow = new BMap.InfoWindow("温度:22℃  湿度:20%  C0: 1.5  光照强度:135 PM2.5:110", opts31);  // 创建信息窗口对象  
 map.openInfoWindow(infoWindow, point31);      // 打开信息窗口
});

var point32 = new BMap.Point(106.709177096,26.6299067414);
var marker32 = new BMap.Marker(point32);        // 创建标注    
map.addOverlay(marker32);                     // 将标注添加到地图中
var opts32 = {    
 width : 200,     // 信息窗口宽度    
 height: 150,     // 信息窗口高度    
 title : "Hello贵阳市"  // 信息窗口标题   
}     
marker32.addEventListener("click", function(){     
 var infoWindow = new BMap.InfoWindow("温度:22℃  湿度:20%  C0: 1.5  光照强度:135 PM2.5:110", opts32);  // 创建信息窗口对象  
 map.openInfoWindow(infoWindow, point32);      // 打开信息窗口
});

var point33 = new BMap.Point(110.330801848,20.022071277);
var marker33 = new BMap.Marker(point33);        // 创建标注    
map.addOverlay(marker33);                     // 将标注添加到地图中
var opts33 = {    
 width : 200,     // 信息窗口宽度    
 height: 150,     // 信息窗口高度    
 title : "Hello海口市"  // 信息窗口标题   
}     
marker33.addEventListener("click", function(){     
 var infoWindow = new BMap.InfoWindow("温度:22℃  湿度:20%  C0: 1.5  光照强度:135 PM2.5:110", opts33);  // 创建信息窗口对象  
 map.openInfoWindow(infoWindow, point33);      // 打开信息窗口
});

var point34 = new BMap.Point(114.130474436,22.3748329286);
var marker34 = new BMap.Marker(point34);        // 创建标注    
map.addOverlay(marker34);                     // 将标注添加到地图中
var opts34 = {    
 width : 200,     // 信息窗口宽度    
 height: 150,     // 信息窗口高度    
 title : "Hello台北市"  // 信息窗口标题   
}     
marker34.addEventListener("click", function(){     
 var infoWindow = new BMap.InfoWindow("温度:22℃  湿度:20%  C0: 1.5  光照强度:135 PM2.5:110", opts34);  // 创建信息窗口对象  
 map.openInfoWindow(infoWindow, point34);      // 打开信息窗口
});