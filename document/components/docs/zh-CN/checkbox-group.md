## CheckboxGroup 复选框组

复选框组就是一组复选框，主要用来选择一组可选项；有垂直和水平两种样式。

### 示例

- 垂直排列

  默认就是垂直排列样式
  ```html
  <cube-checkbox-group v-model="checkList">
    <cube-checkbox label="1">
      Checkbox 1
    </cube-checkbox>
    <cube-checkbox label="2">
      Checkbox 2
    </cube-checkbox>
    <cube-checkbox label="3" :disabled="true">
      Disabled Checkbox
    </cube-checkbox>
    <cube-checkbox label="4" :disabled="true">
      Disabled & Checked Checkbox
    </cube-checkbox>
  </cube-checkbox-group>
  ```
  `checkList` 的值是一个数组，代表的是选中的复选框 `label` 的值的集合。

- 水平排列

  可通过设置 `horizontal` 改变样式为水平排列
  ```html
  <cube-checkbox-group v-model="checkList" :horizontal="true">
    <cube-checkbox label="1">1</cube-checkbox>
    <cube-checkbox label="2">2</cube-checkbox>
    <cube-checkbox label="3" :disabled="true">3</cube-checkbox>
    <cube-checkbox label="4" :disabled="true">4</cube-checkbox>
  </cube-checkbox-group>
  ```

### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| horizontal | 是否水平排列 | Boolean | true/false | false |

### 事件

| 事件名 | 说明 | 参数 |
| - | - | - |
| input | 组内可选项选中状态发生改变时触发 | 选中的复选框的值的集合，类型数组 |
