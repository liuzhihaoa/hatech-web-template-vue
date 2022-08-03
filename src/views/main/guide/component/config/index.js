import FormDialog from './form_dialog.config'
import ScreenDialog from './screen_dialog.config'
import SearchForm from './search_form.config'
import Table from './table.config'

export default function () {
  const page = {}
  page.formDialog = FormDialog.call(this)
  page.screenDialog = ScreenDialog.call(this)
  page.form = SearchForm.call(this)
  page.table = Table.call(this)
  return page
}