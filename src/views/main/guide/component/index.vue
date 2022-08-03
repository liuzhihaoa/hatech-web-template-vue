<template>
  <div class="component_page">
    <div class="search_panel">
      <hatech-form ref="search_form" :config="page.form.config" :data="page.form.data" @onEvent="onEvent('search')"></hatech-form>
    </div>
    <div class="table_panel">
      <hatech-table ref="table" :config="page.table.config" :data="page.table.data" @onEvent="onEvent('table')"></hatech-table>
    </div>
    <hatech-dialog ref="screenDialog" :config="page.screenDialog.config" @onEvent="onEvent('screenDialog')">
      <hatech-screen v-if="page.screenDialog.showScreen"></hatech-screen>
    </hatech-dialog>
    <hatech-form-dialog ref="formDialog" :config="page.formDialog.config" :data="page.formDialog.data" @onEvent="onEvent('formDialog')"></hatech-form-dialog>
  </div>
</template>

<script>
import { HatechTable } from 'hatech-web-component-table'
import { HatechForm } from 'hatech-web-component-form'
import { HatechFormDialog } from 'hatech-web-component-form-dialog'
import { HatechDialog } from 'hatech-web-component-dialog'
import { HatechScreen } from 'hatech-web-component-screen'

import Page from './config'
export default {
  components: {
    HatechTable,
    HatechForm,
    HatechFormDialog,
    HatechDialog,
    HatechScreen
  },
  data() {
    return {
      page: Page.call(this)
    }
  }
}
</script>

<style lang="scss" scoped>
.component_page {
  width: 100%;
  height: 100%;
  .search_panel {
    width: 100%;
  }
}
</style>