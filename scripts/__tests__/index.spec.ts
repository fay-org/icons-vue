import iconsPool from '../../packages/iconsPool'
import fectIcon from '../../packages/fectIcon.vue'

import { mount } from '@vue/test-utils'

describe('Test for icons-vue', () => {
  it('There are icons', () => {
    expect(Object.keys(iconsPool).length > 0).toBeTruthy()
  })

  it('Should be render as activity icons ', () => {
    const wrapper = mount(fectIcon, {
      props: {
        icon: 'activity',
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('should be support custom size', () => {
    const wrapper = mount(fectIcon, {
      props: {
        size: 30,
        icon: 'activity',
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.find('svg').attributes('height')).toBe('30')
    expect(wrapper.find('svg').attributes('width')).toBe('30')
  })
  it('should be support custom color', () => {
    const wrapper = mount(fectIcon, {
      props: {
        color: 'red',
        icon: 'activity',
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.find('svg').attributes('style')).toBe('color: red;')
  })
})
