var dom = document.getElementById("GZQD");
var myChart = echarts.init(dom);
var app = {};
option = null;

var data = [
    {name: '拉萨', value: 84},
    {name: '上海', value: 65},
    {name: '广州', value: 78},
    {name: '太原', value: 59},   
    {name: '昆明', value: 49},      
    {name: '沈阳', value: 40},    
    {name: '长春', value: 31},   
    {name: '银川', value: 72},    
    {name: '南昌', value: 24},    
    {name: '吉林', value: 46},   
    {name: '呼和浩特', value: 65},
    {name: '成都', value: 18},    
    {name: '西安', value: 31},    
    {name: '重庆', value: 23},    
    {name: '南京', value: 67},    
    {name: '贵阳', value: 31},    
    {name: '北京', value: 74},    
    {name: '乌鲁木齐', value: 84},    
    {name: '杭州', value: 80},   
    {name: '济南', value: 72},   
    {name: '兰州', value: 69},  
    {name: '天津', value: 75},  
    {name: '郑州', value: 73},
    {name: '哈尔滨', value: 74},  
    {name: '石家庄', value: 57},
    {name: '长沙', value: 65},
    {name: '合肥', value: 79},
    {name: '武汉', value: 53},
];

var geoCoordMap = { 
    '拉萨':[91.11,29.97],
    '上海':[121.48,31.22],
    '广州':[113.23,23.16],
    '太原':[112.53,37.87],
    '昆明':[102.73,25.04],
    '沈阳':[123.38,41.8],
    '长春':[125.35,43.88],
    '银川':[106.27,38.47],  
    '南昌':[115.89,28.68],    
    '吉林':[126.57,43.87],   
    '呼和浩特':[111.65,40.82],
    '成都':[104.06,30.67],   
    '西安':[108.95,34.27],   
    '重庆':[106.54,29.59],  
    '南京':[118.78,32.04],
    '贵阳':[106.71,26.57],
    '北京':[116.46,39.92],
    '乌鲁木齐':[87.68,43.77],
    '杭州':[120.19,30.26],  
    '济南':[117,36.65],
    '兰州':[103.73,36.03],
    '天津':[117.2,39.13],
    '郑州':[113.65,34.76],
    '哈尔滨':[126.63,45.75],
    '石家庄':[114.48,38.03],
    '长沙':[113,28.21],
    '合肥':[117.27,31.86],
    '武汉':[114.31,30.52]
};

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

function renderItem(params, api) {
    var coords = [
        [116.7,39.53],
        [103.73,36.03],
        [112.91,27.87],
        [120.65,28.01],
        [119.57,39.95]
    ];
    var points = [];
    for (var i = 0; i < coords.length; i++) {
        points.push(api.coord(coords[i]));
    }
    var color = api.visual('color');

    return {
        type: 'polygon',
        shape: {
            points: echarts.graphic.clipPointsByRect(points, {
                x: params.coordSys.x,
                y: params.coordSys.y,
                width: params.coordSys.width,
                height: params.coordSys.height
            })
        },
        style: api.style({
            fill: color,
            stroke: echarts.color.lift(color)
        })
    };
}

option = {
    backgroundColor: '#404a59',
    title: {
        text: '全国光照资源分布',
        subtext: '花草云智能监控',
        sublink: '###',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip : {
        trigger: 'item'
    },
    bmap: {
        center: [104.114129, 37.550339],
        zoom: 5,
        roam: true,
        mapStyle: {
            styleJson: [
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": {
                            "color": "#044161"
                        }
                    },
                    {
                        "featureType": "land",
                        "elementType": "all",
                        "stylers": {
                            "color": "#004981"
                        }
                    },
                    {
                        "featureType": "boundary",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#064f85"
                        }
                    },
                    {
                        "featureType": "railway",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "highway",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#004981"
                        }
                    },
                    {
                        "featureType": "highway",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#005b96",
                            "lightness": 1
                        }
                    },
                    {
                        "featureType": "highway",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "arterial",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#004981"
                        }
                    },
                    {
                        "featureType": "arterial",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#00508b"
                        }
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "green",
                        "elementType": "all",
                        "stylers": {
                            "color": "#056197",
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "subway",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "manmade",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "local",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "arterial",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "featureType": "boundary",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#029fd4"
                        }
                    },
                    {
                        "featureType": "building",
                        "elementType": "all",
                        "stylers": {
                            "color": "#1a5787"
                        }
                    },
                    {
                        "featureType": "label",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    }
            ]
        }
    },
    series : [
        {
            name: 'pm2.5',
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: convertData(data),
            symbolSize: function (val) {
                return val[2] / 10;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#ddb926'
                }
            }
        },
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 6)),
            symbolSize: function (val) {
                return val[2] / 10;
            },
            showEffectOn: 'emphasis',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#f4e925',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        },
        {
            type: 'custom',
            coordinateSystem: 'bmap',
            //renderItem: renderItem,
            itemStyle: {
                normal: {
                    opacity: 0.5
                }
            },
            animation: false,
            silent: true,
            data: [0],
            z: -10
        }
    ]
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}