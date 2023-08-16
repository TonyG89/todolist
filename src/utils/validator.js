import { computed } from 'vue'
const validator = (text) => {
  switch (true) {
    case !text:
    case text.length < 3:
    case text.length > 50:
      console.log('false')
      return false
    default:
      console.log('true')
      return true
  }
};

const validatorRules = computed(() => (v) => (!v ? 'empty field' : v.length < 3 ? 'min 3 symbols' : v.length > 50 ? 'max 50 symbols' : true))
export { validator, validatorRules }