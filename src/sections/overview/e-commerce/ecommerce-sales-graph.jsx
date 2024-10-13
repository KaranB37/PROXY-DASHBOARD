import { useState, useCallback } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { Chart, useChart, ChartSelect, ChartLegends } from 'src/components/chart';
import { useTheme } from '@mui/material/styles';
import { fShortenNumber } from 'src/utils/format-number';

// Updated sample data for sales with both Total Revenue and Total Orders
const salesData = {
  yearly: {
    categories: ['2021', '2022', '2023'],
    series: [
      { name: 'Total Revenue', data: [50000, 75000, 100000] },
      { name: 'Total Orders', data: [40000, 55000, 70000] },
    ],
  },
  monthly: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    series: [
      {
        name: 'Total Revenue',
        data: [4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000],
      },
      {
        name: 'Total Orders',
        data: [3000, 4500, 5500, 6500, 7500, 8500, 9500, 10500, 11500, 12500, 13500, 14500],
      },
    ],
  },
  weekly: {
    categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    series: [
      { name: 'Total Revenue', data: [10000, 15000, 20000, 25000] },
      { name: 'Total Orders', data: [9000, 14000, 19000, 24000] },
    ],
  },
};

export function EcommerceSalesGraph({ title }) {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState('yearly');
  const theme = useTheme();

  const chartColors = [theme.palette.primary.main, theme.palette.warning.main];

  const chartOptions = useChart({
    colors: chartColors,
    xaxis: { categories: salesData[selectedTimeFrame].categories },
  });

  const handleChangeTimeFrame = useCallback((newValue) => {
    setSelectedTimeFrame(newValue);
  }, []);

  const currentSeries = salesData[selectedTimeFrame].series;

  return (
    <Card>
      <CardHeader
        sx={{ mb: 4 }}
        title={title}
        action={
          <ChartSelect
            options={['yearly', 'monthly', 'weekly']}
            value={selectedTimeFrame}
            onChange={handleChangeTimeFrame}
          />
        }
      />

      {/* Legends for Total Revenue and Total Orders with dollar sign */}
      <ChartLegends
        colors={chartColors}
        labels={currentSeries.map((item) => item.name)}
        values={currentSeries.map(
          (item) => `$${fShortenNumber(item.data.reduce((a, b) => a + b, 0))}`
        )}
        sx={{ px: 3, gap: 3 }}
      />

      <Chart
        type="area"
        series={currentSeries}
        options={chartOptions}
        height={320}
        sx={{ py: 2.5, pl: 1, pr: 2.5 }}
      />
    </Card>
  );
}
