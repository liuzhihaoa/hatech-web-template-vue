<template>
  <div>
    <el-row :gutter="20" class="row">
      <el-col>ElementUI</el-col>
    </el-row>
    <el-row :gutter="20" class="row">
      <el-col :span="2">
        el-input
      </el-col>
      <el-col :span="3">
        <el-input v-model="inputValue" placeholder="请输入" clearable></el-input>
      </el-col>
      <el-col :span="3">
        <el-input v-model="inputValue" placeholder="请输入，禁用状态" disabled></el-input>
      </el-col>
      <el-col :span="3">
        <el-input v-model="inputValue" type="textarea" placeholder="请输入，禁用状态"></el-input>
      </el-col>
      <el-col :span="3">
        <el-input v-model="inputValue" type="textarea" placeholder="请输入，禁用状态"></el-input>
      </el-col>
      <el-col :span="3">
        <el-input-number v-model="inputValue" type="textarea" placeholder="请输入数字"></el-input-number>
      </el-col>
      <el-col :span="3">
        <el-input-number v-model="textValue" disabled placeholder="请输入，禁用状态"></el-input-number>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="row">
      <el-col :span="2">
        el-radio
      </el-col>
      <el-col :span="3">
        <el-radio-group v-model="radioValue">
          <el-radio label="选项一"></el-radio>
          <el-radio label="选项二"></el-radio>
        </el-radio-group>
      </el-col>
      <el-col :span="3">
        <el-radio v-model="radioValue" label="选项一" disabled></el-radio>
        <el-radio v-model="radioValue" label="选项二"></el-radio>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="row">
      <el-col :span="2">
        el-checkbox
      </el-col>
      <el-col :span="3">
        <el-checkbox-group v-model="checkboxValue">
          <el-checkbox label="选项一"></el-checkbox>
          <el-checkbox label="选项二"></el-checkbox>
          <el-checkbox label="选项二" disabled></el-checkbox>
        </el-checkbox-group>
      </el-col>
      <el-col :span="3">
        <el-checkbox v-model="checkboxValue" label="选项一" disabled></el-checkbox>
        <el-checkbox v-model="checkboxValue" label="选项二"></el-checkbox>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="row">
      <el-col :span="2">
        el-select
      </el-col>
      <el-col :span="3">
        <el-select v-model="selectValue">
          <el-option label="选项一" value="1"></el-option>
          <el-option label="选项二" value="2"></el-option>
          <el-option label="选项二" value="3" disabled></el-option>
        </el-select>
      </el-col>
      <el-col :span="3">
        <el-select v-model="selectValue" disabled>
          <el-option label="选项一" value="1"></el-option>
          <el-option label="选项二" value="2"></el-option>
          <el-option label="选项二" value="3" disabled></el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="row">
      <el-col :span="2">
        el-cascader
      </el-col>
      <el-col :span="3">
        <el-cascader v-model="cascaderValue" :options="cascaderData">
        </el-cascader>
      </el-col>
      <el-col :span="3">
        <el-cascader v-model="cascaderValue" :options="cascaderData" disabled>
        </el-cascader>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="row">
      <el-col :span="2">
        el-switch
      </el-col>
      <el-col :span="3">
        <el-switch v-model="switchValue">
        </el-switch>
      </el-col>
      <el-col :span="3">
        <el-switch v-model="switchValue" disabled>
        </el-switch>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="row">
      <el-col :span="2">
        el-slider
      </el-col>
      <el-col :span="3">
        <el-slider v-model="sliderValue">
        </el-slider>
      </el-col>
      <el-col :span="3">
        <el-slider v-model="sliderValue" disabled>
        </el-slider>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="row">
      <el-col :span="2">
        el-timepciker
      </el-col>
      <el-col :span="3">
        <el-time-picker v-model="timepickerValue">
        </el-time-picker>
      </el-col>
      <el-col :span="3">
        <el-time-picker v-model="timepickerValue" disabled>
        </el-time-picker>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="row">
      <el-col :span="2">
        el-datepicker
      </el-col>
      <el-col :span="3">
        <el-date-picker v-model="datepickValue" type="date">
        </el-date-picker>
      </el-col>
      <el-col :span="3">
        <el-date-picker v-model="datepickValue" type="year">
        </el-date-picker>
      </el-col>
      <el-col :span="3">
        <el-date-picker v-model="datepickValue" type="month">
        </el-date-picker>
      </el-col>
      <el-col :span="3">
        <el-date-picker v-model="datepickValues" type="dates">
        </el-date-picker>
      </el-col>
      <el-col :span="3">
        <el-date-picker v-model="datepickValue" type="week">
        </el-date-picker>
      </el-col>
      <el-col :span="3">
        <el-date-picker v-model="datepickValue" type="datetime">
        </el-date-picker>
      </el-col>
      <el-col :span="6">
        <el-date-picker v-model="datepickValues" type="datetimerange">
        </el-date-picker>
      </el-col>
      <el-col :span="5">
        <el-date-picker v-model="datepickValues" type="daterange">
        </el-date-picker>
      </el-col>
      <el-col :span="5">
        <el-date-picker v-model="datepickValues" type="monthrange">
        </el-date-picker>
      </el-col>
      <el-col :span="3">
        <el-date-picker v-model="datepickValue" disabled>
        </el-date-picker>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="row">
      <el-col :span="2">
        el-upload
      </el-col>
      <el-col :span="3">
        <el-upload
          :action="false"
        >
          <el-button type="primary">Upload</el-button>
        </el-upload>
      </el-col>
      <el-col :span="3">
        <el-upload
          :action="false"
          list-type="picture"
        >
          <el-button type="primary">Upload</el-button>
        </el-upload>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="row">
      <el-col :span="2">
        el-rate
      </el-col>
      <el-col :span="3">
        <el-rate :value="3"></el-rate>
      </el-col>
      <el-col :span="3">
        <el-rate :value="3" disabled></el-rate>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="row">
      <el-col :span="2">
        el-color-picker
      </el-col>
      <el-col :span="3">
        <el-color-picker v-model="colorpickerValue"></el-color-picker>
      </el-col>
      <el-col :span="3">
        <el-color-picker v-model="colorpickerValue" disabled></el-color-picker>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="row">
      <el-col :span="2">
        el-transfer
      </el-col>
      <el-col :span="3">
        <el-transfer v-model="transferValue" :data="cascaderData"></el-transfer>
      </el-col>
      <el-col :span="3">
        <el-transfer v-model="transferValue" :data="cascaderData" disabled></el-transfer>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="row">
      <el-col :span="2">
        el-table
      </el-col>
      <el-col :span="22">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="row">
      <el-col :span="2">
        el-tag
      </el-col>
      <el-col :span="5">
        <el-tag type="success" closable>TAG</el-tag>
        <el-tag type="info">TAG</el-tag>
        <el-tag type="warning">TAG</el-tag>
        <el-tag type="danger">TAG</el-tag>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="row">
      <el-col :span="2">
        el-progress
      </el-col>
      <el-col :span="5">
        <el-progress :percentage="50"></el-progress>
        <el-progress :percentage="50" status="success"></el-progress>
        <el-progress :percentage="50" status="warning"></el-progress>
        <el-progress :percentage="50" status="exception"></el-progress>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="row">
      <el-col :span="2">
        el-tree
      </el-col>
      <el-col :span="5">
        <el-tree :data="treeData"></el-tree>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="row">
      <el-col :span="2">
        el-pagination
      </el-col>
      <el-col :span="19">
        <el-pagination :total="1000" :page-size="10" layout="sizes, prev, pager,next,jumper, ->, total, slot"></el-pagination>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="row">
      <el-col :span="2">
        el-alert
      </el-col>
      <el-col :span="19">
        <el-alert type="success">提示方案</el-alert>
        <el-alert type="info">提示方案</el-alert>
        <el-alert type="warning">提示方案</el-alert>
        <el-alert type="error">提示方案</el-alert>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="row">
      <el-col :span="2">
        el-button
      </el-col>
      <el-col :span="19">
        <el-button >提示方案</el-button>
        <el-button type="primary">提示方案</el-button>
        <el-button type="success">提示方案</el-button>
        <el-button type="info">提示方案</el-button>
        <el-button type="warning">提示方案</el-button>
        <el-button type="danger">提示方案</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="row">
      <el-col :span="2">
        el-tabs
      </el-col>
      <el-col :span="6">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
          <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="6">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
          <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="6">
        <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
          <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
          <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="row">
      <el-col :span="2">
        el-dropdown
      </el-col>
      <el-col :span="6">
        <el-dropdown>
          <span class="el-dropdown-link">
            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <el-col :span="6">
        <el-dropdown>
          <el-button type="primary">
            更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item>双皮奶</el-dropdown-item>
            <el-dropdown-item>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="row">
      <el-col :span="2">
        el-step
      </el-col>
      <el-col :span="6">
        <el-steps :active="active" finish-status="success">
          <el-step title="步骤 1"></el-step>
          <el-step title="步骤 2"></el-step>
          <el-step title="步骤 3"></el-step>
        </el-steps>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="row">
      <el-col :span="2">
        el-dialog
      </el-col>
      <el-col :span="6">
        <el-button type="text" @click="bool = true">点击打开 Dialog</el-button>
        <el-dialog
          title="提示"
          :visible.sync="bool"
          width="30%"
          :before-close="handleClose">
          <span>这是一段信息</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="bool = false">取 消</el-button>
            <el-button type="primary" @click="bool = false">确 定</el-button>
          </span>
        </el-dialog>
      </el-col>
      <el-col :span="6">
        <el-popover
          placement="top-start"
          title="标题"
          width="200"
          trigger="hover"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
          <el-button slot="reference">hover 激活</el-button>
        </el-popover>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '',
      radioValue: '',
      checxboxValue: '',
      selectValue: '',
      cascaderValue: [],
      switchValue: false,
      timepickerValue: '',
      sliderValue: 50,
      datepickValue: '',
      datepickValues: [],
      colorpickerValue: '',
      transferValue: [],
      activeName: 'first',
      active: false,
      bool: false,
      treeData: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      cascaderData: [{
        value: 'zhinan',
        label: '指南',
        children: [{
          value: 'shejiyuanze',
          label: '设计原则',
          children: [{
            value: 'yizhi',
            label: '一致'
          }, {
            value: 'fankui',
            label: '反馈'
          }, {
            value: 'xiaolv',
            label: '效率'
          }, {
            value: 'kekong',
            label: '可控'
          }]
        }, {
          value: 'daohang',
          label: '导航',
          children: [{
            value: 'cexiangdaohang',
            label: '侧向导航'
          }, {
            value: 'dingbudaohang',
            label: '顶部导航'
          }]
        }]
      }, {
        value: 'zujian',
        label: '组件',
        children: [{
          value: 'basic',
          label: 'Basic',
          children: [{
            value: 'layout',
            label: 'Layout 布局'
          }, {
            value: 'color',
            label: 'Color 色彩'
          }, {
            value: 'typography',
            label: 'Typography 字体'
          }, {
            value: 'icon',
            label: 'Icon 图标'
          }, {
            value: 'button',
            label: 'Button 按钮'
          }]
        }, {
          value: 'form',
          label: 'Form',
          children: [{
            value: 'radio',
            label: 'Radio 单选框'
          }, {
            value: 'checkbox',
            label: 'Checkbox 多选框'
          }, {
            value: 'input',
            label: 'Input 输入框'
          }, {
            value: 'input-number',
            label: 'InputNumber 计数器'
          }, {
            value: 'select',
            label: 'Select 选择器'
          }, {
            value: 'cascader',
            label: 'Cascader 级联选择器'
          }, {
            value: 'switch',
            label: 'Switch 开关'
          }, {
            value: 'slider',
            label: 'Slider 滑块'
          }, {
            value: 'time-picker',
            label: 'TimePicker 时间选择器'
          }, {
            value: 'date-picker',
            label: 'DatePicker 日期选择器'
          }, {
            value: 'datetime-picker',
            label: 'DateTimePicker 日期时间选择器'
          }, {
            value: 'upload',
            label: 'Upload 上传'
          }, {
            value: 'rate',
            label: 'Rate 评分'
          }, {
            value: 'form',
            label: 'Form 表单'
          }]
        }, {
          value: 'data',
          label: 'Data',
          children: [{
            value: 'table',
            label: 'Table 表格'
          }, {
            value: 'tag',
            label: 'Tag 标签'
          }, {
            value: 'progress',
            label: 'Progress 进度条'
          }, {
            value: 'tree',
            label: 'Tree 树形控件'
          }, {
            value: 'pagination',
            label: 'Pagination 分页'
          }, {
            value: 'badge',
            label: 'Badge 标记'
          }]
        }, {
          value: 'notice',
          label: 'Notice',
          children: [{
            value: 'alert',
            label: 'Alert 警告'
          }, {
            value: 'loading',
            label: 'Loading 加载'
          }, {
            value: 'message',
            label: 'Message 消息提示'
          }, {
            value: 'message-box',
            label: 'MessageBox 弹框'
          }, {
            value: 'notification',
            label: 'Notification 通知'
          }]
        }, {
          value: 'navigation',
          label: 'Navigation',
          children: [{
            value: 'menu',
            label: 'NavMenu 导航菜单'
          }, {
            value: 'tabs',
            label: 'Tabs 标签页'
          }, {
            value: 'breadcrumb',
            label: 'Breadcrumb 面包屑'
          }, {
            value: 'dropdown',
            label: 'Dropdown 下拉菜单'
          }, {
            value: 'steps',
            label: 'Steps 步骤条'
          }]
        }, {
          value: 'others',
          label: 'Others',
          children: [{
            value: 'dialog',
            label: 'Dialog 对话框'
          }, {
            value: 'tooltip',
            label: 'Tooltip 文字提示'
          }, {
            value: 'popover',
            label: 'Popover 弹出框'
          }, {
            value: 'card',
            label: 'Card 卡片'
          }, {
            value: 'carousel',
            label: 'Carousel 走马灯'
          }, {
            value: 'collapse',
            label: 'Collapse 折叠面板'
          }]
        }]
      }, {
        value: 'ziyuan',
        label: '资源',
        children: [{
          value: 'axure',
          label: 'Axure Components'
        }, {
          value: 'sketch',
          label: 'Sketch Templates'
        }, {
          value: 'jiaohu',
          label: '组件交互文档'
        }]
      }],
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  padding: 10px;
}
.component-item {
  margin-top: 10px;
  background: var(--component-background);
  border: 1px solid var(--component-border-color);
  box-shadow: var(--component-shadow);
  .component-item__title {
    padding: 10px 20px;
    border-bottom: 1px solid var(--component-border-color);
  }
  .component-item__content {
    padding: 20px;
    flex-wrap: wrap;
  }
}
.component-item__option {
  margin-top: 0;
  padding: 20px;
  cursor: pointer;
}
</style>