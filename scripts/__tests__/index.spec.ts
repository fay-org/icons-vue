import iconsPool from '../../packages/iconsPool'
import fectIcon from '../../packages/fectIcon.vue'
import { replaceStyle, camelize } from '../tools'
import { mount } from '@vue/test-utils'

describe('Test for icons-vue', () => {
  it('camelize should be work', () => {
    expect(camelize('AB')).toEqual('AB')
    expect(camelize('A-b')).toEqual('AB')
    expect(camelize('a-b-c')).toEqual('aBC')
  })

  it('replaceStyle should be work', () => {
    const str = 'color:"var(--geist-fill)";color:"var(--geist-stroke)"'
    expect(replaceStyle(str)).toEqual(
      'color:"currentColor";color:"var(--primary-background)"'
    )
  })

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
