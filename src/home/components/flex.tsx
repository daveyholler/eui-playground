import { useState } from 'react';

import {
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiText,
} from '@elastic/eui';

export const FlexExample:React.FC = () => {
  const [flexCount, setFlexCount] = useState([1]);

  const updateCount = () => {
    let count = [...flexCount, 1];
    setFlexCount(count)
  }

  return (
    <>
      <EuiFlexGroup direction="column" gutterSize="xs">
        <EuiFlexItem>
          <EuiFlexGroup gutterSize="xs">
            <EuiFlexItem style={{ padding: '2rem', backgroundColor: 'black' }}>
              <EuiText color="ghost">Ferocious Flex</EuiText>
            </EuiFlexItem>
            <EuiFlexItem style={{ padding: '2rem', backgroundColor: 'black' }}>
              <EuiText color="ghost">Ferocious Flex</EuiText>
            </EuiFlexItem>
            <EuiFlexItem style={{ padding: '2rem', backgroundColor: 'black' }}>
              <EuiText color="ghost">Ferocious Flex</EuiText>
            </EuiFlexItem>
            <EuiFlexItem style={{ padding: '2rem', backgroundColor: 'black' }}>
              <EuiText color="ghost">Ferocious Flex</EuiText>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiFlexGroup gutterSize="xs">
            {flexCount.map(item => (
              <EuiFlexItem key={item} style={{ padding: '2rem', backgroundColor: 'tan' }}>
                <EuiText size={flexCount.length < 6 ? 'm' : 'xs'} color="ghost">Ferocious Flex</EuiText>
              </EuiFlexItem>
            ))}
          </EuiFlexGroup>
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiSpacer />
      <EuiFlexGroup alignItems="center" justifyContent="center">
        <EuiFlexItem grow={false}>
          <EuiButton color="text" fill onClick={updateCount}>💪 Flex <span style={{ transform: 'scale(-1, 1)', display: 'inline-block' }}>💪</span></EuiButton>
        </EuiFlexItem>
      </EuiFlexGroup>
    </>
  )
}
