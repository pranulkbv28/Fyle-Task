# Project Details

This is the completed project of the challenge outline: "Tax Calculator"

## Edge Cases Looked At

- Overall income (after deductions) under 8 (≤) Lakhs is not taxed.
- Income over 8 (>) Lakhs, the amount over 8 Lakhs is taxed at:
  - 30% for people with age < 40
  - 40% for people with age ≥ 40 but < 60
  - 10% for people with age ≥ 60
- Error handling and displaying in all number fields
- age dropdown options:
  - <40
  - ≥ 40 & < 60
  - ≥ 60
  - If user has not entered this value and clicks on submit, show a error icon hovering over which should show that input field is mandatory
- Error icons should not be visible in the form by default.
- Clicking on submit should show a modal which would show the final values based on above calculations.

## Images

![Information Container on hover](./images/informationContainer.png)
*Caption: Information Container on hover*

![No error when number is shown](./images/noErrorWithOnlyNumbers.png)
*Caption: No error when number is shown*

![Error with character](./images//errorWithCharacter.png)
*Caption: Error with character*

![Error handling in all input fields](./images/allInputError.png)
*Caption: Error handling in all input fields*

![No Age Value Error Handling](./images/noAgeValue.png)
*Caption: No Age Value Error Handling*

![Matching given Test Case](./images/result.png)
*Caption: Matching given Test Case*

## Individual Edge Cases

![No negative value](./images/noNegativeValue.png)
*Caption: No negative value*

![No Value Added, means the value = 0](./images/noValueAdded.png)
*Caption: No Value Added, means the value = 0*

![Result of no value added](./images/noValueResult.png)
