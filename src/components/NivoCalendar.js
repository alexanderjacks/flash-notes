import React, { Component } from 'react';
import { ResponsiveCalendar } from '@nivo/calendar';
import trumpgolf from '../trumpgolf.json'
class NivoCalendar extends Component {

  render() {
  return (
    <ResponsiveCalendar
            data={ trumpgolf }
            from="2017-02-04"
            to="2020-01-19"
            emptyColor="#eeeeee"
            colors={[
                "thistle",
                "mediumpurple",
                "darkorange"
            ]}
            margin={{
                "top": 100,
                "right": 30,
                "bottom": 60,
                "left": 30
            }}
            yearSpacing={40}
            monthBorderColor="#ffffff"
            monthLegendOffset={10}
            dayBorderWidth={2}
            dayBorderColor="#ffffff"
            legends={[
                {
                    "anchor": "bottom-right",
                    "direction": "row",
                    "translateY": 36,
                    "itemCount": 4,
                    "itemWidth": 34,
                    "itemHeight": 36,
                    "itemDirection": "top-to-bottom"
                }
            ]}
          />
    );
  }
}

export default NivoCalendar;
