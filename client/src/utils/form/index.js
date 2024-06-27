//Валидация полей
export function inputValidation(data, formData) {
  const testFormObj = formData.find((el) => el.id === data.id)

  if (testFormObj) {
    const formObj = testFormObj
    const validationPassed = formObj.regex.test(data.value)

    if (!validationPassed) {
      if (data.value.length < 2) {
        formObj.error = 'Поле является обязательным для заполнения'
      } else {
        if (formObj.id === 'email') {
          if (data.value.includes('@')) {
            const emailArr = data.value.split('@')[1]
            if (emailArr.includes('.')) {
              formObj.error = 'Поле содержит недопустимые символы'
            } else {
              formObj.error = 'Почта должна содержать [ . ] в доменной части'
            }
          } else {
            formObj.error = 'Почта должна содержать [ @ ]'
          }

        } else {
          formObj.error = 'Поле содержит недопустимые символы'
        }
      }

      formObj.value = ''
    } else {
      formObj.error = ''
      formObj.value = data.value
    }
  }
}

//отправка запроса
export function postFormData(formData) {
  let validationPassed = true

  for (let i = 0; i < formData.length; i++) {
    const target = formData[i];

    if (target.error !== '') {
      validationPassed = false;
    }
    if (target.required) {
      if (target.value === '') {
        if (target.error === '') {
          target.error = 'Поле является обязательным для заполнения'
        }
        validationPassed = false;
      }
    }
  }

  if (validationPassed) {
    const data = formData
      .filter((el) => el.value)
      .reduce((obj, item) => {
        obj[item.id] = item.value
        return obj
      }, {});

    formData.forEach((el) => {
      el.value = ''
      el.error = ''
    })

    return data
  }
}
