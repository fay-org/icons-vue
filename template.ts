export const singleDefine = (name: string) => `
<script lang="ts">
import { defineComponent , computed } from 'vue'

export default defineComponent({
  name: '${name}',
  props:{
    color:{
      type:String,
      default:'currentColor'
    },
    size:[String,Number]
  },
  setup(props){

    const setColor = computed(()=>{color:props.color});

    const setSize = computed(()=>props.size);

    return {
      setColor,
      setSize,
    }

  }
})
</script>
`
