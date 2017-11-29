## Picker组件

`Picker`组件支持多列选择器及数据联动。

### 示例

- 基本用法
  ```html
  <cube-button @click="showPicker">Picker</cube-button>
  ```
  ```js
  const col1Data = [{ text: '剧毒', value: '剧毒'}, { text: '蚂蚁', value: '蚂蚁' }, { text: '幽鬼', value: '幽鬼' }]
  export default {
    mounted () {
      this.picker = this.$createPicker({
        title: 'Picker选择器-单列',
        data: [col1Data],
        onSelect: (selectedText, selectedIndex) => {
          this.$createDialog({
            type: 'warn',
            content: `选中的内容是：${selectedText.join(',')} <br/> 选中的索引是 ${selectedIndex.join(',')}`,
            icon: 'cubeic-alert'
          }).show()
        },
        onCancel: () => {
          this.$createToast({
            type: 'correct',
            txt: 'Picker canceled',
            time: 1000
          }).show()
        }
      })
    },
    methods: {
      showPicker () {
        this.picker.show()
      }
    }
  }
  ```

- 多列选择器
  ```html
  <cube-button @click="showPicker">Picker - multiple Columns</cube-button>
  ```
  ```js
  const col1Data = [{ text: '剧毒', value: '剧毒'}, { text: '蚂蚁', value: '蚂蚁' }, { text: '幽鬼', value: '幽鬼' }]
  const col2Data = [{ text: '输出', value: '输出' }, { text: '控制', value: '控制' }, { text: '核心', value: '核心'}, { text: '爆发', value: '爆发' }, { text: '辅助', value: '辅助' }, { text: '打野', value: '打野' }, { text: '逃生', value: '逃生' }, { text: '先手', value: '先手' }]
  const col3Data =  [{ text: '梅肯', value: '梅肯'}, { text: '秘法鞋', value: '秘法鞋' }, { text: '假腿', value: '假腿' }, { text: '飞鞋', value: '飞鞋' }, { text: '辉耀', value: '辉耀' }, { text: '金箍棒', value: '金箍棒' }]
  export default {
    mounted () {
      this.picker = this.$createPicker({
        title: 'Picker选择器-多列',
        data: [col1Data, col2Data, col3Data],
        onSelect: (selectedText, selectedIndex) => {
          this.$createDialog({
            type: 'warn',
            content: `选中的内容是：${selectedText.join(',')} <br/> 选中的索引是 ${selectedIndex.join(',')}`,
            icon: 'cubeic-alert'
          }).show()
        },
        onCancel: () => {
          this.$createToast({
            type: 'correct',
            txt: 'Picker canceled',
            time: 1000
          }).show()
        }
      })
    },
    methods: {
      showPicker () {
        this.picker.show()
      }
    }
  }
  ```
  `data`字段接收一个数组，其长度决定了`picker`的列数。

- 联动选择器
  ```html
  <cube-button @click="showPicker">Picker - linkage</cube-button>
  ```
  ```js
  import { provinceList, cityList, areaList } from '../data/area'

  export default {
    data () {
      return {
        tempIndex: [0, 0, 0]
      }
    },
    mounted () {
      this.picker = this.$createPicker({
        title: 'Picker-数据联动',
        data: this.linkageData,
        onChange: (i, newIndex) => {
          if (newIndex !== this.tempIndex[i]) {
            for (let j = 2; j > i; j--) {
              this.tempIndex.splice(j, 1, 0)
              this.picker.scrollTo(j, 0)
            }

            this.tempIndex.splice(i, 1, newIndex)
            this.picker.setData(this.linkageData, this.tempIndex)
          }
        },
        onSelect: (selectedText, selectedIndex) => {
          this.$createDialog({
            type: 'warn',
            content: `选中的城市id是：${selectedText.join(',')} <br/> 选中的索引是 ${selectedIndex.join(',')}`,
            icon: 'cubeic-alert'
          }).show()
        },
        onCancel: () => {
          this.$createToast({
            type: 'correct',
            txt: 'Picker canceled',
            time: 1000
          }).show()
        }
      })
    },
    watch: {
      linkageData() {
        this.picker.refresh()
      }
    },
    computed: {
      linkageData() {
        const provinces = provinceList
        const cities = cityList[provinces[this.tempIndex[0]].value]
        const areas = areaList[cities[this.tempIndex[1]].value]

        return [provinces, cities, areas]
      }
    },
    methods: {
      showPicker () {
        this.picker.show()
      }
    }
  }
  ```
  通过监听每个滚轴触发的`change`事件，然后调用`setData`方法去动态设置相关联的滚轴的值来完成联动选择的功能。

