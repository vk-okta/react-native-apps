import { StyleSheet, Text, View } from 'react-native';

import { GlobalStyles } from '../../constants/styles';

const ExpensesSummary = ({ expenses, periodName }) => {
  const expensesSum = expenses.reduce((sum, expenses) => {
    return sum + expenses.amount;
  }, 0);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>Rs. {expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary500,
  },
  sum: {
    fontSize: 16,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary700,
  },
});
