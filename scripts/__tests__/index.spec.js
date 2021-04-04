import { mount } from '@vue/test-utils'
import fectIcon from '../../packages/fectIcon.vue'
import iconsPool from '../../packages/iconsPool'
describe('fectIcon', () => {
  it('should be render as different icons', () => {
    const wrapper = mount({
      setup() {
        return { icons: Object.keys(iconsPool) }
      },
      render() {
        return (
          <>
            {this.icons.map((icon, i) => (
              <fectIcon icon={icon} key={i}></fectIcon>
            ))}
          </>
        )
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
