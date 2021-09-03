# excelExportDatatable

A Kibana plugin

---

## Development

See the [kibana contributing guide](https://github.com/elastic/kibana/blob/master/CONTRIBUTING.md) for instructions setting up your development environment.

Note: 
- This plugin is a copy of `src/plugin/vis_type_table` plugin (inbuilt datatable) with additional functionality of Excel exports.
- for exporting we utilize `xlsx` library
- `table_vis_controls.tsx` contains changes related to excel exports
- to differentiate this datatable plugin from inbuilt one, the `name` has to be different (if they are same, you will not see this plugin available on kibana)

## Scripts

<dl>
  <dt><code>yarn kbn bootstrap</code></dt>
  <dd>Execute this to install node_modules and setup the dependencies in your plugin and in Kibana</dd>

  <dt><code>yarn plugin-helpers build</code></dt>
  <dd>Execute this to create a distributable version of this plugin that can be installed in Kibana</dd>
</dl>

