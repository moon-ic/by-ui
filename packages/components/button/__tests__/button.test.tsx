import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import Button from '../index.vue'

describe('Button Component', () => {

  it('should render correctly with default props', () => {
    const wrapper = mount(Button)
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should apply the correct default type and size', () => {
    const wrapper = mount(Button)
    expect(wrapper.classes()).toContain('by-btn-primary')
    expect(wrapper.classes()).toContain('by-btn-small')
  })

  it('should apply the correct type when passed', () => {
    const wrapper = mount(Button, {
      props: {
        type: 'danger'
      }
    })
    expect(wrapper.classes()).toContain('by-btn-danger')
  })

  it('should apply the correct size when passed', () => {
    const wrapper = mount(Button, {
      props: {
        size: 'large'
      }
    })
    expect(wrapper.classes()).toContain('by-btn-large')
  })

  it('should be disabled when the "disabled" prop is true', () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true
      }
    })
    expect(wrapper.classes()).toContain('disabled')
    expect(wrapper.attributes('disabled')).toBe('disabled')
  })

  it('should emit "click" event when clicked', async () => {
    const wrapper = mount(Button)
    const clickHandler = vi.fn()
    wrapper.vm.$on('click', clickHandler)

    await wrapper.trigger('click')
    expect(clickHandler).toHaveBeenCalled()
  })
})
