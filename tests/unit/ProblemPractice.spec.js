import { shallowMount } from '@vue/test-utils'
import ProblemPractice from '@/components/ProblemPractice.vue'

describe('ProblemPractice.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(ProblemPractice, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })

  it('renders props.msg, name! when name is passed', () => {
    const msg = 'Hello'
    const wrapper = shallowMount(ProblemPractice, {
      propsData: { msg, name }
    })
    let compiledMessage = `${msg}, ${name}!`
    expect(wrapper.text()).toMatch(compiledMessage)
  })
})
