export default function (key = 'unnamed store') {
  /**
   * take data from the local storage.
   *
   * @return {Array} take data from the local storage.
   */
  const getLocalData = () => {
    let localData = []
    try {
      if (localStorage.getItem(key)) {
        localData = JSON.parse(localStorage.getItem(key))
      }
    } catch (error) {
      console.error('ATTENTION: ' + error)
      localData = []
    } finally {
      return localData
    }

  }

  /**
   *
   * @param {Object} data - object which push in array objects in local storage
   * @return  undefined
   */
  const setLocalData = (data) => {
    localStorage.setItem(key, JSON.stringify(data))
  }


  return { getLocalData, setLocalData }
}