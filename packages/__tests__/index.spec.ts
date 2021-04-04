import iconsPool from '../iconsPool'
import fectIcon from '../fectIcon.vue'
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

  it('Should be render as right icons ', () => {
    const icons = Object.keys(iconsPool)
    const wrapper = mount()
  })
})
