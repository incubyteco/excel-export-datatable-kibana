/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { PluginConfigDescriptor } from 'kibana/server';

import { configSchema, ConfigSchema } from '../common';

export const config: PluginConfigDescriptor<ConfigSchema> = {
  exposeToBrowser: {
    legacyVisEnabled: true,
  },
  schema: configSchema,
  deprecations: ({ renameFromRoot }) => [
    renameFromRoot('excel_export_table_vis.enabled', 'vis_type_table.enabled'),
  ],
};

export const plugin = () => ({
  setup() {},
  start() {},
});
