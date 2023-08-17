import { computed } from 'vue'
const validator = (text) => {
  switch (true) {
    case !text:
    case text.length < 3:
    case text.length > 30:
      return false
    default:
      return true
  }
};

const validatorRules = computed(() => (v) => (!v ? 'empty field' : v.length < 3 ? 'min 3 symbols' : v.length > 30 ? 'max 30 symbols' : true))
export { validator, validatorRules }