/*
 * @Author: mujin
 * @Date: 2022-03-15 09:49:36
 * @LastEditTime: 2022-03-15 10:58:19
 * @Description: 
 */
import Button from './Button.vue';
import { mount } from "@vue/test-utils";

describe("按钮测试", () => {
  it('显示文本', () => {
    const content = "ceshi";
    const wrapper = mount(Button, {
      slots: {
        default: content
      }
    });
    expect(wrapper.text()).toBe(content);
  });

  it("大小", () => {
    const size = 'small';
    const wrapper = mount(Button, {
      props: {
        size
      }
    });
    expect(wrapper.classes()).toContain(`el-button-${size}`);
  })

  it("设置按钮默认大小", () => {
    const size = "mini";
    const wrapper = mount(Button, {
      global: {
        config: {
          globalProperties: {
            $AILEMENTE: {
              size
            }
          }
        }
      }
    })
    console.log(expect(wrapper.classes()));

    expect(wrapper.classes()).toContain(`el-button-${size}`)
  });

  it('设置主题', () => {
    const type = 'success';
    const wrapper = mount(Button, {
      props: {
        type
      }
    });
    expect(wrapper.classes()).toContain(`el-button-${type}`);
  });

})