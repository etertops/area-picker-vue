# area-picker-vue

> area picker

## how to use

``` bash
# install dependencies
npm install area-picker-vue --save

# use in main.js
import AreaPicker from 'area-picker-vue'
Vue.use(AreaPicker)

# use in vue component
<area-picker />
<area-picker :province="湖南省" :level="3" :city="长沙市" 
  :county="芙蓉区" @finish="areaPickerFinish" />
```

## property
| name/名称 | type/类型 | default/默认值 |
| :---------------: |:---------------:| :---------------:|
| province | String | 北京市 |
| city | String | 北京市 |
| county | String | 东城区 |
| level | Number | 3 |


## methods
| name | return | describe |
| :-------------: |:-------------:| :---------------:|
| finish | Array | select over call back |



``` bash
属性说明
# province 省份

# city 城市

# county 区县

# level 联动等级

方法说明
#finish 完成选择后调用，并返回所选择的内容
[
  {province: "安徽省", code: "340000", address: "安徽省"},
  {city: "马鞍山市", code: "340500", address: "马鞍山市"},
  {county: "和县", code: "340523", address: "和县"}
]
```

