import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {CascadesGuestStayNav} from './CascadesGuestStayNav';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={styles.cascadesGuestStayRoot}>
      <SafeAreaProvider>
        <View style={styles.cascadesGuestStayRoot}>
          <StatusBar barStyle="light-content" backgroundColor="#0C1824" />
          <CascadesGuestStayNav />
        </View>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  cascadesGuestStayRoot: {
    flex: 1,
    backgroundColor: '#0C1824',
  },
});

export default App;