- 实例方法 `setData`
  ```html
  <cube-button @click="showPicker">Picker - setData</cube-button>
  ```
  ```js
  const col1Data = [{ text: '剧毒', value: '剧毒'}, { text: '蚂蚁', value: '蚂蚁' }, { text: '幽鬼', value: '幽鬼' }]
  const col2Data = [{ text: '梅肯', value: '梅肯'}, { text: '秘法鞋', value: '秘法鞋' }, { text: '假腿', value: '假腿' }, { text: '飞鞋', value: '飞鞋' }, { text: '辉耀', value: '辉耀' }, { text: '金箍棒', value: '金箍棒' }]
  const col3Data = [{ text: '输出', value: '输出'}, { text: '控制', value: '控制' }, { text: '核心', value: '核心' }, { text: '爆发', value: '爆发'}, { text: '辅助', value: '辅助' }]
  export default {
    mounted () {
      this.picker = this.$createPicker({
        title: 'Picker-setData',
        onSelect: (selectedText, selectedIndex) => {
          this.$createDialog({
            type: 'warn',
            content: `选中的内容是：${selectedText.join(',')} <br/> 选中的索引是 ${selectedIndex.join(',')}`,
            icon: 'cubeic-alert'
          }).show()
        },
        onCancel: () => {
          this.$createToast({
            type: 'correct',
            txt: 'Picker canceled',
            time: 1000
          }).show()
        }
      })
    },
    methods: {
      showPicker () {
        this.picker.setData([col1Data, col2Data, col3Data], [1, 2, 3])
        this.picker.show()
      }
    }
  }
  ```
  实例方法`setData`可接受2个参数，都为数组类型。第一个参数为滚轴需要显示的数据，第二个参数为选中值的索引。

### Props 配置

| 参数 | 说明 | 类型 | 默认值 | 示例 |
| - | - | - | - | - |
| title | 标题 | String | '' | - |
| data | 传入picker数据，数组的长度决定了picker的列数 | Array | [] | - |
| cancelTxt | picker左侧按钮文案 | String | '取消' | - |
| confirmTxt | picker右侧按钮文案 | String | '确定' | - |
| selectIndex | 被选中的索引值，拉起picker后显示这个索引值对应的内容 | Array | [] | [1] |

* `data`子配置项

| 参数 | 说明 | 类型 | 默认值 | 示例 |
| - | - | - | - | - |
| text | picker每一列展示的文案 | String/Number | - | - |
| value | picker每一列展示的每项文案对应的值 | String/Number/Boolean | - | - |

### 事件

| 事件名 | 说明 | 参数1 | 参数2 |
| - | - | - | - |
| select | 点击确认按钮触发此事件 | selectedVal: 当前选中项每一列的值，Array类型 | selectedIndex: 当前选中项每一列的索引，Array类型 |
| change | 滚轴滚动后触发此事件 | index: 当前滚动列次序，Number类型 | selectedIndex: 当前列选中项的索引，Number类型 |
| value-change | 所确认的值变化时触发此事件 | selectedVal: 当前确认项每一列的值，Array类型 | selectedIndex: 当前确认项每一列的索引，Array类型 |
| cancel | 点击取消按钮触发此事件 | - | - |

### 实例方法

| 方法名 | 说明 | 参数1 | 参数2 |
| - | - | - | - |
| setData | 设置picker可选项 | picker每列可选项的文案和值，Array类型 | picker每列选中的索引，Array类型 |
