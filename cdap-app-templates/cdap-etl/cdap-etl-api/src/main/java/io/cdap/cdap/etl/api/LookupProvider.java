/*
 * Copyright © 2015 Cask Data, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

package io.cdap.cdap.etl.api;

import java.util.Map;

/**
 * Provides {@link Lookup} instances given a dataset name.
 */
public interface LookupProvider {
  /**
   * @param table the name of the {@link Lookup} table
   * @param arguments arguments for initializing the {@link Lookup} table
   * @param <T> the type of value returned by the {@link Lookup}
   * @return a {@link Lookup} instance
   */
  <T> Lookup<T> provide(String table, Map<String, String> arguments);
}