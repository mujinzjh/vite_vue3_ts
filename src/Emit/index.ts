import mitt from 'mitt';

const EventVue = mitt();

// 发布事件
const publish = (event, args?: any) => {
  EventVue.emit(event, args);
}

// 监听事件
const listener = (event, callback) => {
  EventVue.on(event, callback);
}

// 返回所有事件
const allEvents = () => {
  return EventVue.all;
}

// 清除所有事件
const clearEvents = () => {
  EventVue.all.clear();
}

const EventType = {
  formTitle: 'title', // 表单标题修改
  formField: 'field', // 表单字段修改
  toSearch: 'search', // 显示到搜索栏事件
  toTable: 'table', // 显示到表事件
  funBatch: 'funBatch', // 是否批量操作
  funViewTo: 'funViewTo', // 功能点显示到
  leftMetas: 'leftMetas',
  switchTab: 'switch', // 切换右侧tab配置标签
  fixedColumn: 'fixedColumn', // 固定某一列
  selectionRow: 'selectionRow', //
  changeQuote: 'changeQuote', // 引用改变事件
  changeForeign: 'changeForeign', // 外键改变事件
  loadingForeignColumn: 'loadingForeignColumn', // 加载外键列
}

// 元数据解析事件类型
const MetaEventType = {
  path: 'path', // 面包屑路径切换事件
  list: 'listMeta', // 列表组件初始化事件
  table: 'tableMeta',
  search: 'searchMeta',
  editCreate: 'editMeta', // 编辑表单元数据创建事件
  container: 'containerMeta', // 容器组件事件
  formBeforeCreate: 'formBeforeMeta', // 表单元数据创建之前
  formAfterCreate: 'formAfterMeta' // 表单元数据创建之后
}
// 元移除事件
const MetaRemoveEvent = {
  delEditMeta: 'delEditMeta',
  delTableColumn: 'delTableColumn',
  delEditItemMeta: 'delEditItemMeta',
  delSearchFormMeta: 'delSearchFormMeta'
}
// 组件挂载事件类型
const MountedEventType = {
  edit: 'editMounted',
  list: 'listMounted',
  table: 'tableMounted',
  container: 'containerMounted'
}
// 组件事件类型
const ComponentEventType = {
  cascadeVisibleChange: 'cascadeVisibleChange',
}
// 功能组件事件
const FunEventType = {
  editFun: 'editFun', // 编辑组件发布的功能
  searchFun: 'searchFun', //
  addTableFunc: 'addTableFunc',
  addSearchFunc: 'addSearchFunc',
  changeEditFunc: 'changeEditFunc'
}

// 框架事件总线
const EventBus = { publish, listener, allEvents, clearEvents }

export { EventBus, EventType, FunEventType, MetaEventType, MountedEventType, MetaRemoveEvent, ComponentEventType }
