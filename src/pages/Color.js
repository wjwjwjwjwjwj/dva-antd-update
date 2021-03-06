/**
 * Created JS
 * User: JiangYilong
 * Date: 2018/8/6
 * Time: 14:23
 * Email: jiangyilong@wafersystems.com
 */
import React from 'react';
import {Chart, Axis, Tooltip, Geom,Legend} from "bizcharts";
import DataSet from '@antv/data-set'
import {connect} from 'dva';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = [
      {
        month: "Jan",
        Tokyo: 7.0,
        London: 3.9
      },
      {
        month: "Feb",
        Tokyo: 6.9,
        London: 4.2
      },
      {
        month: "Mar",
        Tokyo: 9.5,
        London: 5.7
      },
      {
        month: "Apr",
        Tokyo: 14.5,
        London: 8.5
      },
      {
        month: "May",
        Tokyo: 18.4,
        London: 11.9
      },
      {
        month: "Jun",
        Tokyo: 21.5,
        London: 15.2
      },
      {
        month: "Jul",
        Tokyo: 25.2,
        London: 17.0
      },
      {
        month: "Aug",
        Tokyo: 26.5,
        London: 16.6
      },
      {
        month: "Sep",
        Tokyo: 23.3,
        London: 14.2
      },
      {
        month: "Oct",
        Tokyo: 18.3,
        London: 10.3
      },
      {
        month: "Nov",
        Tokyo: 13.9,
        London: 6.6
      },
      {
        month: "Dec",
        Tokyo: 9.6,
        London: 4.8
      }
    ];
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: "fold",
      fields: ["Tokyo", "London"],
      // 展开字段集
      key: "city",
      // key字段
      value: "temperature" // value字段
    });
    const cols = {
      month: {
        range: [0, 1]
      }
    };
    const containerTpl= '<div class="g2-tooltip">'
      + '<div class="g2-tooltip-title" style="margin-bottom: 4px;"></div>'
      + '<ul class="g2-tooltip-list"></ul>'
      + '</div>';
    const itemTpl= '<li data-index={index}>'
      + '<span style="background-color:{color};width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span>'
      + '{name}: {value}'
      + '</li>';
    return (
      <div>
        <Chart height={400} data={dv} scale={cols} forceFit>
          <Legend />
          <Axis name="month" />
          <Axis
            name="temperature"
            label={{
              formatter: val => `${val}°C`
            }}
          />
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom
            type="line"
            position="month*temperature"
            size={2}
            color={"city"}
          />
          <Geom
            type="point"
            position="month*temperature"
            size={4}
            shape={"circle"}
            color={"city"}
            style={{
              stroke: "#fff",
              lineWidth: 1
            }}
          />
        </Chart>
      </div>
    )
  }
}

export default connect(state =>state)(({example}) => <Index example={example} />)
