export default function () {
  const form = {
    data: {},
    config: {
      columns: [
        {
          type: 'select',
          label: "语言",
          span: 6,
          prop: 'language',
          props: {
            options: []
          }
        }
      ]
    }
  }
  return form
}