import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import qrcode from 'qrcode-generator';

type CascadesGuestStayQrCodeProps = {
  value: string;
  size: number;
  darkColor?: string;
  lightColor?: string;
};

export function CascadesGuestStayQrCode({
  value,
  size,
  darkColor = '#1A1A1A',
  lightColor = '#FFFFFF',
}: CascadesGuestStayQrCodeProps) {
  const {matrix, cellSize, gridSize} = useMemo(() => {
    const qr = qrcode(0, 'M');
    qr.addData(value);
    qr.make();

    const count = qr.getModuleCount();
    const rows: boolean[][] = [];

    for (let row = 0; row < count; row++) {
      const cells: boolean[] = [];
      for (let col = 0; col < count; col++) {
        cells.push(qr.isDark(row, col));
      }
      rows.push(cells);
    }

    const moduleCellSize = Math.floor(size / count);
    const totalGridSize = moduleCellSize * count;

    return {
      matrix: rows,
      cellSize: moduleCellSize,
      gridSize: totalGridSize,
    };
  }, [size, value]);

  return (
    <View
      style={[
        styles.cascadesGuestStayContainer,
        {width: size, height: size, backgroundColor: lightColor},
      ]}>
      <View
        style={{
          width: gridSize,
          height: gridSize,
        }}>
        {matrix.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.cascadesGuestStayRow}>
            {row.map((isDark, colIndex) => (
              <View
                key={colIndex}
                style={{
                  width: cellSize,
                  height: cellSize,
                  backgroundColor: isDark ? darkColor : lightColor,
                }}
              />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cascadesGuestStayContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  cascadesGuestStayRow: {
    flexDirection: 'row',
  },
});
