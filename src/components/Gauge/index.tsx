import Svg, {Path} from 'react-native-svg';

interface GaugeProps {
  value?: number;
}

export const Gauge: React.FC<GaugeProps> = ({value = 0}) => {
  const center = 70 / 2;
  const radius = (70 - 7) / 2;
  const needleHeight = 50 - 15;

  const needleRotation = ((value / 100) * 240 - 120) % 360;

  const polarToCartesian = (
    centerX: number,
    centerY: number,
    radius: number,
    angleInDegrees: number,
  ) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  const describeArc = (
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number,
  ) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
    return [
      'M',
      start.x,
      start.y,
      'A',
      radius,
      radius,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y,
    ].join(' ');
  };

  const needlePath = `
  M ${center - 3} ${50 - 7}
  L ${center + 3} ${50 - 7}
  L ${center} ${50 - needleHeight}
  Z
  `;

  return (
    <Svg height={50} width={70}>
      <Path
        d={describeArc(center, center, radius, -120, 0)}
        fill="none"
        stroke="#02C338"
        strokeWidth={7}
      />
      <Path
        d={describeArc(center, center, radius, 0, 60)}
        fill="none"
        stroke="#FFE607"
        strokeWidth={7}
      />
      <Path
        d={describeArc(center, center, radius, 60, 120)}
        fill="none"
        stroke="#FB3D3D"
        strokeWidth={7}
      />
      <Path
        d={needlePath}
        fill="#B2B8CA"
        transform={`rotate(${needleRotation} ${center} ${center})`}
      />
    </Svg>
  );
};
