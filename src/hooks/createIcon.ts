import * as icons from '@ant-design/icons-vue';
import {createVNode} from 'vue';

export const createIcon = (props)=>{
  const {icon} = props;
  return createVNode(icons[icon])
}