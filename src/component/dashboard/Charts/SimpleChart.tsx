import React, { useEffect } from 'react';
import { createChart } from 'lightweight-charts';

export const SimpleChart = () => {
  useEffect(() => {
    const chartContainer = document.getElementById('simple-chart-container');

    if (!chartContainer) {
      return;
    }

    const chart = createChart(chartContainer, {
      width: 800,
      height: 400
    });

    const mockData = [
      { time: '2024-02-10', value: 50 },
      { time: '2024-02-12', value: 55 },
      { time: '2024-02-14', value: 65 },
      { time: '2024-02-20', value: 70 },
      { time: '2024-02-22', value: 80 }
    ];

    const lineSeries = chart.addLineSeries();

    lineSeries.setData(mockData);

    const customMarker = document.createElement('div');
    customMarker.classList.add('custom-marker');
    customMarker.style.left = chartContainer.offsetWidth / 2 + 'px';
    customMarker.style.top = chartContainer.offsetHeight / 2 + 'px';
    chartContainer.appendChild(customMarker);

    return () => {
      chart.remove();
      chartContainer.removeChild(customMarker);
    };
  }, []);

  return <div id='simple-chart-container' style={{ width: '100%', height: '100%' }} />;
};
