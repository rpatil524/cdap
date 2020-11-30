/*
 * Copyright © 2020 Cask Data, Inc.
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

import React from 'react';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import {
  COLOR_MAP,
  renderThroughputGraph,
} from 'components/Replicator/Detail/ThroughputLatencyGraphs/ThroughputGraph/throughput';
import Heading, { HeadingTypes } from 'components/Heading';
import ChartContainer from 'components/ChartContainer';
import { IThroughputLatencyData } from 'components/Replicator/Detail/ThroughputLatencyGraphs/parser';

const styles = (): StyleRules => {
  return {
    root: {
      position: 'relative',
    },
    heading: {
      textAlign: 'center',
    },
    square: {
      display: 'inline-block',
      height: '15px',
      width: '15px',
      marginRight: '7px',
    },
    inserts: {
      backgroundColor: COLOR_MAP.inserts,
    },
    updates: {
      backgroundColor: COLOR_MAP.updates,
    },
    deletes: {
      backgroundColor: COLOR_MAP.deletes,
    },
    bottomLegend: {
      marginTop: '25px',
      padding: '0 50px',
      display: 'flex',

      '& > div': {
        marginRight: '15px',
      },
    },
  };
};

interface IThroughputGraphProps extends WithStyles<typeof styles> {
  data: IThroughputLatencyData[];
}

const CONTAINER_ID = 'replication-throughput-graph';

const ThroughputGraphView: React.FC<IThroughputGraphProps> = ({ classes, data }) => {
  return (
    <div className={classes.root}>
      <Heading type={HeadingTypes.h4} label="Throughput" className={classes.heading} />
      <ChartContainer
        containerId={CONTAINER_ID}
        data={data}
        chartRenderer={renderThroughputGraph}
        watchWidth={true}
      />
      <div className={classes.bottomLegend}>
        <div>
          <div className={`${classes.square} ${classes.inserts}`} />
          <span>Inserts</span>
        </div>
        <div>
          <div className={`${classes.square} ${classes.updates}`} />
          <span>Inserts</span>
        </div>
        <div>
          <div className={`${classes.square} ${classes.deletes}`} />
          <span>Deletes</span>
        </div>
      </div>
    </div>
  );
};

const ThroughputGraph = withStyles(styles)(ThroughputGraphView);
export default ThroughputGraph;
