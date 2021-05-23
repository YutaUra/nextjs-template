module.exports = [
  {
    type: 'select',
    name: 'componentSize',
    message: 'コンポーネントの粒度を選択してください。',
    choices: ['atom', 'molecule', 'organism', 'template', 'page'],
  },
  {
    message: 'コンポーネント名を入力してください',
    name: 'name',
    type: 'input',
    validate: (answer) => {
      if (answer !== '') {
        return true
      }
    },
  },
]
